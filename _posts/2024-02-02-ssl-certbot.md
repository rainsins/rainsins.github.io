---
title: 「解决问题」使用certbot和Let’s Encrypt为本地服务器部署ssl
author: rainsin
date: 2024-2-2 16:32:10 +0800
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
comments: true

favicon: code

post: true
description: 使用certbot和Let’s Encrypt为本地服务器部署ssl
keywords: rainsin, blog, 解决问题, certbot, Let’s Encrypt, ssl
author: rainsin
---

以前我的树莓派的SSL一直需要我在[51SSL](https://www.51ssl.com/)上手动申请，然后下载证书到服务器，比较麻烦。最近借着过年部署了一下certbot来完成申请证书的操作，记录一下过程。

## 1. 安装 Certbot

```shell
sudo apt-get install certbot
```

## 2. 申请通配符证书

```shell
sudo certbot -d domain.com -d "*.domain.com" --manual --preferred-challenges dns certonly --server https://acme-v02.api.letsencrypt.org/directory
```
会得到以下输出：

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

## 3. 更新apache2证书

为每个主机加上：

```xml
<VirtualHost *:2000>
    ServerName  xxx.domain.com
    ServerAlias xxx

    SSLEngine on
    SSLProxyEngine On
    SSLProxyCheckPeerCN Off
    SSLProxyVerify none
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

## 4. 自动续期

编辑计划任务

```shell
crontab -e
```

输入下面的表达式（每天 00:00:00），让他每天都尝试一次关闭 Nginx->更新->启动 Apache2，到了最后 30 天的时候就会成功。

```shell
0 0 * * * "service nginx stop ; /bin/certbot renew --renew-by-default; service nginx start"
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