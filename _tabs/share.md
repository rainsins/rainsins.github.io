---
layout: about
icon: fas fa-globe
order: 1
react: true
video: false
music: true
math: true
mathpolt: false
jquery: true
babel: true
forbid: true
comments: true
---

<link rel="stylesheet" href="/assets/share/share.css"/>
<link rel="stylesheet" href="/assets/css/comments.css"/>
<script src="https://cdn.jsdelivr.net/npm/latex.js/dist/latex.js"></script>

<script>
  MathJax = {
    tex: {inlineMath: [['$', '$'],['$$', '$$'], ['\\(', '\\)']]}
  };
</script>

![banner](https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E5%A3%81%E7%BA%B83.webp)

## 🎧听点歌

<div id="player"></div>

## ⚒️工具

<div id="instr-box"></div>

## 🖼️我喜欢的作品

> 加载可能很慢，并且需要你的设备支持IPv6。加载完成后可能会有性能问题。
{: .prompt-danger }

> 点击预览，资源来源于[书格](https://www.shuge.org/)。
{: .prompt-tip }

<div id="art-box"></div>

## 📚电子书资源

> 需要深入了解的书籍不适合用电子书来读，还是用纸质书比较好。
{: .prompt-tip }

<div id="book-box"></div>

## 🔞写真

> 加载可能很慢，并且需要你的设备支持IPv6。加载完成后可能会有性能问题。
{: .prompt-danger }

> 以下内容部分涉及成人内容，为证明你年满18岁，请回答下面的问题。
{: .prompt-danger }

<div id="mm-box"></div>

<script type="text/babel" src="/assets/share/component/mm.js"></script>

<script type="text/babel" src="/assets/share/component/book.js"></script>

<script type="text/babel" src="/assets/share/component/art.js"></script>

<script type="text/babel" src="/assets/share/component/instr.js"></script>


<script defer>
    const ap = new APlayer({
    container: document.getElementById('player'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    lrcType: 3,
    loop: 'all',
    order: 'list',
    audio: [
        {
            name: '片头',
            artist: '罗坚',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%89%87%E5%A4%B4.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%87%91%E7%93%B6%E6%A2%85.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%BD%97%E5%9D%9A%20-%20%E9%87%91%E7%93%B6%E6%A2%85%E7%89%87%E5%B0%BE.lrc',
            theme: '#f1939c'
        },
        {
            name: '片尾',
            artist: '罗坚',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%89%87%E5%B0%BE.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%87%91%E7%93%B6%E6%A2%85.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%BD%97%E5%9D%9A%20-%20%E9%87%91%E7%93%B6%E6%A2%85%E7%89%87%E5%B0%BE.lrc',
            theme: '#856d72'
        }
    ]
});
</script>