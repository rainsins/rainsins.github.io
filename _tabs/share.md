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
cube: true
---

<link rel="stylesheet" href="/assets/share/share.css"/>
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

<!-- ## 📚电子书资源

> 需要深入了解的书籍不适合用电子书来读，还是用纸质书比较好。
{: .prompt-tip }

<div id="book-box"></div> -->

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
            name: '黎明',
            artist: '黄霑',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%BB%84%E9%9C%91%20-%20%E9%BB%8E%E6%98%8E.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%BB%8E%E6%98%8E.jpg',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%83%A1%E4%BC%9F%E7%AB%8B%20-%20%E8%81%8C%E8%B4%A3.lrc',
            theme: '#856d72'
        },
        {
            name: '挚爱',
            artist: '陈勋奇',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%99%88%E5%8B%8B%E5%A5%87%E3%80%81%E4%B8%9C%E9%82%AA%E8%A5%BF%E6%AF%92%20-%20%E6%8C%9A%E7%88%B1.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E6%8C%9A%E7%88%B1.jpg',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%83%A1%E4%BC%9F%E7%AB%8B%20-%20%E8%81%8C%E8%B4%A3.lrc',
            theme: '#856d72'
        },
        {
            name: '职责',
            artist: '胡伟立',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%83%A1%E4%BC%9F%E7%AB%8B%20-%20%E8%81%8C%E8%B4%A3.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%81%8C%E8%B4%A3.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%83%A1%E4%BC%9F%E7%AB%8B%20-%20%E8%81%8C%E8%B4%A3.lrc',
            theme: '#856d72'
        },
        {
            name: '随缘',
            artist: '罗大佑',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%83%A1%E4%BC%9F%E7%AB%8B%20-%20%E9%9A%8F%E7%BC%98.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%9A%8F%E7%BC%98.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%83%A1%E4%BC%9F%E7%AB%8B%20-%20%E9%9A%8F%E7%BC%98.lrc',
            theme: '#856d72'
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

<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
<script src="/assets/js/md5.min.js"></script>
<script defer>
let gitalk = new Gitalk({
  clientID: '8609fa79e19dadf4a8fb',
  clientSecret: '602d1db1d4f0cf81d602ead9958254b0d0440117',
  repo: 'rainsins.github.io',
  owner: 'rainsins',
  admin: ['rainsins'],
  id: md5(location.pathname),
  distractionFreeMode: true  
});
gitalk.render('gitalk-container');
</script>