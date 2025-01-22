---
title: 「解决问题」使用certbot和Let’s Encrypt为本地服务器部署ssl
date: 2025-01-12 13:58:10 +0800
categories: [解决问题]
tags: [解决问题]
pin: false
math: false
react: false
mermaid: false
video: true
music: false
cube: false
babel: false

mathpolt: false
jquery: false
forbid: true

pangu: true

favicon: code

post: true
keywords: rainsin, blog, 解决问题, certbot, Let’s Encrypt, ssl
author: rainsin
---

以前我的树莓派的SSL一直需要我在[51SSL](https://www.51ssl.com/)上手动申请，然后下载证书到服务器，比较麻烦。最近借着证书到期部署了一下certbot来完成申请证书的操作，记录一下过程。

## 1. 安装 Certbot

```shell
sudo apt-get update
```

```shell
sudo apt-get install certbot
```

我是用aptitude安装的：

```shell
sudo aptitude update
```

```shell
sudo aptitude install certbot
```

## 2. 申请证书 

### 2.1 有官方插件

比如，我使用的是cloudflare：

先创建包含token的ini文件：

```shell
mkdir certbot && cd certbot && touch cloudflare.ini
```

如果使用的是全局API:

```ini
# Cloudflare API credentials used by Certbot
dns_cloudflare_email = cloudflare@example.com
dns_cloudflare_api_key = 0123456789abcdef0123456789abcdef01234
```
{: file='/home/(your)/certbot/cloudflare.ini'}

不是全局就删掉email，按下<kbd>Ctrl</kbd>+<kbd>X</kbd>，再<kbd>Shift</kbd>+<kbd>Y</kbd>保存。

```shell
certbot certonly \
  --dns-cloudflare \
  --dns-cloudflare-credentials /home/(your)/certbot/cloudflare.ini \
  --post-hook='systemctl reload apache2 && systemctl restart apache2' \
  -d example.com
```

其他的可以看官方的[文档](https://eff-certbot.readthedocs.io/en/stable/using.html#dns-plugins)。

插件列表：

- certbot-dns-cloudflare
- certbot-dns-digitalocean
- certbot-dns-dnsimple
- certbot-dns-dnsmadeeasy
- certbot-dns-gehirn
- certbot-dns-google
- certbot-dns-linode
- certbot-dns-luadns
- certbot-dns-nsone
- certbot-dns-ovh
- certbot-dns-rfc2136
- certbot-dns-route53
- certbot-dns-sakuracloud

### 2.2 没有官方插件

我没有用cloudflare插件，而是用的自己下载的脚本，如果你的域名是其他的服务商（阿里云 DNS、腾讯云 DNS、华为云 NDS、GoDaddy）没有官方插件，一个解决办法就是换成cloudflare的域名解析服务，将dns服务器改成cloudflare就行，这样就可以用我的这个方案或者官方插件，不然还是得你自己找脚本。

#### 2.2.1 先创建更新DNS的脚本

我用的是Cloudflare的DNS解析，如果你用的是其他云服务商，可以在github上找找，应该都会有的，用这个脚本更新DNS解析以验证域名归属：

##### 1. 先安装python3（如果没有）和jq

```shell
sudo aptitude install python jq
```

##### 2. 创建hook脚本

```shell
mkdir certbot && cd certbot && touch cloudflare-dns-hook.py
```

上面的命令会在你的`~`路径下创建一个`certbot`的文件夹，在这个文件夹下创建`cloudflare-dns-hook.sh`脚本文件，路径为：`/home/<你的用户名>/certbot/cloudflare-dns-hook.py`。

##### 3. 编辑脚本

```shell
nano cloudflare-dns-hook.py
```

输入以下文本，修改`zones`对象为你的域名和token：

```py
#!/usr/bin/env python3
zones = {
    "<your-domain>": {"token": "<your-api-token>"},
}

import os, json
from time import sleep
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError

def cfAPI(endpoint, token, **kwargs):
    try:
        req = urlopen(
            Request(f"https://api.cloudflare.com/client/v4/{endpoint}",
                headers={
                    "Authorization": f"Bearer {token}",
                    "Content-Type": "application/json; charset=utf-8"
                },
                **kwargs
            )
        )
    except HTTPError as e:
        err = json.load(e)["errors"][0]

        hints = {
            6003:  "Make sure you copied the whole token",
            10000: "Ensure the token and token permissions are correct"
        }

        raise Exception("Cloudflare API Error: {} {}.{}".format(err["code"], err["message"], f' ({hints[err["code"]]})' if err["code"] in hints else "")) from None
    except URLError as e:
        raise Exception("Could not reach Cloudflare API!") from e

    return json.load(req)

matchZone = lambda recName, zones: max((z for z in zones if recName == z or recName.endswith(f".{z}")), key=len, default=False)

def getZoneID(record_name, token):
    zoneIDs = {
        zone["name"]: zone["id"] for zone in cfAPI("zones", token)["result"]
    }

    return zoneIDs.get(matchZone(record_name, zoneIDs), False)


if "CERTBOT_DOMAIN" not in os.environ:
    raise SystemExit("It doesn't look like this script was called from certbot")


if "CERTBOT_AUTH_OUTPUT" not in os.environ:
    # Do auth

    CERT_DOMAIN = os.environ["CERTBOT_DOMAIN"]
    VALIDATION_TOKEN = os.environ["CERTBOT_VALIDATION"]
    REMAINING_CHALLENGES = os.environ["CERTBOT_REMAINING_CHALLENGES"]

    # Find the longest matching zone for this cert domain
    matched_zone = matchZone(CERT_DOMAIN, zones)

    if not matched_zone:
        raise SystemExit(f"The zone of {CERT_DOMAIN} is not present in {os.path.abspath(__file__)}. Please add the Cloudflare zone to the `zones` dict in that script.")


    # Get record_name from conf for CNAME operation, or default to standard _acme-challenge
    record_name = zones[matched_zone].get("record_name", f"_acme-challenge.{CERT_DOMAIN}")

    # Get zone id for record_name from Cloudflare
    zone_id = getZoneID(record_name, zones[matched_zone].get("token"))

    if not zone_id:
        raise SystemExit(f"The zone of {record_name} doesn't exist in the Cloudflare account, or the API token doesn't have permission to access it.")

    # Add record
    res = cfAPI(f"zones/{zone_id}/dns_records",
        token=zones[matched_zone]["token"],
        data=json.dumps({
            "type": "TXT",
            "name": record_name,
            "content": VALIDATION_TOKEN,
            "ttl": 60
        }).encode("utf-8")
    )

    # Output details for removing the record later
    print(json.dumps({
        "zone_id": zone_id,
        "record_id": res["result"]["id"],
        "matched_zone": matched_zone
    }))

    # Wait for propagation
    if REMAINING_CHALLENGES == "0": sleep(10)

else:
    # Do cleanup
    try:
        # Load details passed from adding the record
        addedRecord = json.loads(os.environ["CERTBOT_AUTH_OUTPUT"])

        # Remove record
        res = cfAPI(f'zones/{addedRecord["zone_id"]}/dns_records/{addedRecord["record_id"]}',
            token=zones[addedRecord["matched_zone"]]["token"],
            method="DELETE"
        )
    except (json.decoder.JSONDecodeError, KeyError) as e:
        raise SystemExit("Error preparing to remove record. Maybe adding the record wasn't successful.")
```
{: file='/home/your/certbot/cloudflare-dns-hook.py'}

按下<kbd>Ctrl</kbd>+<kbd>X</kbd>，再<kbd>Shift</kbd>+<kbd>Y</kbd>保存。

##### 4. 申请证书

```shell
sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --manual-auth-hook="python3 /home/<your>/certbot/cloudflare-dns-hook.py" --manual-cleanup-hook="python3 /home/<your>/certbot/cloudflare-dns-hook.py"  --post-hook="systemctl reload apache2 && systemctl restart apache2" --manual --preferred-challenges dns -d 'domain.cn,*.domain.cn'
```

上面`--manual-auth-hook`在申请证书时验证域名归属时执行，而`--manual-cleanup-hook`则是验证完成之后删除对应的txt解析条目，`--post-hook`是证书部署之后要执行的命令，我的是重启apache。

如果成功就会有以下输出：

```shell
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Certificate not yet due for renewal

You have an existing certificate that has exactly the same domains or certificate name you requested and isn't close to expiry.
(ref: /etc/letsencrypt/renewal/rainsin.cn.conf)

Renewing an existing certificate for rainsin.cn and *.rainsin.cn

Successfully received certificate.
Certificate is saved at: /etc/letsencrypt/live/rainsin.cn/fullchain.pem
Key is saved at:         /etc/letsencrypt/live/rainsin.cn/privkey.pem
This certificate expires on 2025-01-21.
These files will be updated when the certificate renews.
Certbot has set up a scheduled task to automatically renew this certificate in the background.

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
If you like Certbot, please consider supporting our work by:
 * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
 * Donating to EFF:                    https://eff.org/donate-le
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
```

证书文件放在了`/etc/letsencrypt/live/`路径下，还会生成一个`conf`文件，后面续期时用的这个文件，在`/etc/letsencrypt/renewal/`路径下，文件结构如下：

```conf
# renew_before_expiry = 30 days
version = 1.21.0
archive_dir = /etc/letsencrypt/archive/rainsin.cn
cert = /etc/letsencrypt/live/rainsin.cn/cert.pem
privkey = /etc/letsencrypt/live/rainsin.cn/privkey.pem
chain = /etc/letsencrypt/live/rainsin.cn/chain.pem
fullchain = /etc/letsencrypt/live/rainsin.cn/fullchain.pem

# Options used in the renewal process
[renewalparams]
account = xxxxxxxxxxxxxxxxxxxxx
authenticator = manual
server = https://acme-v02.api.letsencrypt.org/directory
pref_challs = dns-01,
post_hook = systemctl reload apache2 && systemctl restart apache2
manual_auth_hook = python3 /home/ubuntu/certbot/certbot-cloudflare-hook.py
manual_cleanup_hook = python3 /home/ubuntu/certbot/certbot-cloudflare-hook.py
```
{: file='/etc/letsencrypt/renewal/rainsin.cn.conf'}

后续续期使用的就是这个文件。

### 2.3 没有脚本也没插件

如果没有脚本也没插件，续期会失败，需要手动验证域名。

```shell
sudo certbot certonly --server https://acme-v02.api.letsencrypt.org/directory --post-hook="systemctl reload apache2 && systemctl restart apache2" --manual --preferred-challenges dns -d 'domain.cn,*.domain.cn'
```

如果你没有上面的脚本就会像下面这样的输出，需要手动的在域名服务商的控制台添加txt解析条目：

```shell
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator manual, Installer None
Performing the following challenges:
dns-01 challenge for domain.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
NOTE: The IP of this machine will be publicly logged as having requested this
certificate. If you're running certbot in manual mode on a machine that is not
your server, please ensure you're okay with that.

Are you OK with your IP being logged?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: 
```

输入Yes同意将本机对的IP地址记录下来，接着系统显示下面的信息

```shell
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please deploy a DNS TXT record under the name
_acme-challenge.domain.com with the following value:

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Before continuing, verify the record is deployed.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Press Enter to Continue
```

在你的域名的DNS中加入一条TXT记录，记录名 _acme-challenge 值为上面的XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX, 然后按回车

验证你的DNS记录成功后，将为你颁发证书，证书会生成到/etc/letsencrypt/live/domain.com/ 目录下。 domain.com 是你申请的域名。

```shell
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/domain.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/domain.com/privkey.pem
   Your cert will expire on 2020-06-14. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

在到期之前需要你手动续期然后验证域名。

## 4. 更新apache2证书

为每个主机加上：

```xml
<VirtualHost *:xxxx>
    ServerName  xxx.domain.com
    ServerAlias xxx

    + SSLEngine on
    + SSLProxyEngine On
    + SSLProxyCheckPeerCN Off
    + SSLProxyVerify none
    + SSLCertificateFile /etc/letsencrypt/live/domain.com/cert.pem
    + SSLCertificateKeyFile /etc/letsencrypt/live/domain.com/privkey.pem
    + SSLCertificateChainFile /etc/letsencrypt/live/domain.com/chain.pem

    <Proxy *>
            Order deny,allow
            Allow from all
    </Proxy>

    ProxyPreserveHost On
    ProxyRequests On

    ProxyPass / http://localhost:xxxx/
    ProxyPassReverse / http://localhost:xxxx/
</VirtualHost>
```

```shell
service apache2 force-reload

service apache2 restart
```

## 5. 自动续期

编辑计划任务

```shell
sudo crontab -e
```

输入下面的表达式（每天 00:00:00），让他每天都尝试一次，到了最后 30 天的时候就会成功。

```shell
0 0 * * * certbot renew --quiet
```

**crontab的使用实例**

实例1：每1分钟执行一次myCommand

```shell
* * * * * myCommand
```

实例2：每小时的第3和第15分钟执行

```shell
3,15 * * * * myCommand
```

实例3：在上午8点到11点的第3和第15分钟执行

```shell
3,15 8-11 * * * myCommand
```

实例4：每隔两天的上午8点到11点的第3和第15分钟执行

```shell
3,15 8-11 */2  *  * myCommand
```

实例5：每周一上午8点到11点的第3和第15分钟执行

```shell
3,15 8-11 * * 1 myCommand
```

实例6：每晚的21:30重启smb

```shell
30 21 * * * /etc/init.d/smb restart
```

实例7：每月1、10、22日的4 : 45重启smb

```shell
45 4 1,10,22 * * /etc/init.d/smb restart
```

实例8：每周六、周日的1 : 10重启smb

```shell
10 1 * * 6,0 /etc/init.d/smb restart
```

## FAQ

**证书重置请求超过次数，一般 3 次，子域名除外。就会出现如下错误，5 天以后才可以再次重置。**

```shell
An unexpected error occurred: 
There were too many requests of a given type :: Error creating new order :: too many certificates already issu for exact set of domains: blog.frankfeekr.cn: see https://letsencrypt.org/docs/rate-limits/
```


