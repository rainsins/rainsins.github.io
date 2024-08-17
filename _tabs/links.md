---
layout: about
icon: fas fa-paperclip
order: 4
react: true
video: false
music: false
math: false
mathpolt: false
jquery: true
babel: true
forbid: true
comments: true
cube: false
linksdata: false
anime: true

favicon: heart

post: true
description: 友情链接页
keywords: rainsin, links
author: rainsin
---

<script src="https://cdn.jsdmirror.com/npm/md5-js-tools@1.0.2/lib/md5.min.js"></script>

<style>
  /*  */
@font-face {
    font-family: "Link 隶书";
    src: url("https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/fonts/links/%E8%87%AA%E7%95%99%E5%AE%8B.woff");
}

#core-wrapper,
#tail-wrapper {
    width: 100%;
    padding-right: 0 !important;
    padding-left: 0 !important;
}

#access-tags,
#access-lastmod {
    display: none;
}

#links-box{
    width: 100%;
    margin-bottom: 25px;
}

.links-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

@media (max-width: 1300px) {
    .links-box{
        grid-template-columns: 1fr 1fr;
    }
    /* #core-wrapper,
    #tail-wrapper {
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5) !important;
} */
}
@media (max-width: 1000px) {
    .links-box{
        grid-template-columns: 1fr;
    }
}

.links-item-box{
    display: flex;
    color: black;
    padding: 12px;
    box-shadow: 0 8px 16px -4px #2c2d300c;
    border: var(--box-border) !important;
    border-radius: 12px;
    transition: all .4s ease-in-out;
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
}

.links-item-box:hover{
    box-shadow: 0px 0px 20px #a6a8af55;
    border-bottom: var(--box-border) !important;
}

.links-item-img-box{
    display: flex;
    width: 88px;
    aspect-ratio: 1;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}
.links-item-img{
    background-size: cover;
    background-position: center;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border: 1px solid #dadce0;
}
.links-item-info-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 18px;
    flex: 1;
    /* font-family: "Link 隶书"; */
    font-weight: bold;
}

.links-item-info-name{
    font-size: 1.4rem;
    color: #000;
    line-height: 2.2rem;
}
.links-item-info-url{
    font-size: .8rem;
    color: #767676;
}
.links-item-info-dec{
    font-size: .8rem;
    color: #767676;
}

@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap");

#imgbg-box {
    width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: 0rem;
  padding: 1rem;
}

.card {
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 2rem;
  background: #f8f3e8;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.2), 0 0 40px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}

.card > img {
  width: 100%;
  height: auto;
  aspect-ratio: 600/300;
}

.card > h2 {
  margin-top: 1rem;
  font-family: "Kalam", cursive;
  font-weight: normal;
  font-size: 2rem;
  color: #4a4a7d;
  text-align: center;
}

.card > p {
  font-family: "Kalam", cursive;
  font-size: 1rem;
  color: #5e5e89;
  text-align: center;
}

</style>

<div id="links-box"></div>

## 💣须知

> 可以击剑🤺之后再添加友链（吾剑也未尝不利）。我的邮箱：1820278582[at]qq.com
{: .prompt-warning }

## 🔗我的信息

> 1. 网站名称：rainsin's blog
> 2. 网站地址：https://blog.rainsin.cn
> 3. 网站头像：[右键复制链接](https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZoX0pMWUVkY1dXQjNvSEFuREE_ZT1FekMwdXQ.webp)
> 4. 网站描述：如人饮水，冷暖自知。
> 5. 邮箱：1820278582[at]qq.com
{: .prompt-info }

## 小背景

> 小背景自己备注序号，默认按顺序。
{: .prompt-tip }

<div id="imgbg-box"></div>

<script type="text/babel" src="/assets/links/links.js"></script>

<script type="text/babel" src="/assets/links/bg.js"></script>