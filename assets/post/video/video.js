window.isLoad = false;
let art = null;
let imageCache = new Map(); 
function preloadImage(url) {
    return new Promise((resolve, reject) => {
        if (imageCache.has(url)) {
            resolve(imageCache.get(url));
            return;
        }

        const img = new Image();
        img.onload = () => {
            imageCache.set(url, img);
            resolve(img);
        };
        img.onerror = reject;
        img.src = url;
    });
}

async function preloadImages(urls) {
    const promises = urls.map(url => preloadImage(url).catch(() => null));
    return Promise.allSettled(promises);
}

// 图片预览功能
function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    if (!modal) {
        const modalHtml = `
            <div id="imageModal" class="image-modal">
                <span class="close-btn" onclick="closeImageModal()">&times;</span>
                <img id="modalImage" src="" alt="预览图片">
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
     
        const newModal = document.getElementById('imageModal');
        newModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeImageModal();
            }
        });
    }
    
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    document.getElementById('imageModal').style.display = 'flex';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
    }
});


function playMpd(video, url, art) {
    if (dashjs.supportsMediaSource()) {
        if (art.dash) art.dash.destroy();
        const dash = dashjs.MediaPlayer().create();
        dash.initialize(video, url, art.option.autoplay);
        art.dash = dash;
        art.on('destroy', () => dash.destroy());
    } else {
        art.notice.show = 'Unsupported playback format: mpd';
    }
}

function playM3u8(video, url, art) {
    if (Hls.isSupported()) {
        if (art.hls) art.hls.destroy();
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        art.hls = hls;
        art.on('destroy', () => hls.destroy());
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
    } else {
        art.notice.show = 'Unsupported playback format: m3u8';
    }
}

async function send_message() {
    const password = $("#email-field").val();
    
    if (!password) {
        Qmsg?.error("请输入密码！") || alert("请输入密码！");
        return;
    }

    const key = CryptoJS.enc.Utf8.parse('qfqf0kqcajzoa04h');
    const iv = CryptoJS.enc.Utf8.parse('4517229305703582');

    const query = CryptoJS.AES.encrypt(password, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    function updateVideoInfo(item) {
        const infoContainer = $('.video-info');
        if (!item) {
            infoContainer.removeClass('visible');
            return;
        }

        const title = item.info?.title || item.title || '标题加载失败';
        const plot = item.info?.plot?.replace('<![CDATA[', '').replace(']]>', '') || '暂无简介';
        const poster = item.poster || 'https://myapi.rainsin.cn/pics-dmm/default';
        const director = item.info?.director || '未知';
        const studio = item.info?.studio || '未知';
        const year = item.info?.year || '未知';
        const runtime = item.info?.runtime || '未知';

        const actors = item.info?.actor?.map(a => 
            typeof a === 'string' ? a.replace(/<name>|<\/name>|<type>.*<\/type>/gs, '').trim() : a
        ).join(', ') || '未知';
        
        const genresHtml = item.info?.genre?.map(g => `<span class="video-tag">${g}</span>`).join('') || '';

        let stillsHtml = '';
        if (item.extrafanart && Array.isArray(item.extrafanart) && item.extrafanart.length > 0) {
            const stillsItems = item.extrafanart.map((url, index) => `
                <div class="still-item" onclick="openImageModal('${url}')">
                    <div class="still-loading">加载中...</div>
                    <img src="${url}" alt="剧照${index + 1}" 
                         style="opacity: 0;" 
                         onload="this.style.opacity=1; this.previousElementSibling.style.display='none';" 
                         onerror="this.parentElement.innerHTML='<div class=\\"still-loading\\">加载失败</div>'">
                    <div class="cache-indicator"></div>
                </div>
            `).join('');

            stillsHtml = `
                <div class="stills-section">
                    <h3 class="stills-title">剧照 (${item.extrafanart.length})</h3>
                    <div class="stills-grid">
                        ${stillsItems}
                    </div>
                </div>
            `;
        }

        const newHtml = `
            <div class="video-info-header">
                <h2 class="video-info-title">${title}</h2>
            </div>
            <div class="video-info-content">
                <div class="info-meta-grid">
                    <div class="meta-item">
                        <span class="meta-label">导演</span>
                        <span class="meta-value">${director}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">片商</span>
                        <span class="meta-value">${studio}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">年份</span>
                        <span class="meta-value">${year}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">时长</span>
                        <span class="meta-value">${runtime} 分钟</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-label">演员</span>
                        <span class="meta-value">${actors}</span>
                    </div>
                </div>
                
                <div class="info-plot">${plot}</div>
                
                ${genresHtml ? `
                    <div class="tags-section">
                        <div class="tags-title">标签</div>
                        <div class="video-tags">
                            ${genresHtml}
                        </div>
                    </div>
                ` : ''}
                
                ${stillsHtml}
            </div>
        `;

        infoContainer.html(newHtml);

        if (!infoContainer.hasClass('visible')) {
            setTimeout(() => infoContainer.addClass('visible'), 50);
        }


        if (item.extrafanart && Array.isArray(item.extrafanart)) {
            preloadImages(item.extrafanart).then(() => {
                // 显示缓存指示器
                $('.cache-indicator').addClass('visible');
                console.log('剧照预加载完成');
            });
        }
    }

    function setArtplayerPoster(art, posterUrl) {
        try {
            art.poster = posterUrl;

            const posterElement = art.template?.$poster;
            if (posterElement) {
                posterElement.style.display = 'block';
                posterElement.style.backgroundImage = `url("${posterUrl}")`;
                posterElement.style.backgroundSize = 'cover';
                posterElement.style.backgroundPosition = 'center';
                posterElement.style.backgroundRepeat = 'no-repeat';
                posterElement.style.opacity = '1';
            }

            if (art.video) {
                art.video.poster = posterUrl;
            }

            if (typeof art.emit === 'function') {
                art.emit('poster', posterUrl);
            }

            console.log('Poster set successfully:', posterUrl);
        } catch (error) {
            console.error('Error setting poster:', error);
        }
    }

    if (!isLoad) {
  
        $("#subscribe-button").val("加载中...").prop('disabled', true);
        
        fetch(`https://myapi.rainsin.cn/blog/envideo/${query}`)
            .then((response) => {
                isLoad = true;
                if (response.status == 404) {
                    Qmsg?.error("哎呀，密码不对！🤡") || alert("密码不对！");
                    isLoad = false;
                    $("#subscribe-button").val("Subscribe").prop('disabled', false);
                    return false;
                } else {
                    return response.json();
                }
            })
            .then(async (data) => {
                $("#subscribe-button").val("Subscribe").prop('disabled', false);
                
                if (data && Array.isArray(data)) {
                    if (art) {
                        art.destroy();
                    }
                    
                    const playlistData = data.map(item => ({
                        url: item.play,
                        title: item.title,
                        poster: item.poster,
                        fanart: item.fanart
                    }));

                    if (typeof Artplayer === 'undefined') {
                        console.error('Artplayer未加载');
                        Qmsg?.error("播放器加载失败！") || alert("播放器加载失败！");
                        return;
                    }

                    art = new Artplayer({
                        container: '#video-box',
                        url: playlistData[0]?.url || 'https://seacloud.cpolar.cn/dash-av/Start-111-Uc/main.mpd',
                        type: 'mpd',
                        theme: "#2c9678",
                        title: playlistData[0]?.title || 'Start-111-Uc',
                        poster: playlistData[0]?.fanart || 'https://seacloud.cpolar.cn/dash-av/Start-111-Uc/fanart.webp',
                        flip: true,
                        playbackRate: true,
                        screenshot: true,
                        hotkey: true,
                        pip: true,
                        mutex: true,
                        fullscreen: true,
                        fullscreenWeb: true,
                        miniProgressBar: true,
                        playsInline: true,
                        setting: true,
                        autoplay: false,
                        customType: {
                            mpd: playMpd
                        },
                        autoOrientation: true,
                        plugins: [artplayerPlaylist({
                            rebuildPlayer: false,
                            onchanged: async (item) => {
                                console.log('Switched to:', item.title);
        
                                art.pause();
                                art.currentTime = 0;
                                if (art.video) {
                                    art.video.style.opacity = '0';
                                    setTimeout(() => {
                                        art.video.style.opacity = '1';
                                    }, 100);
                                }

                                const currentIndex = art.currentPlaylistIndex;
                                setArtplayerPoster(art, playlistData[currentIndex].fanart);
                                updateVideoInfo(data[currentIndex]);
                            },
                            autoNext: false,
                            showText: true,
                            playlist: playlistData
                        })]
                    });

                    updateVideoInfo(data[0]);

                    $("#middle").hide();
                    console.log(`Loaded ${data.length} videos.`);
                } else {
                    Qmsg?.warning("没有找到视频数据。") || alert("没有找到视频数据。");
                }
                isLoad = false;
            })
            .catch((error) => {
                console.error('Error loading video data:', error);
                Qmsg?.error("加载视频数据失败！") || alert("加载视频数据失败！");
                $("#subscribe-button").val("Subscribe").prop('disabled', false);
                isLoad = false;
            });
    }
}


window.load_event = {
    ...window.load_event,
    artsss: () => {
        art = new Artplayer({
            container: '#video-box',
            url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5222486782687309806_hlsb.m3u8',
            type: 'm3u8',
            theme: "#2c9678",
            title: '猴王初问世',
            poster: 'https://source.rainsin.cn/img/post/video/%E8%A5%BF%E6%B8%B8%E8%AE%B0.jpg',
            flip: true,
            playbackRate: true,
            screenshot: true,
            hotkey: true,
            pip: true,
            mutex: true,
            fullscreen: true,
            fullscreenWeb: true,
            miniProgressBar: true,
            playsInline: true,
            setting: true,
            autoOrientation: true,
            customType: {
                m3u8: playM3u8
            },
            plugins: [artplayerPlaylist({
                rebuildPlayer: false,
                onchanged: (art) => {
                    console.log('Video Changed');
                },
                autoNext: true,
                showText: false,
                playlist: [
                    {
                        title: '猴王初问世',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5222486782687309806_hlsb.m3u8'
                    },
                    {
                        title: '官封弼马温',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5221923836211844606_hlsb.m3u8'
                    },
                    {
                        title: '大圣闹天宫',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5189835687545858667_hlsb.m3u8'
                    },
                    {
                        title: '困囚五行山',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5222205307782734748_hlsb.m3u8'
                    },
                    {
                        title: '猴王保唐僧',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5197998463397799646_hlsb.m3u8'
                    },
                    {
                        title: '祸起观音院',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5248382480897511687_hlsb.m3u8'
                    },
                    {
                        title: '计收猪八戒',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5255982306920155520_hlsb.m3u8'
                    },
                    {
                        title: '坎途逢三难',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5245004783362852874_hlsb.m3u8'
                    },
                    {
                        title: '偷吃人参果',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5188991261818113744_hlsb.m3u8'
                    },
                    {
                        title: '三打白骨精',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5245286258564595605_hlsb.m3u8'
                    },
                    {
                        title: '智激美猴王',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5242190033819283686_hlsb.m3u8'
                    },
                    {
                        title: '夺宝莲花洞',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5195465185500328899_hlsb.m3u8'
                    },
                    {
                        title: '除妖乌鸡国',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5233182832465375578_hlsb.m3u8'
                    },
                    {
                        title: '大战红孩儿',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5257952633664504505_hlsb.m3u8'
                    },
                    {
                        title: '斗法降三怪',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5239093806671579134_hlsb.m3u8'
                    },
                    {
                        title: '趣经女儿国',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5194339285053330625_hlsb.m3u8'
                    },
                    {
                        title: '三调芭蕉扇',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5212353685308148894_hlsb.m3u8'
                    },
                    {
                        title: '扫塔辨奇冤',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5196028138193985933_hlsb.m3u8'
                    },
                    {
                        title: '误入小雷音',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5201657637211300344_hlsb.m3u8'
                    },
                    {
                        title: '孙猴巧行医',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5192368961005814924_hlsb.m3u8'
                    },
                    {
                        title: '错坠盘丝洞',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5234590208336898334_hlsb.m3u8'
                    },
                    {
                        title: '四探无底洞',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5231212506629016061_hlsb.m3u8'
                    },
                    {
                        title: '传艺玉华洲',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5201094684845468508_hlsb.m3u8'
                    },
                    {
                        title: '天竺收玉兔',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5245567730520243844_hlsb.m3u8'
                    },
                    {
                        title: '波生极乐天',
                        url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5215168436118306105_hlsb.m3u8'
                    }
                ]
            })]
        }, function onReady(art) { this.pause() });
    }
}
