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
cube: false
---

<link rel="stylesheet" href="/assets/share/share.css"/>
<!-- <script src="https://cdn.jsdelivr.net/npm/latex.js/dist/latex.js"></script> -->

<!-- <script>
  MathJax = {
    tex: {inlineMath: [['$', '$'],['$$', '$$'], ['\\(', '\\)']]}
  };
</script> -->

![banner](https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E5%A3%81%E7%BA%B83.webp)

## 🎧听点歌

<div id="player"></div>

## ⚒️工具

<div id="instr-box"></div>

<!-- ## 🖼️我喜欢的作品

> 加载可能很慢，并且需要你的设备支持IPv6。加载完成后可能会有性能问题。
{: .prompt-danger }

> 点击预览，资源来源于[书格](https://www.shuge.org/)。
{: .prompt-tip }

<div id="art-box"></div> -->

<!-- ## 📚电子书资源

> 需要深入了解的书籍不适合用电子书来读，还是用纸质书比较好。
{: .prompt-tip }

<div id="book-box"></div> -->

<!-- ## 🎇壁纸

<p class="bizhi">
  <img src="https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/%E5%A3%81%E7%BA%B8/%E5%A3%81%E7%BA%B82.webp" alt="壁纸1">
</p> -->

## 🔞写真

> 加载可能很慢，并且需要你的网络上的所有设备都支持IPv6。加载完成后可能会有性能问题。
{: .prompt-danger }

> 以下内容部分涉及成人内容，为证明你年满18岁，请回答下面的问题。
{: .prompt-danger }

<div id="mm-box"></div>

<script type="text/babel" src="/assets/share/component/mm.js"></script>

<!-- <script type="text/babel" src="/assets/share/component/book.js"></script> -->

<!-- <script type="text/babel" src="/assets/share/component/art.js"></script> -->

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
            name: 'Honey honey',
            artist: '孙燕姿',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20Honey%20Honey.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/honey.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20Honey%20Honey.lrc',
            theme: '#2c9678'
        },
        {
            name: '咕叽咕叽',
            artist: '孙燕姿',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E5%92%95%E5%8F%BD%E5%92%95%E5%8F%BD.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%92%95%E5%8F%BD%E5%92%95%E5%8F%BD.jpg',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E5%92%95%E5%8F%BD%E5%92%95%E5%8F%BD.lrc',
            theme: '#2c9678'
        },
        {
            name: '我怀念的',
            artist: '孙燕姿',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E6%88%91%E6%80%80%E5%BF%B5%E7%9A%84.lrc',
            theme: '#2c9678'
        },
        {
            name: '遇见',
            artist: '孙燕姿',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E9%81%87%E8%A7%81.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E9%81%87%E8%A7%81.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20%E9%81%87%E8%A7%81.lrc',
            theme: '#2c9678'
        },
        {
            name: '水晶',
            artist: '任贤齐、徐怀钰',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E4%BB%BB%E8%B4%A4%E9%BD%90%E3%80%81%E5%BE%90%E6%80%80%E9%92%B0%20-%20%E6%B0%B4%E6%99%B6.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E6%B0%B4%E6%99%B6.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/new/%E4%BB%BB%E8%B4%A4%E9%BD%90%E3%80%81%E5%BE%90%E6%80%80%E9%92%B0%20-%20%E6%B0%B4%E6%99%B6.lrc',
            theme: '#2c9678'
        },
        {
            name: '让她降落',
            artist: '何璐',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E4%BD%95%E7%92%90%20-%20%E8%AE%A9%E5%A5%B9%E9%99%8D%E8%90%BD.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E8%AE%A9%E5%A5%B9%E9%99%8D%E8%90%BD.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E4%BD%95%E7%92%90%20-%20%E8%AE%A9%E5%A5%B9%E9%99%8D%E8%90%BD.lrc',
            theme: '#ffc90c'
        },
        {
            name: '爱殇',
            artist: '小时姑娘',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%B0%8F%E6%97%B6%E5%A7%91%E5%A8%98%20-%20%E7%88%B1%E6%AE%87%20%28%E7%94%B5%E8%A7%86%E5%89%A7%E3%80%8A%E4%B8%9C%E5%AE%AB%E3%80%8B%E7%89%87%E5%A4%B4%E6%9B%B2%29.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%88%B1%E6%AE%87.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%B0%8F%E6%97%B6%E5%A7%91%E5%A8%98%20-%20%E7%88%B1%E6%AE%87%20%28%E7%94%B5%E8%A7%86%E5%89%A7%E3%80%8A%E4%B8%9C%E5%AE%AB%E3%80%8B%E7%89%87%E5%A4%B4%E6%9B%B2%29.lrc',
            theme: '#b7ae8f'
        },
        {
            name: '金沙滩',
            artist: '刘随社',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%88%98%E9%9A%8F%E7%A4%BE%20-%20%E9%87%91%E6%B2%99%E6%BB%A9%20%28%E7%A7%A6%E8%85%94%E7%89%88%29.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%A7%A6%E8%85%94.jpg',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%88%98%E9%9A%8F%E7%A4%BE%20-%20%E9%87%91%E6%B2%99%E6%BB%A9%20%28%E7%A7%A6%E8%85%94%E7%89%88%29.lrc',
            theme: '#ed3333'
        },
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

<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
<script src="/assets/js/md5.min.js"></script>
<!-- <script defer>
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
</script> -->