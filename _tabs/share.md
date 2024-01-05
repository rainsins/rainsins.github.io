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
            name: '庄稼汉',
            artist: '张尕怂',
            url: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%BC%A0%E5%B0%95%E6%80%82%20-%20%E5%BA%84%E7%A8%BC%E6%B1%89.mp3',
            cover: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/20180512100214201141.jpg',
            lrc: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%BC%A0%E5%B0%95%E6%80%82%20-%20%E5%BA%84%E7%A8%BC%E6%B1%89.lrc',
            theme: '#ebd0c2'
        },
        {
            name: 'Hotel California',
            artist: 'Eagles',
            url: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/Eagles%20-%20Hotel%20California%20%28Live%20on%20MTV%2C%201994%29.flac',
            cover: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%8A%A0%E5%B7%9E.jpg',
            lrc: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/Eagles%20-%20Hotel%20California%20%28Live%20on%20MTV%2C%201994%29.lrc',
            theme: '#ebd0c2'
        },
        {
            name: '秦腔-金沙滩选段',
            artist: '刘随社',
            url: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%88%98%E9%9A%8F%E7%A4%BE%E3%80%81%E7%9B%B8%E5%A3%B0%E6%9B%B2%E8%89%BA%E5%A4%A7%E5%85%A8%20-%20%E9%87%91%E6%B2%99%E6%BB%A9%20%28%E7%A7%A6%E8%85%94%E7%89%88%29.mp3',
            cover: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E7%A7%A6%E8%85%94.jpg',
            lrc: 'https://rainsin-1305486451.cos.ap-nanjing.myqcloud.com/rainsin-blog/%E9%9F%B3%E4%B9%90/%E5%88%98%E9%9A%8F%E7%A4%BE%E3%80%81%E7%9B%B8%E5%A3%B0%E6%9B%B2%E8%89%BA%E5%A4%A7%E5%85%A8%20-%20%E9%87%91%E6%B2%99%E6%BB%A9%20%28%E7%A7%A6%E8%85%94%E7%89%88%29.lrc',
            theme: '#ebd0c2'
        }
    ]
});