---
title: 「教程」创建自己的影视库和各种服务
date: 2023-06-10 11:33:00 +0800
categories: [Server, 音视频]
tags: [树莓派, 流程, ubuntu, Emby, Gitea, Apache, Docker, Bt, Bot]
pin: false
math: false
mermaid: true
react: false
video: false
music: false
mathpolt: false
jquery: false
forbid: true
pangu: true

favicon: code

post: true
description: 本文介绍了一些常见的服务器服务的安装和常见的问题解决，坏了之后可以按这个步骤再重新弄。
keywords: rainsin, blog, 树莓派, 流程, ubuntu, Emby, Gitea, Apache, Docker
author: rainsin
---



## 服务器相关配置

万一服务器有问题，按这个步骤来。带星号`*` 是舍弃的项目。

设置su密码：

```bash
sudo passwd
```

## 0 终端设置与美化

### 0.1 命令行使用代理

安装：

```bash
sudo apt install proxychains4
```

打开配置文件

```bash
sudo nano /etc/proxychains4.conf
```

在尾部添加代理服务器协议 + ip + port

```bash
# socks4 127.0.0.1 9050 # 把原来的注释掉
socks5 127.0.0.1 1080
```

使用：

```bash
proxychains4 <命令>
```

### 0.2 安装nushell和配置Oh-my-posh

#### 0.2.1 **安装 Rust**

```bash
sudo apt install gcc #rust必需要的

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### 0.2.2 安装依赖

```bash
sudo apt install pkg-config libssl-dev
sudo apt install libxcb-composite0-dev libx11-dev
```

#### 0.2.3 使用 [crates.io](https://crates.io/) 进行构建

```bash
cargo install nu
```

安装完毕后，我们可以使用 `nu` 命令运行 Nu。

#### 0.2.4 nu安装扩展

将扩展的仓库`clone` 下来，然后构建执行文件。

```bash
git clone <repositories.git>

cd <repositories>
cargo build --release
register ./target/release/<repositories>
```

#### 0.2.5 Oh-my-posh

参考 [官方文档](https://ohmyposh.dev/docs/installation/linux) ，很详尽。

## 1 fstab文件的配置

### 1.1 查看磁盘空间

```bash
sudo fdisk -l
```

### 1.2 查看磁盘信息

```bash
blkid
```

### 1.3 找到fstab文件

```bash
cd /etc
```

### 1.4 打开fstab，我习惯用nano

```bash
sudo nano fstab
```

### 1.5 编辑

在尾部加入以下

```bash
LABEL=writable  /       ext4    discard,errors=remount-ro       0 1
UUID="3C2831055A5270C3" /mdata ntfs defaults 0 1
UUID="5CB7E03A333A1F21" /movie ntfs defaults 0 1
UUID="26BADED554B2A139" /rdata ntfs defaults 0 1
UUID="30B8B9F6B8B9BB24" /avdata ntfs defaults 0 1
UUID="451F30BC5E8250E3" /home/ubuntu/pdata ntfs defaults 0 1
```

`ctrl` + `x`保存，重启生效。

## 2 samba配置

### 2.1 安装samba

要安装 Samba，我们运行：

```bash
sudo apt update
sudo apt install samba
```

### 2.2 设置Samba

现在安装了 Samba，我们需要创建一个目录供其共享：

```bash
mkdir <pathname>
```

上面的命令创建一个新文件夹 `sambashare`在我们稍后将共享的主目录中，我直接分享 `~` 目录。

Samba 的配置文件位于 `/etc/samba/smb.conf`. 要将新目录添加为共享，我们通过运行以下命令来编辑文件：

```bash
sudo nano /etc/samba/smb.conf
```

在文件底部，添加以下行：

```
[sambashare] 
		comment = <title>
    path = <pathname>
    read only = no
    browsable = yes
```

然后按 `Ctrl-O`保存和 `Ctrl-X`退出文本编辑器。

现在我们已经配置了新共享，保存它并重新启动 Samba 使其生效：

```bash
sudo service smbd restart
```

更新防火墙规则以允许 Samba 流量：

```bash
sudo ufw allow samba
```

由于 Samba 不使用系统帐户密码，因此我们需要为我们的用户帐户设置一个 Samba 密码：

```bash
sudo smbpasswd -a username //username为用户名
```

windows用IPv6访问：

```
\\240e-335-2805-2be0-dea6-32ff-fefe-1496.ipv6-literal.net
```

`:` 用 `-` 分隔。

## 3 安装Emby

### 3.1 下载Emby

链接：[Arm64架构](https://github.com/MediaBrowser/Emby.Releases/releases/download/4.7.11.0/emby-server-deb_4.7.11.0_arm64.deb)，[X64架构](https://github.com/MediaBrowser/Emby.Releases/releases/download/4.7.11.0/emby-server-deb_4.7.11.0_amd64.deb)

### 3.2 安装

```bash
dpkg -i emby-server-deb_4.7.11.0_arm64.deb //arm64架构
dpkg -i emby-server-deb_4.7.11.0_amd64.deb //X64架构
```


## 4 安装Docker

安装docker的命令很简单

```bash
sudo apt update
sudo apt install -y docker.io
```

安装的时间可能有一点长，请耐心等待。。。 安装完成后可能需要启动下。。

```bash
systemctl start docker
```

设置开机就启动docker

```bash
systemctl enable docker
```

查看docker是否安装成功

```bash
docker version
```

注意这里只显示了Client的信息，下面有一个报错: persission denied…，这个是因为我们安装的时候是用的sudo安装，在这里是没有权限连接docker的服务端，解决办法是把当前用户加入到docker组里面去。

首先新建一个docker组

```bash
sudo groupadd docker
```

但是很可能已经有了docker组了，已有的话就不用管了，继续下一步

然后把当前用户加入docker组

```bash
sudo gpasswd -a ${USER} docker
```

重启docker

```bash
sudo service docker restart
```

最后一步肥肠重要。。切换当前会话到新 group

```bash
newgrp - docker
```

最后测试下效果

```bash
docker version
```

```bash
Client:
 Version:           20.10.12
 API version:       1.41
 Go version:        go1.17.3
 Git commit:        20.10.12-0ubuntu4
 Built:             Mon Mar  7 17:11:41 2022
 OS/Arch:           linux/arm64
 Context:           default
 Experimental:      true

Server:
 Engine:
  Version:          20.10.12
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.3
  Git commit:       20.10.12-0ubuntu4
  Built:            Mon Mar  7 15:57:50 2022
  OS/Arch:          linux/arm64
  Experimental:     false
 containerd:
  Version:          1.5.9-0ubuntu3.1
  GitCommit:
 runc:
  Version:          1.1.0-0ubuntu1.1
  GitCommit:
 docker-init:
  Version:          0.19.0
  GitCommit:
```

最后的最后，因为国内网速问题，下载镜像比较慢所以可以使用国内大厂提供的加速器，我这里使用的是阿里云提供的加速器，使用镜像加速必须得改一下docker的配置文件 /etc/docker/daemon.json

```bash
sudo nano /etc/docker/daemon.json
```

在里面加入镜像加速器地址。。

```json
{  
		"registry-mirrors": ["https://registry.docker-cn.com"]
}
```

完成。

## 5 安装Bitwarden

一款密码管理器

开启HTTPS：

```bash
docker run -d --name bitwarden \
	-e ROCKET_TLS='{certs="/ssl/certs.pem",key="/ssl/key.key"}' \
  -v /home/ubuntu/Nginx/:/ssl/ \
  -v /Bitwarden/:/data/ \
  -p 443:80 \
  vaultwarden/server:latest
```

## 6 安装Alist*

一款小云盘

```bash
docker pull xhofe/alist:latest
docker run -d --restart=always -v /home/ubuntu:/opt/alist/data -p 5244:5244 -e UMASK=022 --name="alist" xhofe/alist:latest
```

查看管理员信息：

```bash
docker exec -it alist ./alist admin
```

可以使用另外一个项目：

```bash
sudo docker run -d \
    --name=zfile \
    --restart=always \
    -p 3555:8080 \
    -v /root/zfile/conf:/root/.zfile-v4 \
    -v /home/ubuntu/pdata/zfile/file:/root/zfile/data \
		stilleshan/zfile
```

## 7 安装DDNS

```bash
docker run -d --name ddns-go --restart=always --net=host -v /opt/ddns-go:/root jeessy/ddns-go
```

## 8 安装Excalidraw

一款画板工具

```
docker run --rm -dit --name excalidraw -p 5000:80 jauderho/excalidraw
```

## 9 Apache配置

### 9.1 安装Apache

```
sudo apt-get  install  -y apache2
```

### 9.2 开启Apache中对Webdav协议的支持

#### 9.2.1 开启Apache中对Webdav协议的支持 (记住最好在用户目录下执行否则报错)

```bash
cd ~
sudo a2enmod dav
sudo a2enmod dav_fs
```

#### 9.2.2 创建共享目录并修改权限

```bash
sudo mkdir -p /var/www/webdav
sudo chown -R www-data:www-data  /var/www/webdav
```

#### 9.2.3 创建Webdav的访问用户数据库，顺便创建用户`pi`和`guest`

```bash
sudo htpasswd -c /etc/apache2/webdav.password pi
#sudo htpasswd /etc/apache2/webdav.password guest
```

#### 9.2.4 修改用户数据库访问权限

```bash
sudo chown root:www-data /etc/apache2/webdav.password
sudo chmod 640 /etc/apache2/webdav.password
```

#### 9.2.5 打开默认配置文件

```bash
sudo nano /etc/apache2/sites-available/000-default.conf
```

全部替换为以下内容（记得先备份）：

```bash
Alias /webdav  /var/www/webdav

<Location /webdav>
 Options Indexes
 DAV On
 AuthType Basic
 AuthName "webdav"
 AuthUserFile /etc/apache2/webdav.password
 Require valid-user
</Location>
```

原文件：

```
<VirtualHost *:80>
        # The ServerName directive sets the request scheme, hostname and port that
        # the server uses to identify itself. This is used when creating
        # redirection URLs. In the context of virtual hosts, the ServerName
        # specifies what hostname must appear in the request's Host: header to
        # match this virtual host. For the default virtual host (this file) this
        # value is not decisive as it is used as a last resort host regardless.
        # However, you must set it for any further virtual host explicitly.
        #ServerName www.example.com

        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html

        # Available loglevels: trace8, ..., trace1, debug, info, notice, warn,
        # error, crit, alert, emerg.
        # It is also possible to configure the loglevel for particular
        # modules, e.g.
        #LogLevel info ssl:warn

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        # For most configuration files from conf-available/, which are
        # enabled or disabled at a global level, it is possible to
        # include a line for only one particular virtual host. For example the
        # following line enables the CGI configuration for this host only
        # after it has been globally disabled with "a2disconf".
        #Include conf-available/serve-cgi-bin.conf
</VirtualHost>
```

```bash
sudo /etc/init.d/apache2 force-reload
sudo /etc/init.d/apache2 restart
```

### 9.3 设置https

**前提条件**

- 已下载Apache服务器证书。
- 已安装Open SSL。

**环境准备**

- 操作系统：Ubuntu
- Web服务器：Apache 2

#### 1 执行以下命令，在`apache2`目录下创建`ssl`目录。

```bash
mkdir /etc/apache2/cert
```

#### 2 执行以下命令，将下载的阿里云证书文件复制到`ssl`目录中。

```bash
cp -r YourDomainName_public.pem /etc/apache2/cert
cp -r YourDomainName_chain.pem /etc/apache2/cert
cp -r YourDomainName.key /etc/apache2/cert
```

#### 3 执行以下命令，启用SSL模块

```bash
sudo a2enmod ssl
```

#### 4 执行以下命令，修改SSL配置文件default-ssl.conf

```bash
nano /etc/apache2/sites-available/default-ssl.conf
```

在default-ssl.conf文件中找到以下参数，修改后保存并退出。

```yaml
<IfModules mod_ssl.c>
<VirtualHost *:443>  
...
ServerName   #修改为证书绑定的域名。
SSLEngine on
SSLCertificateFile /home/ubuntu/.ssl/apache2/rainsin.cn_cert.pem
SSLCertificateKeyFile /home/ubuntu/.ssl/apache2/rainsin.cn_key.key
SSLCertificateChainFile /home/ubuntu/.ssl/apache2/rainsin.cn_chain.pem
...
</VirtualHost>
</IfModules
```

#### 5 执行以下命令，把default-ssl.conf映射至/etc/apache2/sites-enabled文件夹中建立软链接，实现两者之间的自动关联。

```bash
sudo ln -s /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-enabled/001-ssl.conf
```

#### 6 执行以下命令，重新加载Apache 2配置文件。

```bash
sudo /etc/init.d/apache2 force-reloadsudo /etc/init.d/apache2 restart
```

完成。

#### 9.4 设置反向代理

```bash
sudo a2enmod rewrite　　　　//启用.htaccess规则，打开重写

sudo a2enmod proxy

sudo a2enmod proxy_http　　//启用反向代理
```

安装好后，Apache2 HTTP 服务器关于站点的配置文件位于 `/etc/apache2/sites-enabled/` 中，我们使用熟悉的编辑器（比如 nano 或者 vim）编辑默认生成的文件：

```bash
sudo nano /etc/apache2/sites-enabled/000-default.conf
```

在该配置文件的最底部，添加如下配置：

```yaml
<VirtualHost *:2000>
  ServerName <二级域名>.rainsin.cn
  ServerAlias <二级域名>.rainsin.cn
  SSLProxyEngine on
  SSLEngine on
  SSLCertificateFile /etc/apache2/cert/rainsin.cn/cert.pem
  SSLCertificateKeyFile /etc/apache2/cert/rainsin.cn/key.key
  SSLCertificateChainFile /etc/apache2/cert/rainsin.cn/chain.pem
  
  ProxyPass / http://localhost:<port>
  ProxyPassReverse / http://localhost:<port>
</VirtualHost>
```

我统一将所有的内部端口映射在2000端口上，用二级域名区分应用，在这之前需要将2000端口加入到`ports.conf`中，不然无法访问。

```bash
Listen 2000 //你在apache中用的的端口都要在这里配置
```

[服务器相关配置](https://www.notion.so/f4d21fd008da4c98a4e67ad89f9945ee?pvs=21)。


## 10 安装rss服务器

```bash
docker run -d \
  --name=freshrss \
  -e PUID=1000 \
  -e PGID=1000 \
  -e TZ=Asia/Shanghai \
  -p 3444:80 \
  -v /home/ubuntu/rss:/config \
  --restart unless-stopped \
  lscr.io/linuxserver/freshrss:latest
```

## 11 安装komga

一款漫画管理阅读软件

```bash
docker run -d \
  --name=komga \
  --user 1000:1000 \
  -p 2666:8080 \
  -v /home/ubuntu/komga/config:/config \
  -v /home/ubuntu/pdata/komga:/data \
  --restart unless-stopped \
  gotson/komga
```

## 12 安装webdav

主要用来zotero的备份

```bash
docker run --name webdav \
  --restart=unless-stopped \
  -p 3478:80 \
  -v <webdav-path>:/data \
  -e USERNAME=<webdav> \
  -e PASSWORD=<webdav> \
  -e UDI=1000 \
  -e GID=1000 \
  -d  derkades/webdav
```

## 13 图床安装

### 13.1 蓝空图床：

```bash
docker network create lsky-pro-net

docker run -d -p 3306:3306 --name mysql8.0.29 --network lsky-pro-net --network-alias mysql --restart=always -e MYSQL_ROOT_PASSWORD=123456 mysql:8.0.29

docker run -d --name=lsky-pro --restart=always --network lsky-pro-net -v /home/ubuntu/pdata/lsky-pro-data:/var/www/html -p 7791:80 dko0/lsky-pro:2.0.4

docker exec -it mysql8.0.29 bash

mysql -uroot -p123456

create user 'lskypro'@'%' identified by '123456';
grant all privileges on *.* to 'lskypro'@'%' with grant option;
flush privileges;
create database lskypro;
```

### 13.2 Chevereto-free安装：

```bash
docker run -d   --name=chevereto   -e PUID=1000   -e PGID=1000   -e TZ=Asia/Shanghai   -p 5080:80   -p 9999:443   -v /chevereto/config:/config   -v /mdata:/data   --restart unless-stopped   linuxserver/chevereto:latest
```

### 13.3 LightPicture的安装：

这个没有docker镜像，安装可能比较麻烦，过程中可能会有问题。

先决条件：

大环境：

- apache2
- php (7.2~7.4)
- MySQL(≥5.5)

PHP环境：

- PDO扩展
- GD库
- fileinfo扩展
- curl扩展
- ZipArchive 支持

Apache环境：

- rewrite模块
- SSL模块

#### 13.3.1 安装php（7.4版本）

**1. 使用apt-fast 提升下载速度的软件，安装软件时，通过增加线程使下载软件速度加快。**

```bash
sudo add-apt-repository ppa:apt-fast/stable
sudo apt-get install apt-fast
```

**2. 卸载系统中已有的php版本和扩展，如果以前安装过比7.4更高或比7.2更低的版本则需要运行。**

```bash
sudo apt-get autoremove php*
```

**3. 添加php7.4的源**

```bash
sudo add-apt-repository ppa:ondrej/php && sudo apt-get update
```

**4. 使用apt-fast 安装php7.4**

```bash
sudo apt-fast -y install php7.4
```

**5. 可能需要安装的扩展**

```bash
sudo apt-fast install php7.4-fpm php7.4-mysql php7.4-curl php7.4-json php7.4-mbstring php7.4-xml php7.4-intl php7.4-gd php7.4-bcmath php7.4-zip*
```

#### 13.3.2 MySQL的配置

**MySQL的安装在第17节。**

需要执行的`sql`文件在`public/install`路径下的`lp.sql`文件。

首先，需要创建database，可以使用MySQL管理软件创建也可以命令行进入MySQL创建，然后执行在`public/install`路径下的`lp.sql`文件。

我使用的是Navicat for windows，mac端好像也有，mac端也可以用Sequel Ace、MySQL Workbench、TablePlus等等。

也可以使用命令行：

```bash
sudo mysql -u root -p
```

输入密码，进入mysql：

```bash
CREATE DATABASE <name>;

use <name>;

source /path/to/lp.sql;
```

```yaml
systemctl restart php-fpm.service
```

#### 13.3.3 Apache2配置

将以下配置添加进apache的任意可生效的conf文件中：

```yaml
<VirtualHost *:2000>
				#你的域名，端口2000可以改
        ServerName  <url-name>
        ServerAlias <title>

				#HTTPS配置
        SSLEngine on

        SSLCertificateFile /home/ubuntu/.ssl/apache2/rainsin.cn_cert.pem
        SSLCertificateKeyFile /home/ubuntu/.ssl/apache2/rainsin.cn_key.key
        SSLCertificateChainFile /home/ubuntu/.ssl/apache2/rainsin.cn_chain.pem
				
				#设置为public的绝对路径
        DocumentRoot /path/to/public
				#首页文件
        DirectoryIndex index.html index.php
				#public文件的权限必须为可读可写，运行 chmod 755 /项目根目录/public
        <Directory "/LightPicture/public">
                Options FollowSymLinks ExecCGI
                AllowOverride All
                Order allow,deny
                Allow from all
                Require all granted
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

将以下文字添加进 `public/.htaccess` 中：

```yaml
<IfModule mod_rewrite.c>
  Options +FollowSymlinks -Multiviews
  RewriteEngine On

  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]
</IfModule>
```

开启rewrite模块：

```bash
sudo **a2enmod rewrite**
```

重启apache2：

```bash
sudo /etc/init.d/apache2 force-reload
sudo /etc/init.d/apache2 restart
```

#### 13.3.4 安装完成

设置`config/database.php` 文件：

```php
<?php

return [
    // 默认使用的数据库连接配置
    'default'         => env('database.driver', 'mysql'),

    // 自定义时间查询规则
    'time_query_rule' => [],

    // 自动写入时间戳字段
    // true为自动识别类型 false关闭
    // 字符串则明确指定时间字段类型 支持 int timestamp datetime date
    'auto_timestamp'  => true,

    // 时间字段取出后的默认时间格式
    'datetime_format' => 'Y-m-d H:i:s',

    // 时间字段配置 配置格式：create_time,update_time
    'datetime_field'  => '',

    // 数据库连接配置信息
    'connections'     => [
        'mysql' => [
            // 数据库类型
            'type'            => env('database.type', 'mysql'),
            // 服务器地址
            'hostname'        => env('database.hostname', '127.0.0.1'),
            // 数据库名
            'database'        => env('database.database', 'name'),
            // 用户名
            'username'        => env('database.username', 'root'),
            // 密码
            'password'        => env('database.password', 'password'),
            // 端口
            'hostport'        => env('database.hostport', '3306'),
            // 数据库连接参数
            'params'          => [],
            // 数据库编码默认采用utf8
            'charset'         => env('database.charset', 'utf8'),
            // 数据库表前缀
            'prefix'          => env('database.prefix', 'osuu_'),

            // 数据库部署方式:0 集中式(单一服务器),1 分布式(主从服务器)
            'deploy'          => 0,
            // 数据库读写是否分离 主从式有效
            'rw_separate'     => false,
            // 读写分离后 主服务器数量
            'master_num'      => 1,
            // 指定从服务器序号
            'slave_no'        => '',
            // 是否严格检查字段是否存在
            'fields_strict'   => true,
            // 是否需要断线重连
            'break_reconnect' => false,
            // 监听SQL
            'trigger_sql'     => env('app_debug', true),
            // 开启字段缓存
            'fields_cache'    => false,
        ],

        // 更多的数据库配置信息
    ],
];
```

在浏览器中输入`http(s)://ip+port/install` 进行安装，第一步会检查环境是否配置完成，会显示未配置好的部分，根据它的提示配置好后第二步就填写MySQL的信息，最后完成。

## 14 博客安装*

```bash
docker run \
  -it -d \
  --name halo \
  -p 8090:8090 \
  -v <path>:/root/.halo2 \
  halohub/halo:2.2.0 \
  --halo.external-url=http://localhost:8090/ \
  --halo.security.initializer.superadminuser=admin \
  --halo.security.initializer.superadminpassword=P@88w0rd
```

### 备份数据（重要）

```bash
cp -r <path> <备份path>
```

## 15 minio安装*

这是一个对象存储服务。

首先将域名的证书文件复制到`<config-path>/certs`下，`<config-path>`这是自定义的一个路径，将在后面映射在docker容器中，证书命名为`private.key`和`public.crt`，注意`pem`可以直接重命名为`crt`。

然后运行：

```bash
 docker run --network=host \
    -p 9000:9000 -p 9001:9001 --name minio \
    -d --restart=always \
    -e "MINIO_ACCESS_KEY=<username>" \
    -e "MINIO_SECRET_KEY=<password>" \
    -e "MINIO_SERVER_URL=https://minio.rainsin.cn:9000" \
    -v <data-path>:/data \
    -v <config-path>:/root/.minio \
    minio/minio server /data --console-address "minio.rainsin.cn:9001" --address "minio.rainsin.cn:9000"
```

不加`network=host`（访问宿主机网络），可能`minio.rainsin.cn`这个域名无法使用。

`MINIO_SERVER_URL`为分享链接域名。

~~以下弃用：~~

```bash
nohup sudo MINIO_ROOT_USER=admin MINIO_ROOT_PASSWORD=ABC871220 minio server /home/ubuntu/pdata/minio/data --console-address ":9001" &
```

## 16 MySQL安装

```bash
sudo apt-get install mysql-server
```

设置root账户配置为使用密码进行身份验证，并且设置密码：

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mypassword';

FLUSH PRIVILEGES;
```

`'localhost'` 可以改为`'%'` ，`mypassword` 是你的密码。

然后输入：

```bash
sudo mysql_secure_installation
```

输入上面设置的密码，之后全部`n`。

设置外网访问：

```sql
mysql -u root -p

mysql>use mysql;

mysql>update user set host = '%' where user =’root’;

mysql>flush privileges;

mysql>select host,user from user where user='root';
```

使用sql文件初始化数据库:

```
mysql -u root -p dbname<filename.sql
```

> 注意：dbname是自定义的数据库名，且必须先创建好。
> 

## 17 图书管理系统*

```bash
docker run -d --restart=always --name calibresrv_web -p 8083:8083 -v /mdata/book/config:/config -v /mdata/book/Library:/books -v /mdata/book/Books_Calibre:/Books_Calibre -v /mdata/book/Books_Calibre_Backup:/Books_Calibre_Backup \-v /mdata/book/Backup_Library:/Backup_Library  -e NOTIFICATIONS=enabled -e TOKEN="xxxxxxxxxxxxxxxxxxxxxxxxx" -e CHATID="xxxxxxxxx"  -d mephistoxol/calibresrv_web
```

```bash
docker run -d --name=calibre --security-opt seccomp=unconfined `#optional` -e PUID=1000 -e PGID=1000 -e TZ=Asia/Shanghai -e PASSWORD= `#optional` -e CLI_ARGS= `#optional` -p 8082:8080 -p 8081:8081 -v /path/to/data:/config --restart unless-stopped linuxserver/calibre:latest
```

## 18 Bt下载管理器*

### 18.1 transmission和qBittorrent的安装及配置

下载种子和做种工具。

qBittorrent的默认用户名/密码：`admin/adminadmin` 。

~~舍弃：~~

```bash
docker create --name=qbittorrent  -e WEBUIPORT=8080 -e PUID=1026 -e PGID=100 -e TZ=Asia/Shanghai -p 6881:6881 -p 6881:6881/udp -p 8087:8080 -v /mdata/bt/config:/config  -v /mdata/bt/download:/downloads --restart unless-stopped superng6/qbittorrent:latest

docker start qbittorrent
```

```bash
docker run -d --name=transmission -e PUID=1000 -e PGID=1000 -e TZ=Asia/Shanghai -e TRANSMISSION_WEB_HOME=/transmission-web-control/src -e USER=<user> -e PASS=<pass> -e WHITELIST=* -e PEERPORT=51413 -e HOST_WHITELIST=* -p 9091:9091 -p 51413:51413 -p 51413:51413/udp -v /mdata/config:/config -v /mdata/bt/downloads:/downloads -v /mdata/bt/watch/folder:/watch -v /home/ubuntu/transmission-web-control:/transmission-web-control --restart unless-stopped linuxserver/transmission:latest
```

#### 18.1.1 **下载 transmission-web-control**

GitHub地址：[https://github.com/ronggang/transmission-web-control](https://github.com/ronggang/transmission-web-control)

Gitee 地址： [https://gitee.com/culturist/transmission-web-control](https://gitee.com/culturist/transmission-web-control)

国内推荐在 Gitee 下载。

解压文件到本地目录。

#### 18.1.2 配置邮箱通知

1. 安装bsd-mailx
   
    ```bash
    sudo apt-fast install bsd-mailx
    
    ```
    
2. 配置`s-nail`
   
    ```bash
    sudo nano /etc/s-nail.rc
    ```
    
    配置邮箱SMTP服务：
    
    ```bash
    set from="xxxxxxxx@qq.com"   #用来发送邮件的邮箱
    set smtp="smtps://smtp.qq.com:465" #你所选邮箱的SMTP服务器
    set smtp-auth-user="xxxxxxxx@qq.com" 
    set smtp-auth-password="XXXXXXXXXXXX"  #邮箱授权码
    set smtp-auth=login
    ```
    
3. 测试
   
    ```bash
    echo "小可爱！" | s-nail -s "这是个测试邮件！" xxxxxxxx@qq.com 
    ```
    
4. Tg通知准备
   
    [https://t.me/BotFather](https://t.me/BotFather)，打开与它的聊天界面，不论是 Windows mac 还是 Android iOS 的 telegram 客户端。
    
    1. 创建 bot 以及获取 token
       
        输入 `/newbot`后回车，它会回复以下内容：
        
        > Alright, a new bot. How are we going to call it? Please choose a name for your bot.
        > 
    2. 这个名字是显示名称 （display name）,不是唯一识别码，现在随便设置一下，之后可以通过 `/setname`修改，比如设置成`Zhang san's sweety bot` 。
    3. 接着会让你设置唯一名称。字符串必须 endsWith `bot`，比如 `abc_bot`或 `Hellobot`都是合法的。如果你设置的名字已经被占用需要重新设置。比如你设置成了 `test_bot` 。
       
        > Good. Now let's choose a username for your bot. It must end in `bot`
        . Like this, for example: TetrisBot or tetris_bot.
        > 
    4. 恭喜！设置成功。会返回给你重要的 API token，务必要保存好它。另外你的 bot 的唯一 url 就已经生成: `[https://t.me/test_bot](https://t.me/test_bot)` 。
       
        > Done! Congratulations on your new bot. You will find it at 
        t.me/test_bot. You can now add a description, about section and profile 
        picture for your bot, see /help for a list of commands. By the way, when
         you've finished creating your cool bot, ping our Bot Support if you 
        want a better username for it. Just make sure the bot is fully 
        operational before you do this.
        > 
        > 
        > Use this token to access the HTTP API:
        > **12345678:sdfsfadsfasdfasdfasdfgdfhdfghfgh**
        > Keep your token secure and store it safely, it can be used by anyone to control your bot.
        > 
        > For a description of the Bot API, see this page: [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api)
        > 
        
        红色的字符就是`BOT API`的TOKEN。
        
    5. 一些其他必要的命令：
        - `/setdescription` 帮助你设置 bot 的描述
        - `/setuserpic` 设置 bot 的头像。上传的图片 size 需要大于等于 150x150。而且上传图片需要选择压缩，不能上传文件！
    6. 获取chat_id
       
        使用的url：`https://api.telegram.org/bot{token}/getUpdates` 
        
        使用第4步获得的 `token`替换上述 url 中的 `{token}`然后得到新的 url，复制粘贴到浏览器地址栏，回车请求。不出意外你会得到如下 response
        
        ```yaml
        {
            "ok": true,
            "result": []
        }
        ```
        
        很好。这时你打开你的 bot，随便和它说一句话，比如给它发一句 "Hello World"，或者将机器人添加进一个自建的群组或者频道，然后重新请求一遍上述的 url（替换过 token 的），不出意外你收到的 response 是这样了
        
        ```json
        {"ok":true,"result":[{"update_id":248345768,
        "my_chat_member":{"chat":{**"id":-1001779449685**,"title":"BT\u72b6\u6001\u673a","type":"supergroup"},"from":{"id":1270423426,"is_bot":false,"first_name":"Bill","last_name":"Wang","username":"Rainsins"},"date":1678610811,"old_chat_member":{"user":{"id":6213936314,"is_bot":true,"first_name":"chatGPT","username":"rainsinchat_bot"},"status":"left"},"new_chat_member":{"user":{"id":6213936314,"is_bot":true,"first_name":"chatGPT","username":"rainsinchat_bot"},"status":"member"}}},{"update_id":248345769,
        "message":{"message_id":4,"from":{"id":1270423426,"is_bot":false,"first_name":"Bill","last_name":"Wang","username":"Rainsins"},"chat":{"id":-929935885,"title":"BT\u72b6\u6001\u673a","type":"group","all_members_are_administrators":false},"date":1678610811,"migrate_to_chat_id":-1001779449685}},{"update_id":248345770,
        "message":{"message_id":1,"from":{"id":1087968824,"is_bot":true,"first_name":"Group","username":"GroupAnonymousBot"},"sender_chat":{"id":-1001779449685,"title":"BT\u72b6\u6001\u673a","type":"supergroup"},"chat":{"id":-1001779449685,"title":"BT\u72b6\u6001\u673a","type":"supergroup"},"date":1678610811,"migrate_from_chat_id":-929935885}},{"update_id":248345771,
        "message":{"message_id":2,"from":{"id":1270423426,"is_bot":false,"first_name":"Bill","last_name":"Wang","username":"Rainsins"},"chat":{"id":-1001779449685,"title":"BT\u72b6\u6001\u673a","type":"supergroup"},"date":1678610813,"new_chat_participant":{"id":5042722248,"is_bot":true,"first_name":"\u5c0fC-\u5de5\u5177\u4eba","username":"CAOYYDS_BOT"},"new_chat_member":{"id":5042722248,"is_bot":true,"first_name":"\u5c0fC-\u5de5\u5177\u4eba","username":"CAOYYDS_BOT"},"new_chat_members":[{"id":5042722248,"is_bot":true,"first_name":"\u5c0fC-\u5de5\u5177\u4eba","username":"CAOYYDS_BOT"}]}},{"update_id":248345772,
        "message":{"message_id":3,"from":{"id":1270423426,"is_bot":false,"first_name":"Bill","last_name":"Wang","username":"Rainsins"},"chat":{"id":-1001779449685,"title":"BT\u72b6\u6001\u673a","type":"supergroup"},"date":1678610831,"new_chat_participant":{"id":1745206100,"is_bot":true,"first_name":"\u6d88\u606f\u4e91\u2601\ufe0f","username":"MsgWikiBot"},"new_chat_member":{"id":1745206100,"is_bot":true,"first_name":"\u6d88\u606f\u4e91\u2601\ufe0f","username":"MsgWikiBot"},"new_chat_members":[{"id":1745206100,"is_bot":true,"first_name":"\u6d88\u606f\u4e91\u2601\ufe0f","username":"MsgWikiBot"}]}},{"update_id":248345773,
        "message":{"message_id":5,"from":{"id":1270423426,"is_bot":false,"first_name":"Bill","last_name":"Wang","username":"Rainsins","language_code":"zh-hans"},"chat":{"id":1270423426,"first_name":"Bill","last_name":"Wang","username":"Rainsins","type":"private"},"date":1678614094,"text":"/start","entities":[{"offset":0,"length":6,"type":"bot_command"}]}}]}
        ```
        
        如果有json美化插件，可能会好找一些，如果浏览器没有安装一些 json 美化插件，那么复制它们到任何一个在线 json 解析格式化网站，比如[https://www.sojson.com/](https://www.sojson.com/)选择对应的格式化功能格式化文本。
        
        ```json
        {
          "ok": true,
          "result": [
            {
              "update_id": 248345768,
              "my_chat_member": {
                "chat": {
                  **"id": -1001779449685,**
                  "title": "BT状态机",
                  "type": "supergroup"
                },
                ......
              }
            },
            .....
          ]
        }
        ```
        
        知道了 token 和 chatId 就可以使用 bot 了。
        
        **curl 测试**
        
        ```json
        curl -s -X POST https://api.telegram.org/bot{token}/sendMessage -d chat_id={chatId} -d text="Hello World"
        ```
    
5. 配置通知脚本
   
    transmission和qbittorrent的参数不同需要分别配置。可以将它们的脚本分别放在两个文件夹。
    
    ```bash
    cd /var
    sudo mkdir tm qb
    cd tm && sudo touch btmail.sh btadd.sh btseed.sh 
    cd ../
    cd qb && sudo touch btmail.sh btadd.sh
    sudo chmod +xr  /var/tm/*.sh /var/qb/*.sh
    ```
    
    然后分别编辑，可以自己写一些功能，比如通知tg、通知邮件、磁力管理（需要bash的一些知识）。
    
    `btmail.sh` 为磁力下载完成时运行，`btadd.sh`为添加磁力成功后运行，`btseed.sh`为磁力任务完成后运行。
    
    transmission变量规则：
    
    - `TR_APP_VERSION` - Transmission的版本, e.g. `4.0.0`
    - `TR_TIME_LOCALTIME`
    - `TR_TORRENT_BYTES_DOWNLOADED` - 磁力下载字节数
    - `TR_TORRENT_DIR` - 磁力下载位置
    - `TR_TORRENT_HASH` - 磁力哈希
    - `TR_TORRENT_ID`
    - `TR_TORRENT_LABELS` - 磁力标签
    - `TR_TORRENT_NAME` - 磁力名字 (不是文件名)
    - `TR_TORRENT_TRACKERS` - 磁力trcaker列表
    
    transmission可以添加以下内容，可以自由更改：
    
    ```bash
    #!/bin/sh
    
    NAIL=/usr/bin/s-nail
    PROXY=/usr/bin/proxychains4 #代理命令，telegram需要。
    
    totalsize=${TR_TORRENT_BYTES_DOWNLOADED}
    
    #格式化容量，将B转换为MB，GB等单位
    totalsize=${torrent_size}
    if [ 1024 -gt $totalsize ];
           then size="$totalsize"B
    elif [ 1048576 -gt $totalsize ];
           then
           size=`echo  "scale=3; a = $totalsize / 1024 ; if (length(a)==scale(a)) print 0;print a"  | bc `
    	size="$size"KB
    elif [ 1073741824 -gt $totalsize ];
           then
           size=`echo  "scale=3; a = $totalsize / 1048576 ; if (length(a)==scale(a)) print 0;print a"  | bc `
    	size="$size"MB
    elif [ 1073741824 -le $totalsize ];
           then
           size=`echo  "scale=3; a = $totalsize / 1073741824 ; if (length(a)==scale(a)) print 0;print a"  | bc `
    	size="$size"GB
    else
           size="0"
            fi
    
    #telegram通知
    
    TMPFILETG=$(mktemp -t qbittorent.XXXXXXXXXX)
    #bot的TOKEN，和chat_id，获取方法参见上条。
    TOKEN=********:**************************
    chat_ID=-***************
    
    #信息内容
    cat > $TMPFILETG << EOF
    *亲，transmission有个磁力🧲下载完成了，赶紧去看看!*
    ---
    客户端：transmission-${TR_APP_VERSION}，
    磁力名称：${TR_TORRENT_NAME}，
    磁力大小：${size}，
    保存地址：${TR_TORRENT_DIR}，
    磁力链接：*magnet:?xt=urn:btih:${TR_TORRENT_HASH}*，
    添加时间：$(date '+%Y-%m-%d %H:%M:%S')，
    发扬互联网精神，抵制迅雷吸血💩。
    发扬互联网精神,让每一个种子都生根发芽❀。
    EOF
    
    #读取内容
    DATA=`cat $TMPFILETG`
    
    MODE='Markdown'
    URL="https://api.telegram.org/bot${TOKEN}/sendMessage"
    
    #还可以发送视频，图片等，具体可以参考tg bot api官网
    
    $PROXY curl -s -o /dev/null -X POST $URL -d chat_id=${chat_ID} -d parse_mode=${MODE} -d text="${DATA}"
    
    #邮件通知
    
    #要发送的邮件
    TO_ADDR1="**********@gmail.com"
    TO_ADDR2="***********@qq.com"
    #TO_ADDR2="***********@163.com"
    
    #邮件主题
    SUBJECT="亲，transmission有个磁力🧲下载完成了，赶紧去看看!"
    
    #发送邮件
    $NAIL -s "$SUBJECT" "$TO_ADDR1" < "$TMPFILETG"
    $NAIL -s "$SUBJECT" "$TO_ADDR2" < "$TMPFILETG"
    
    #删除临时文件
    rm "$TMPFILETG"
    ```
    
    qbittorrent变量规则：
    
    - %N：Torrent 名称
    - %L：分类
    - %G：标签（以逗号分隔）
    - %F：内容路径（与多文件 torrent 的根目录相同）
    - %R：根目录（第一个 torrent 的子目录路径）
    - %D：保存路径
    - %C：文件数
    - %Z：Torrent 大小（字节）
    - %T：当前 tracker
    - %I: 信息哈希值 v1
    - %J：信息哈希值 v2
    - %K: Torrent ID
    
    qbittorrent的设置与transmission不一样，transmission直接输入脚本路径就行，qb的不一样
    
    ```bash
    bash /var/qb/btadd.sh "%N" "%F" "%R" "%D" "%C" "%Z" "%I" "%J"
    ```
    
    参数的传入次序很重要，在脚本中我们要用这个次序接收参数：
    
    ```bash
    #!/bin/sh
    
    torrent_name=$1
    content_dir=$2
    root_dir=$3
    save_dir=$4
    files_num=$5
    torrent_size=$6
    file_hash=$7
    file_hash2=$8
    label=$9
    ......
    ```
    
    我的qbittorrent脚本：
    
    ```bash
    #!/bin/sh
    
    torrent_name=$1
    content_dir=$2
    root_dir=$3
    save_dir=$4
    files_num=$5
    torrent_size=$6
    file_hash=$7
    file_hash2=$8
    label=$9
    
    totalsize=${torrent_size}
    
    if [ 1024 -gt $totalsize ];
           then size="$totalsize"B
    elif [ 1048576 -gt $totalsize ];
           then
           size=`echo  "scale=3; a = $totalsize / 1024 ; if (length(a)==scale(a)) print 0;print a"  | bc `
    	size="$size"KB
    elif [ 1073741824 -gt $totalsize ];
           then
           size=`echo  "scale=3; a = $totalsize / 1048576 ; if (length(a)==scale(a)) print 0;print a"  | bc `
    	size="$size"MB
    elif [ 1073741824 -le $totalsize ];
           then
           size=`echo  "scale=3; a = $totalsize / 1073741824 ; if (length(a)==scale(a)) print 0;print a"  | bc `
    	size="$size"GB
    else
           size="0"
            fi
    
    PROXY=/usr/bin/proxychains4
    NAIL=/usr/bin/s-nail
    
    TMPFILETG=$(mktemp -t qbittorent.XXXXXXXXXX)
    TOKEN=***********:***************************
    chat_ID=-*************
    
    cat > $TMPFILETG << EOF
    *亲，有个磁力🧲播种完成了，功德加一!*
    ---
    客户端：qBittorent 4.5.2
    磁力名称：${torrent_name}，
    磁力大小：${size}，
    保存地址：${save_dir}，
    磁力链接：*magnet:?xt=urn:btih:${file_hash}*，
    添加时间：$(date '+%Y-%m-%d %H:%M:%S')，
    发扬互联网精神，抵制迅雷吸血💩。
    发扬互联网精神,让每一个种子都生根发芽❀。
    [动图番号：SSNI-784](https://qcc.woimg.net/images/2020/10/06/ssni-784-1.gif)
    EOF
    
    DATA=`cat $TMPFILETG`
    
    MODE='Markdown'
    URL="https://api.telegram.org/bot${TOKEN}/sendMessage"
    
    $PROXY curl -s -o /dev/null -X POST $URL -d chat_id=${chat_ID} -d parse_mode=${MODE} -d text="${DATA}"
    
    #TO_ADDR为你要通知的邮箱
    TO_ADDR1="********@gmail.com"
    TO_ADDR2="***********@qq.com"
    
    SUBJECT="亲，有个磁力🧲播种完成了，功德加一!"
    
    $NAIL -s "$SUBJECT" "$TO_ADDR1" < "$TMPFILETG"
    $NAIL -s "$SUBJECT" "$TO_ADDR2" < "$TMPFILETG"
    
    rm "$TMPFILETG"
    ```
    

#### 18.1.3 安装transmission

1. 安装
   
    ```bash
    sudo add-apt-repository ppa:ubuntuhandbook1/transmission #最新版PPA
    
    sudo apt-fast update
    
    sudo apt-fast install transmission
    sudo apt-fast install transmission-daemon
    ```
    
2. 修改配置
   
    修改之前停止`transmission-daemon`服务，不然会回滚：
    
    ```bash
    sudo service transmission-daemon stop
    ```
    
    ```bash
    sudo nano /var/lib/transmission-daemon/info/settings.json
    ```
    
    修改：
    
    ```json
    {
    		......
    		"blocklist-enabled": true,#黑名单列表
        "blocklist-url":"https://cors.isteed.cc/github.com/ttgapers/transmission-blocklist/releases/download/untagged-529f8302ad5115daf99a/blocklist.gz"
        ......
        "rpc-authentication-required": true
        "rpc-bind-address": "0.0.0.0", 
        "rpc-enabled": true, 
        "rpc-password": "123456", 
        "rpc-port": 9091, 
        "rpc-url": "/transmission/", 
        "rpc-username": "transmission", 
        "rpc-whitelist": "*", 
        "rpc-whitelist-enabled": true, 
        ......
    		"script-torrent-done-enabled": true,
        "script-torrent-done-filename": "/btmail.sh",#邮件通知脚本
        "script-torrent-added-enabled":true,
        "script-torrent-added-filename":"/btadd.sh",#添加任务后运行脚本
        "script-torrent-done-seeding-enabled":true,
        "script-torrent-done-seeding-filename":"/btseed.sh",#任务完成后通知脚本
    		......
    }
    ```
    
3. 更改WEB-UI
   
    以下方法弃用：
    
    ```bash
    wget https://gitee.com/culturist/transmission-web-control/raw/master/release/install-tr-control-gitee.sh
    sudo bash install-tr-control-gitee.sh
    ```
    
    如果过程中有如下错误：`cp: cannot stat '/tmp/tr-web-control/transmission-web-control/src/.': No such file or directory` 则需要自行创建文件。
    
    首先将第一步下载的文件解压复制到`/tmp/tr-web-control` 路径下，然后运行`chmod -R 777 /tmp/tr-web-control/transmission-web-control/src/` ，最后再运行上述脚本。
    
    最后，开启服务：
    
    ```bash
    sudo service transmission-daemon start
    ```
    
    **新方法：**
    
    <aside>
    💡 上述脚本对于最新客户端不生效，一直提示连接失败，因为最新的客户端的网页文件夹名字改为了`public_html` 而不是`web` 。
    
    </aside>
    
    直接下载主题文件：
    
    ```bash
    wget https://proxy.zyun.vip/https://github.com/ronggang/transmission-web-control/archive/refs/tags/v1.6.1-update1.zip
    unzip transmission-web-control-1.6.1-update1.zip #解压出来，用啥工具都行
    cd transmission-web-control-1.6.1-update1 #进入目录
    
    sudo rm /usr/share/transmission/public_html #删除本来的public文件夹
    sudo cp -r src /usr/share/transmission/public_html #复制 
    ```
    

#### 18.2.5 安装qBittorrent

1. 安装add-apt-repository命令(非必需)
   
    ```bash
    sudo apt-get update && sudo apt-get install software-properties-common -y
    ```
    
2. 添加qbittorrent-nox的PPA软件源
   
    ```bash
    # qBittorrent 稳定版
    sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-stable
    
    # qBittorrent 测试版
    sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-unstable
    ```
    
3. 安装qbittorrent-nox
   
    ```bash
    sudo apt-get update && sudo apt-get install qbittorrent-nox -y
    ```
    
4. 设置开机启动
   
    ```bash
    sudo apt-get install vim -y && vim /etc/systemd/system/qbittorrent-nox.service
    ```
    
    ```yaml
    [Unit]
    
    Description=qBittorrent-nox
    
    After=network.target
    
    [Service]
    
    User=root
    
    Type=forking
    
    RemainAfterExit=yes
    
    ExecStart=/usr/bin/qbittorrent-nox -d
    
    [Install]
    
    WantedBy=multi-user.target
    ```
    
    修改qbittorrent-nox.service文件后重新载入
    
    ```yaml
    sudo systemctl daemon-reload
    ```
    
    启动和停止
    
    ```yaml
    sudo systemctl start qbittorrent-nox
    sudo systemctl stop qbittorrent-nox
    ```
    
    开机自启
    
    ```yaml
    sudo systemctl enable qbittorrent-nox
    ```
    
5. 验证
   
    ```yaml
    默认账号：admin 密码：adminadmin
    
    默认登陆网址：http://ip:8080
    ```
    
6. ip国家不显示问题的解决
   
    下载文件：
    
    [dbip-country-lite.mmdb](https://pan.rainsin.cn/s/s84u65)
    
    先进入root用户：
    
    ```yaml
    su
    ```
    
    将文件复制到qbittorrent目录（下面的目标路径是用`sudo apt`安装qb时所用路径，其他的自行寻找）：
    
    ```yaml
    cp 你的dbip-county-lite.mmdb路径 /root/.local/share/qBittorrent/dbip-county-lite.mmdb
    ```
    
    重启服务即可。
    
    ![Snipaste_2023-03-14_14-27-48.png](https://photo.rainsin.cn:2000/LightPicture/2023/06/008fdd809cd52644.png)
    

最后反向代理，完成。

## 19 设置clash代理

### Clash 下载

在 Clash [release](https://github.com/Dreamacro/clash/releases) 页面下载相应的版本，对于 Ubuntu 一般使用 [clash-linux-amd64-vX.X.X.gz](https://github.com/Dreamacro/clash/releases/download/v1.9.0/clash-linux-amd64-v1.9.0.gz) 版本：

```bash
wget https://github.com/Dreamacro/clash/releases/download/v1.10.0/clash-linux-arm64-v1.10.0.gz
```

> 如果直接 wget 速度较慢的话，可以本地下载完成后，使用 SFTP 上传到 Linux 服务器。
> 

然后使用 `gunzip` 命令解压，并重命名为 `clash`：

```bash
gunzip clash-linux-amd64-v1.10.0.gz
mv clash-linux-amd64-v1.10.0 clash
```

为 clash 添加可执行权限：

```bash
chmod u+x clash
```

Clash 运行时需要 `Country.mmdb` 文件，当第一次启动 Clash 时（使用 `./clash` 命令） 会自动下载（会下载至 `/home/XXX/.config/clash` 文件夹下）。自动下载可能会因网络原因较慢，可以访问该[链接](https://github.com/Dreamacro/maxmind-geoip/releases)手动下载。

> Country.mmdb 文件利用 GeoIP2 服务能识别互联网用户的地点位置，以供规则分流时使用。
> 

### 配置文件

一般的网络服务提供了 Clash 订阅链接，可以直接下载链接指向的文件内容，保存到 `config.yaml` 中。或者使用订阅转换服务（如该[链接](https://converter.niallapi.top/)。也可以自行搭建，可参考[该文章](https://codeswift.top/posts/docker-subscription-converter/)），将其它订阅转换为 Clash 订阅。

这里推荐使用订阅转换服务，转换后的配置文件已添加更为强大的分流规则。就可以将 Clash 一直保持后台运行，自动分流，且会自动选择最优节点。

> Clash 配置文件的完整参数介绍见官方文档。
> 

> 如果使用订阅转换服务，对于转换后的订阅链接，可以使用以下命令来下载配置文件：
> 

```bash
curl -o config.yaml 'longURL'
```

对于 `suo.yt` 短链接，需要重定向，因此使用以下命令来下载配置文件：

```bash
curl -L -o config.yaml 'shortURL'
```

### Clash as a daemon

将 Clash 转变为系统服务，从而使得 Clash 实现常驻后台运行、开机自启动等。

> 普通用户需要 sudo 权限。
> 

#### 配置 systemd 服务

Linux 系统使用 systemd 作为启动服务器管理机制，首先把 Clash 可执行文件拷贝到 `/usr/local/bin` 目录，相关配置拷贝到 `/etc/clash` 目录。

```bash
sudo mkdir /etc/clash
sudo cp clash /usr/local/bin
sudo cp config.yaml /etc/clash/
sudo cp Country.mmdb /etc/clash/
```

创建 systemd 服务配置文件 `sudo vim /etc/systemd/system/clash.service`：

```yaml
[Unit]
Description=Clash daemon, A rule-based proxy in Go.
After=network.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/clash -d /etc/clash

[Install]
WantedBy=multi-user.target
```

#### 使用 systemctl

```bash
sudo systemctl daemon-reload
```

使用以下命令，让 Clash 开机自启动：

```bash
sudo systemctl enable clash
```

然后开启 Clash：

```bash
sudo systemctl start clash
```

查看 Clash 日志：

```bash
sudo systemctl status clash
sudo journalctl -xe
```

### 使用代理

#### 利用 `Export` 命令使用代理

Clash 运行后，其在后台监听某一端口。Ubuntu 下使用代理，需要 `export` 命令。根据 config 配置文可以查看到件Clash 代理端口（订阅转换后，端口为7890），设置系统代理命令为：

可以将该命令添加到 `.bashrc` 中，登陆后该用户自动开启代理。

取消系统代理：

```bash
unset  http_proxy  https_proxy  all_proxy
```

> 一般下载数据集时，记得取消代理。
> 

#### DashBoard 外部控制

外部控制端口为 9090，因此也可以访问该[链接](http://clash.razord.top/)，输入 IP 地址（需本机可以访问的 IP）以及端口号 9090，来进入 Clash Dashboard 进行节点的选择。也可以在服务器自行搭建 Clash Dashboard，请参见[该项目](https://github.com/Dreamacro/clash-dashboard)。不过 Clash Dashboard 用处不大，使用**订阅转换**后的配置文件包含了自动选择的功能，Clash 会自动选择延迟最低的节点。

#### 设置密码

`export` 命令其他用户执行后也可以使用该代理，此时通过可以更换代理端口、添加密码等措施加以限制。修改 `/etc/clash/config.yaml` 文件部分配置：

```yaml
mixed-port: 12345
authentication:
  - "用户名1:密码1"
  - "用户名2:密码2"
allow-lan: true
mode: Rule
log-level: info
external-controller: :9090
```

`mixed-port: 12345` 就是混合代理端口，即使用代理时所指定的端口。然后需要重启 Clash，命令为：

```bash
sudo systemctl restart clash
```

根据上述配置文件，`export` 命令变为

```bash
export https_proxy=http://用户名1:密码1@127.0.0.1:12345 http_proxy=http://用户名1:密码1@127.0.0.1:12345 all_proxy=socks5://用户名1:密码1@127.0.0.1:12345
```

### TUN 模式

新版的 Clash Premium 内核支持 TUN 模式，且目前已支持 Linux 系统下的 `auto-route` 和 `auto-detect-interface`，无需手动设置转发表，可以方便快捷的实现 **透明网关（旁路由）** 的功能。

首先需要下载 [Clash Premium](https://github.com/Dreamacro/clash/releases/tag/premium) 版本，替换上面的 `clash` 文件。接着需要设置 Linux 系统，开启转发功能。编辑文件 `/etc/sysctl.conf`，添加以下内容：

```bash
net.ipv4.ip_forward=1
```

保存退出后，执行以下命令使修改生效：

```bash
sudo sysctl -p
```

然后接着需要关闭系统的 DNS 服务，使用以下命令：

```bash
sudo systemctl stop systemd-resolved
sudo systemctl disable systemd-resolved
```

> 关于代理环境下 DNS 解析行为的深入探讨，可以参见浅谈在代理环境中的 DNS 解析行为以及我有特别的 DNS 配置和使用技巧。
> 

接着需要设置 Clash 的配置文件，添加以下内容：

```
dns:
  enable: true
  listen: 0.0.0.0:53
  enhanced-mode: fake-ip
  nameserver:
    - 114.114.114.114
  fallback:
    - 8.8.8.8
tun:
  enable: true
  stack: system # or gvisor
  dns-hijack:
    - 8.8.8.8:53
    - tcp://8.8.8.8:53
    - any:53
    - tcp://any:53
  auto-route: true # auto set global route
  auto-detect-interface: true # conflict with interface-nam
```

最后重启 Clash 服务即可，这样流量就会通过 TUN 接口转发，同时利用强大的分流规则，实现按需代理。也可以设置局域网内的网关地址和 DNS 服务器地址，实现透明网关。

## 20 服务器状态监控

```bash
docker run --restart unless-stopped -it -d --name ward -p 4000:4000 -e WARD_PORT=4000 -e WARD_THEME=dark --privileged antonyleons/ward
```

## 21 Gitea安装

文件：`docker-compose.yml` 

```yaml
version: "3"

networks:
  gitea:
    external: false

services:
  server:
    image: gitea/gitea:1.19.0
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
      - GITEA__database__DB_TYPE=mysql
      - GITEA__database__HOST=db:3306
      - GITEA__database__NAME=gitea
      - GITEA__database__USER=gitea
      - GITEA__database__PASSWD=gitea
    restart: always
    networks:
      - gitea
    volumes:
      - {you_path}/gitea:/data
      - {you_path}/gitea/timezone:/etc/timezone:ro
      - {you_path}/gitea/localtime:/etc/localtime:ro
    ports:
      - "3000:3000"
      - "222:22"
    depends_on:
      - db

  db:
    image: mysql:8
    restart: always
    environment:
      - MYSQL_ROOT_PASSWORD=gitea
      - MYSQL_USER=gitea
      - MYSQL_PASSWORD=gitea
      - MYSQL_DATABASE=gitea
    networks:
      - gitea
    volumes:
      - /home/ubuntu/pdata/gitea/mysql:/var/lib/mysql
```

