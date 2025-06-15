class NESMusicPlayer {
    constructor() {
        this.currentAudio = null;
        this.currentCard = null;
        this.musicData = [];
        this.cardColors = ['is-success', 'is-warning', 'is-error', 'is-primary'];
        this.init();
    }

    init() {
        this.parseMarkdownCommands();
        this.renderMusicCards();
        this.bindEvents();
    }

    // 解析Markdown中的音乐命令
    parseMarkdownCommands() {
        const commandsText = $('.music-commands').text();
        const musicRegex = /\[music\s+title="([^"]+)"\s+artist="([^"]+)"\s+image="([^"]+)"\s+audio="([^"]+)"\s+description="([^"]+)"\]/g;
        let match;

        while ((match = musicRegex.exec(commandsText)) !== null) {
            this.musicData.push({
                title: match[1],
                artist: match[2],
                image: match[3],
                audio: match[4],
                description: match[5]
            });
        }

        // 隐藏命令区域
        $('.music-commands').hide();
    }

    // 渲染音乐卡片
    renderMusicCards() {
        const grid = $('#musicGrid');

        this.musicData.forEach((music, index) => {
            const card = this.createMusicCard(music, index);
            grid.append(card);
        });
    }

    // 创建音乐卡片
    createMusicCard(music, index) {
        const colorClass = this.cardColors[index % this.cardColors.length];

        return $(`
                    <div class="nes-container with-title ${colorClass} music-card" data-index="${index}">
                        <p class="title">${music.title}</p>
                        <div class="music-header">
                            <img src="${music.image}" alt="${music.title}" class="music-image nes-avatar is-large" 
                                 onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjMzMzIi8+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjE2IiBmaWxsPSIjRkZGIi8+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjYiIGZpbGw9IiMzMzMiLz4KPHN2Zz4K'" />
                            <div class="music-info">
                                <div class="music-artist">♪ ${music.artist}</div>
                            </div>
                            <div class="volume-icon">
                                <i class="nes-icon is-small heart"></i>
                            </div>
                        </div>
                        
                        <div class="music-description">${music.description}</div>
                        
                        <div class="music-controls">
                            <button type="button" class="nes-btn is-success play-button" data-index="${index}">
                                PLAY
                            </button>
                            <div class="progress-container">
                                <div class="progress-bar">
                                    <div class="progress-fill"></div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="time-display">00:00 / 00:00</div>
                    </div>
                `);
    }

    // 绑定事件
    bindEvents() {
        // 播放按钮点击事件
        $(document).on('click', '.play-button', (e) => {
            e.stopPropagation();
            const index = $(e.target).data('index');
            const card = $(e.target).closest('.music-card');

            if (this.currentCard && this.currentCard[0] === card[0]) {
                this.togglePlayPause();
            } else {
                this.playMusic(index, card);
            }
        });

        // 卡片点击事件
        $(document).on('click', '.music-card', (e) => {
            if (!$(e.target).hasClass('play-button') && !$(e.target).closest('.play-button').length) {
                const index = $(e.currentTarget).data('index');
                const card = $(e.currentTarget);
                this.playMusic(index, card);
            }
        });

        // 停止所有播放按钮
        $('#stopAllBtn').on('click', () => {
            this.stopCurrentMusic();
        });
    }

    // 播放音乐
    playMusic(index, card) {
        this.stopCurrentMusic();

        const music = this.musicData[index];
        this.currentCard = card;

        // 设置加载状态
        card.addClass('loading');
        this.updateTimeDisplay('加载中...');

        // 创建新的音频对象
        this.currentAudio = new Audio(music.audio);
        this.setupAudioEvents();

        // 播放音乐
        this.currentAudio.play().catch(e => {
            console.error('播放失败:', e);
            this.showError(card, '播放失败，请检查音频链接');
        });
    }

    // 设置音频事件监听
    setupAudioEvents() {
        if (!this.currentAudio) return;

        this.currentAudio.addEventListener('loadstart', () => {
            this.currentCard.addClass('loading');
            this.updateTimeDisplay('加载中...');
        });

        this.currentAudio.addEventListener('canplay', () => {
            this.currentCard.removeClass('loading error');
            this.updatePlayingState(this.currentCard, true);
            this.updateTimeDisplay();
        });

        this.currentAudio.addEventListener('timeupdate', () => {
            this.updateProgress();
            this.updateTimeDisplay();
        });

        this.currentAudio.addEventListener('ended', () => {
            this.stopCurrentMusic();
        });

        this.currentAudio.addEventListener('error', (e) => {
            console.error('音频加载错误:', e);
            this.showError(this.currentCard, '音频加载失败');
            this.stopCurrentMusic();
        });
    }

    // 切换播放/暂停
    togglePlayPause() {
        if (!this.currentAudio) return;

        if (this.currentAudio.paused) {
            this.currentAudio.play();
            this.updatePlayingState(this.currentCard, true);
        } else {
            this.currentAudio.pause();
            this.updatePlayingState(this.currentCard, false);
        }
    }

    // 停止当前音乐
    stopCurrentMusic() {
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
            this.currentAudio = null;
        }

        if (this.currentCard) {
            this.updatePlayingState(this.currentCard, false);
            this.currentCard.removeClass('playing loading error');
            this.currentCard = null;
        }

        // 重置所有进度条
        $('.progress-fill').css('width', '0%');
        $('.time-display').text('00:00 / 00:00');
        $('.play-button').removeClass('is-error').addClass('is-success').text('PLAY');
    }

    // 更新播放状态UI
    updatePlayingState(card, isPlaying) {
        // 重置所有卡片状态
        $('.music-card').removeClass('playing');
        $('.play-button').removeClass('is-error').addClass('is-success').text('PLAY');

        if (isPlaying) {
            card.addClass('playing');
            card.find('.play-button').removeClass('is-success').addClass('is-error').text('PAUSE');
        }
    }

    // 更新进度条
    updateProgress() {
        if (!this.currentAudio || !this.currentCard) return;

        const progress = (this.currentAudio.currentTime / this.currentAudio.duration) * 100;
        this.currentCard.find('.progress-fill').css('width', `${progress}%`);
    }

    // 更新时间显示
    updateTimeDisplay(customText = null) {
        if (!this.currentCard) return;

        if (customText) {
            this.currentCard.find('.time-display').text(customText);
            return;
        }

        if (!this.currentAudio) {
            this.currentCard.find('.time-display').text('00:00 / 00:00');
            return;
        }

        const current = this.formatTime(this.currentAudio.currentTime);
        const duration = this.formatTime(this.currentAudio.duration || 0);
        this.currentCard.find('.time-display').text(`${current} / ${duration}`);
    }

    // 格式化时间
    formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    // 显示错误信息
    showError(card, message) {
        card.addClass('error').removeClass('loading playing');
        card.find('.time-display').text(message);
        card.find('.play-button').removeClass('is-success is-error').addClass('is-error').text('ERROR');

        setTimeout(() => {
            if (!card.hasClass('playing')) {
                card.removeClass('error');
                card.find('.time-display').text('00:00 / 00:00');
                card.find('.play-button').removeClass('is-error').addClass('is-success').text('PLAY');
            }
        }, 3000);
    }
}

// 初始化播放器
$(document).ready(() => {
    new NESMusicPlayer();
});