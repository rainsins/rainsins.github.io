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
---
<script src="/assets/share/music/script.js" defer></script>
<link rel="stylesheet" href="/assets/share/share.css"/>
<link rel="stylesheet" href="/assets/share/music/style.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://cdn.jsdelivr.net/npm/latex.js/dist/latex.js"></script>

<script>
  MathJax = {
    tex: {inlineMath: [['$', '$'],['$$', '$$'], ['\\(', '\\)']]}
  };
</script>

![banner](https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E5%A3%81%E7%BA%B83.webp)

## 🎧听点歌

<div class="player-box" id="player-box-id">
    <div class="player">
       <div class="wrapper">
           <div class="details">
               <div class="now-playing">PLAYING x OF y</div>
               <div class="track-art"></div>
               <div class="track-name">Track Name</div>
               <div class="track-artist">Track Artist</div>
           </div>
           <div class="slider-box-center">
                <div class="slider_containers">
                    <div class="current-time">00:00</div>
                    <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
                    <div class="total-duration">00:00</div>
                </div>
                <div class="slider_containers">
                    <i class="fa fa-volume-down"></i>
                    <input type="range" min="1" max="100" value="99" class="volume_slider" onchange="setVolume()">
                    <i class="fa fa-volume-up"></i>
                </div>
                <div class="buttons">
                    <div class="random-track" onclick="randomTrack()">
                        <i class="fas fa-random fa-2x" title="random"></i>
                    </div>
                    <div class="prev-track" onclick="prevTrack()">
                        <i class="fa fa-step-backward fa-2x"></i>
                    </div>
                    <div class="playpause-track" onclick="playpauseTrack()">
                        <i class="fa fa-play-circle fa-5x"></i>
                    </div>
                    <div class="next-track" onclick="nextTrack()">
                        <i class="fa fa-step-forward fa-2x"></i>
                    </div>
                    <div class="repeat-track" onclick="repeatTrack()">
                        <i class="fa fa-repeat fa-2x" title="repeat"></i>
                    </div>
                </div>
                <div id="wave">
                    <span class="stroke"></span>
                    <span class="stroke"></span>
                    <span class="stroke"></span>
                    <span class="stroke"></span>
                    <span class="stroke"></span>
                    <span class="stroke"></span>
                    <span class="stroke"></span>
                </div>
           </div>  
       </div>
   </div>
</div>

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


<!-- <script defer>
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
</script> -->