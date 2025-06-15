$(document).ready(function() {
  $('.pixel-player').each(function() {
    const player = $(this);
    const audio = player.find('audio')[0];
    const playBtn = player.find('.play-btn');
    const progressBar = player.find('.progress-bar');
    const timeDisplay = player.find('.time-display');
    
    // 播放/暂停控制
    playBtn.click(function() {
      if (audio.paused) {
        audio.play();
        playBtn.text('❚❚');
      } else {
        audio.pause();
        playBtn.text('▶');
      }
    });
    
    // 进度条更新
    audio.addEventListener('timeupdate', function() {
      const percent = (audio.currentTime / audio.duration) * 100;
      progressBar.css('width', percent + '%');
      
      // 时间显示
      const mins = Math.floor(audio.currentTime / 60);
      const secs = Math.floor(audio.currentTime % 60);
      timeDisplay.text(`${mins}:${secs < 10 ? '0' : ''}${secs}`);
    });
    
    // 点击进度条跳转
    player.find('.progress-container').click(function(e) {
      const pos = (e.pageX - $(this).offset().left) / $(this).width();
      audio.currentTime = pos * audio.duration;
    });
    
    // 歌曲结束时重置
    audio.addEventListener('ended', function() {
      playBtn.text('▶');
      audio.currentTime = 0;
    });
  });
});