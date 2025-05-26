---
title: 「解决问题」使用 CloudFlare 导致网站「重定向的次数过多」解决方案
author: rainsin
date: 2024-02-1 12:22:10 +0800
categories: [解决问题]
tags: [解决问题]
pin: false
math: false
react: true
mermaid: false
video: true
music: false
cube: true
babel: true
comments: true
mathpolt: true
jquery: true
forbid: true

favicon: code

post: true
description: 本文介绍了使用 CloudFlare 导致网站「重定向的次数过多」的解决方案。
keywords: rainsin, blog, 解决问题
author: rainsin
---

## 一句话解决

在 CloudFlare 的 SSL/TLS 菜单里将「SSL/TLS 加密模式」设置为完全（Strict）即可。

<!-- <link rel="stylesheet" href="test.css">

测试视频引入
<div id="mse"></div>

测试React是否引入
<div id="like_button_container"></div>

测试数学函数绘制
<div class="polt_box_ui">
  <div id="root"></div>
</div>

<script src="test.js"></script>
<script>
var player = new window.Player({
  id: 'mse',
  url: 'https://rainsinpan.hk.cpolar.io/d/blog/s/r3e91t',
})
</script>

<twisty-player alg="R U R' U R U2' R'"></twisty-player>

<twisty-player
  puzzle="4x4x4"
  alg="r U2 x r U2 r U2 r' U2 l U2 r' U2 r U2 r' U2 r'"
  hint-facelets="none"
  back-view="top-right"
  background="none"
></twisty-player> 

<div id="app"></div>

<script type="text/babel">  
    const getMessage = () => "Hello World";
    document.getElementById('app').innerHTML = getMessage();
</script> -->