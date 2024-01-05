---
icon: fas fa-globe
order: 1
react: false
video: false
music: true
math: true
mathpolt: true
jquery: true
---

## 🎧听点歌

<div id="player"></div>

<script defer="defer">
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
            name: '金瓶梅片头',
            artist: '罗坚',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%89%87%E5%A4%B4.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%87%91%E7%93%B6%E6%A2%85.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%BD%97%E5%9D%9A%20-%20%E9%87%91%E7%93%B6%E6%A2%85%E7%89%87%E5%B0%BE.lrc',
            theme: '#f1939c'
        },
        {
            name: '金瓶梅片尾',
            artist: '罗坚',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%89%87%E5%B0%BE.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%87%91%E7%93%B6%E6%A2%85.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%BD%97%E5%9D%9A%20-%20%E9%87%91%E7%93%B6%E6%A2%85%E7%89%87%E5%B0%BE.lrc',
            theme: '#856d72'
        },
        {
            name: '金瓶梅插曲',
            artist: '罗坚',
            url: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%89%87%E5%B0%BE%EF%BC%88%E5%BF%AB1%EF%BC%89.ogg',
            cover: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E9%87%91%E7%93%B6%E6%A2%85.webp',
            lrc: 'https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%BD%97%E5%9D%9A%20-%20%E9%87%91%E7%93%B6%E6%A2%85%E7%89%87%E5%B0%BE.lrc',
            theme: '#525288'
        },
    ]
});