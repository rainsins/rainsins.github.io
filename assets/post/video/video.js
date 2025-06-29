window.isLoad = false;
let art = null;

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

    const key = CryptoJS.enc.Utf8.parse('qfqf0kqcajzoa04h');
    const iv = CryptoJS.enc.Utf8.parse('4517229305703582');

    const query = CryptoJS.AES.encrypt(password, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    const posterCache = new Map();
    function preloadPoster(url) {
        return new Promise((resolve, reject) => {
            if (posterCache.has(url)) {
                resolve(posterCache.get(url));
                return;
            }

            const img = new Image();
            img.onload = () => {
                posterCache.set(url, url);
                resolve(url);
            };
            img.onerror = () => {
                const defaultUrl = 'https://myapi.rainsin.cn/pics-dmm/default';
                posterCache.set(url, defaultUrl);
                reject(new Error('Failed to load poster'));
            };
            img.src = url;
        });
    }


    function setArtplayerPoster(art, posterUrl) {
        try {

            art.poster = posterUrl;

            const posterElement = art.template?.$poster;
            if (posterElement) {
                posterElement.style.backgroundImage = `url("${posterUrl}")`;
                posterElement.style.backgroundSize = 'cover';
                posterElement.style.backgroundPosition = 'center';
                posterElement.style.backgroundRepeat = 'no-repeat';
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
        fetch(`https://myapi.rainsin.cn/blog/envideo/${query}`)
            .then((response) => {
                isLoad = true;
                if (response.status == 404) {
                    Qmsg.error("哎呀，密码不对！🤡");
                    isLoad = false;
                    return false;
                } else {
                    return response.json();
                }
            })
            .then(async (data) => {
                if (data && Array.isArray(data)) {

                    if (art) {
                        art.destroy();
                    }

                    const processedData = data.map(item => ({
                        ...item,
                        poster: `https://myapi.rainsin.cn/pics-dmm/${encodeURIComponent(item.title)}`
                    }));

                    if (processedData.length > 0) {
                        try {
                            await preloadPoster(processedData[0].poster);
                        } catch (error) {
                            console.log('Failed to preload first poster:', error);
                        }
                    }

                    art = new Artplayer({
                        container: '#video-box',
                        url: processedData[0]?.url || 'https://seacloud.cpolar.cn/dash-av/Start-111-Uc/main.mpd',
                        type: 'mpd',
                        theme: "#2c9678",
                        title: processedData[0]?.title || 'Start-111-Uc',
                        poster: processedData[0]?.poster || '', // 设置初始封面
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
                        customType: {
                            mpd: playMpd
                        },
                        autoOrientation: true,
                        plugins: [artplayerPlaylist({
                            rebuildPlayer: false,
                            onchanged: async (art) => {
                                console.log('Video Changed to:', art.url);

                                const currentItem = processedData.find(item => item.url === art.url);

                                if (currentItem && currentItem.poster) {
                                    console.log('Loading poster for:', currentItem.title);

                                    try {
                                        const posterUrl = await preloadPoster(currentItem.poster);
                                        setArtplayerPoster(art, posterUrl);
                                    } catch (error) {
                                        console.log('Poster load failed, using default');
                                        setArtplayerPoster(art, 'https://myapi.rainsin.cn/pics-dmm/default');
                                    }
                                }

                                const currentIndex = processedData.findIndex(item => item.url === art.url);
                                if (currentIndex >= 0 && currentIndex < processedData.length - 1) {
                                    const nextItem = processedData[currentIndex + 1];
                                    if (nextItem && nextItem.poster) {
                                        preloadPoster(nextItem.poster).catch(() => {
                                            console.log('Failed to preload next poster');
                                        });
                                    }
                                }
                            },
                            autoNext: true,
                            showText: false,
                            playlist: processedData
                        })]
                    },
                        function onReady(art) {
                            console.log('Artplayer ready');
                            this.pause();

                            if (processedData[0] && processedData[0].poster) {
                                setTimeout(() => {
                                    setArtplayerPoster(art, processedData[0].poster);
                                }, 100);
                            }
                        });

                    $("#middle").hide();
                    console.log(`Loaded ${processedData.length} videos with poster support`);
                }
                isLoad = false;
            })
            .catch((error) => {
                console.error('Error loading video data:', error);
                Qmsg.error("加载视频数据失败！");
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
                rebuildPlayer: false, // 换P时重建播放器，默认false
                onchanged: (art) => { // 换P后的回调函数
                    console.log('Video Changed');
                },
                autoNext: true, // 自动播放下一P, 默认false
                showText: false, // 在控制栏显示文本，否则显示图标，默认为false
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
