---
layout: message
icon: fas fa-message
order: 8
forbid: true
comments: true
jquery: true
babel: true
react: true
anime: true

favicon: comment

post: true
description: 留言页
keywords: rainsin, categories
author: rainsin
---

<style>
  @font-face {
    font-family: "Gourmand";
    src: url("https://file.rainsin.cn/d/blog/font/Gourmand-.woff?sign=h6-2SUODfbL4ukPvWwJpRYeaAcIny5bbmvYePpDh6to=:0"),url("https://mypan.cpolar.io/d/blog/font/ManbowLines-Regular.woff?sign=4TvTEtxmA39bE2mKh8uwEkoj3mzCHwZcTnZNZlGajuY=:0");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.av-box {
    width: 100%;
}

.container-av {
    width: 100%;
}

.three-av {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
}

.av-item-box {
    display: flex;
    position: relative;
    border: var(--box-border);
    border-radius: 18px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, .1);
    padding: 30px 20px;
    z-index: 1;
}

.three-av .av-item-box {
    width: 100%;
    aspect-ratio: 4/6;
    background-position: center;
    background-size: cover;
}

.av-mask {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .6;
    border-radius: 18px;
}

.three-av .av-item-box:nth-child(2) {
    margin: 0 3.75px 0 2.5px;
}

.three-av .av-item-box:nth-child(3) {
    margin: 0 2.5px 0 3.75px;
}

.three-av .av-item-box:nth-child(4) {
    margin-left: 5px;
}

.three-av .av-item-box:nth-child(1) {
    margin-right: 5px;
}

.av-item-box {
    flex: 1;
    flex-direction: column;
}

.av-title {
    z-index: 3;
    width: 100%;
    display: flex;
    align-content: center;
    flex-wrap: wrap;

}

.three-av>div:nth-child(2) {
    align-self: flex-end;
}

.av-title-name {
    font-size: 1.4em;
    font-weight: 600;
    align-self: center;
    flex: 1;
}


.av-detial-item {
    display: flex;
    color: #fff;
    margin: 6px 0;
}

.av-detial-item-main {
    font-family: "Ping Fang";
    margin-right: 10px;
    font-weight: 600;
}

.av-detial-item-content {
    font-family: "Gourmand";
    color: #000;
}

.av-detial {
    z-index: 3;
    margin-top: 2em;
    font-size: 0.8em;
}


.av-title-img {
    display: flex;
    justify-content: end;
}

.av-title-img-main {
    width: 3em;
    height: 3em;
    border-radius: 1.5em;
    border: 2px solid #e3e8f7ff;
    background-size: cover;
    background-position: center;
    cursor: pointer;
}

.av-mfact-logo {
    z-index: 3;
    position: absolute;
    width: 2em;
    aspect-ratio: 1;
    background-size: cover;
    background-position: center;
}

.av-mfact-logo {
    bottom: 30px;
    right: 15px;
}


#山岸あやか {
    width: 6.2em;
    aspect-ratio: 241/48;
    bottom: 2em;
}

@media screen and (width <= 400px) {
    #shrink-card{
      display: block !important;
    }

    #av-box{
      display: none !important;
    }
}

@media screen and (width > 400px) {
    #shrink-card{
      display: none !important;
    }

    #av-box{
      display: block !important;
    }
}
</style>

## 🍑せんせい

<link rel="stylesheet" href="/assets/comment/main-min.css"/>

<main id="shrink-card">
  <div class="c-glitch" style="border-radius: 12px;margin-bottom: 1rem;aspect-ratio: 1 / 1.6;background-image: url('https://file.rainsin.cn/d/blog/img/1660018987.jpg');">
    <div class="c-glitch__img" style="background-image: url('https://file.rainsin.cn/d/blog/img/1660018987.jpg');"></div>
    <div class="c-glitch__img" style="background-image: url('https://file.rainsin.cn/d/blog/img/1660018987.jpg');"></div>
    <div class="c-glitch__img" style="background-image: url('https://file.rainsin.cn/d/blog/img/1660018987.jpg');"></div>
    <div class="c-glitch__img" style="background-image: url('https://file.rainsin.cn/d/blog/img/1660018987.jpg');"></div>
    <div class="c-glitch__img" style="background-image: url('https://file.rainsin.cn/d/blog/img/1660018987.jpg');"></div>
  </div>
</main>

<div id="av-box" class="show-about"></div>

## <svg t="1730904458415" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9128" width="32" height="32"><path d="M572.27 118H97.15C78.92 118 64 132.91 64 151.13v472.04c0 18.22 14.92 33.13 33.15 33.13h95.28c9.3 0 18.16 3.9 24.44 10.75l66.94 100.14c6.57 7.17 17.87 7.17 24.44 0l116.67-100.14a33.162 33.162 0 0 1 24.44-10.75h343.9c18.23 0 33.15-14.91 33.15-33.13V151.13c0-18.22-14.92-33.13-33.15-33.13h-74.58M258.75 440.97c-27.46 0-49.72-22.25-49.72-49.69 0-27.44 22.26-49.69 49.72-49.69s49.72 22.25 49.72 49.69c0 27.45-22.26 49.69-49.72 49.69z m186.46 0c-27.46 0-49.72-22.25-49.72-49.69 0-27.44 22.26-49.69 49.72-49.69 27.46 0 49.72 22.25 49.72 49.69 0 27.45-22.26 49.69-49.72 49.69z m186.46 0c-27.46 0-49.72-22.25-49.72-49.69 0-27.44 22.26-49.69 49.72-49.69 27.46 0 49.72 22.25 49.72 49.69 0 27.45-22.26 49.69-49.72 49.69z" fill="#FFBB88" p-id="9129"></path><path d="M926.85 251.45h-49.72V673.8c0 18.22-14.92 33.13-33.15 33.13H483.51c-9.29 0-18.16 3.9-24.44 10.75l-83.96 72.06h199.52c9.29 0 18.16 3.9 24.44 10.75l116.67 100.14c6.57 7.17 17.87 7.17 24.44 0l66.94-100.14a33.162 33.162 0 0 1 24.44-10.75h95.28c18.23 0 33.15-14.91 33.15-33.13V284.58c0.01-18.22-14.91-33.13-33.14-33.13z" fill="#FF9852" p-id="9130"></path></svg> 你是故意找茬是不是啊？

> 把留言统一放在这里了，有什么跟我聊的可以在这里留言，留言审核后可见。也可以使用邮箱与我联系，我的邮箱：mail[at]rainsin.cn
{: .prompt-warning }

<script type="text/babel" src="/assets/about/components/art.js"></script>