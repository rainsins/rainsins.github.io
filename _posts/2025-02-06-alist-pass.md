---
title: alist 解决无法设置密码的问题
date: 2025-02-06 13:23:00 +0800
categories: [解决问题]
tags: [解决问题]
pin: false
math: false
mermaid: true
react: false
video: false
music: false
mathpolt: false
jquery: false
forbid: true
comments: true

favicon: heart
pangu: true

des-post: 在一次启动第二个alist示例时，出现了密码无法更改的情况，查询网络后解决了这个问题，把文章贴在这。

post: true
keywords: rainsin, blog, 解决问题
author: rainsin
---

## 问题

当设置密码时：

```shell
sudo /opt/alist/alist admin set **********
```

最后一行出现：

```shell
ERRO[2025-02-06 02:51:31] [del_user_cache_online] error: token is invalidated
```

## 解决

先排除配置文件是否与启动脚本一致，如果一致则可能是权限问题。

键入`ps -ef | grep alist`找到alist的工作目录：

```shell
root       18604       1  0 02:59 ?        00:00:08 /opt/alist/alist server
rainsin    20156   14277  0 05:35 pts/0    00:00:00 grep --color=auto alist
```

如上，我的是`/opt/alist`，修改data的权限：

```shell
sudo chmod -R 755 /opt/alist/data 
```

问题解决。