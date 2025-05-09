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

async function send_message() {
    const password = $("#email-field").val();

    const key = CryptoJS.enc.Utf8.parse('qfqf0kqcajzoa04h');
    const iv = CryptoJS.enc.Utf8.parse('4517229305703582');

    const query = CryptoJS.AES.encrypt(password, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    if (!isLoad) {
        fetch(`https://myexapi.hk.cpolar.io:2000/blog/envideo/${query}`)
            .then((response) => {
                isLoad = true;
                if (response.status == "404") {
                    Qmsg.error("哎呀，密码不对！🤡");
                    isLoad = false;
                    return false;
                } else {
                    return response.json()
                }
            }).then((data) => {
                if (data) {
                    art.destroy();
                    art = new Artplayer({
                        container: '#video-box',
                        url: 'https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/up/Sone-544/main.mpd',
                        type: 'mpd',
                        theme: "#2c9678",
                        title: 'Sone-544',
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
                            rebuildPlayer: false, // 换P时重建播放器，默认false
                            onchanged: (art) => { // 换P后的回调函数
                                console.log('Video Changed');
                            },
                            autoNext: true, // 自动播放下一P, 默认false
                            showText: false, // 在控制栏显示文本，否则显示图标，默认为false
                            playlist: data
                        })]
                    },
                        function onReady(art) {
                            this.pause()
                        });

                    $("#middle").hide();
                }
                isLoad = false;
            });
    }
}



window.load_event = {
    ...window.load_event,
    artsss: () => {
        art = new Artplayer({
            container: '#video-box',
            url: 'https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E01.2007.WEB-DL.1080p.HE/main.mpd',
            type: 'mpd',
            theme: "#2c9678",
            title: '第1集',
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
                mpd: playMpd
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
                        title: "大明王朝1566 第01集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E01.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第02集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E02.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第03集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E03.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第04集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E04.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第05集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E05.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第06集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E06.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第07集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E07.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第08集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E08.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第09集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E09.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第10集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E10.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第11集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E11.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第12集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E12.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第13集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E13.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第14集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E14.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第15集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E15.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第16集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E16.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第17集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E17.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第18集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E18.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第19集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E19.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第20集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E20.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第21集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E21.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第22集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E22.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第23集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E23.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第24集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E24.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第25集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E25.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第26集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E26.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第27集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E27.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第28集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E28.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第29集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E29.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第30集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E30.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第31集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E31.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第32集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E32.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第33集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E33.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第34集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E34.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第35集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E35.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第36集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E36.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第37集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E37.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第38集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E38.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第39集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E39.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第40集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E40.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第41集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E41.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第42集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E42.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第43集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E43.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第44集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E44.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第45集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E45.2007.WEB-DL.1080p.HE/main.mpd"
                    },
                    {
                        title: "大明王朝1566 第46集",
                        url: "https://pans.rainsin.cn:2000/d/aliup/win.DESKTOP-PLI9GE8/剧集/大明/[47BT]大明王朝1566.Ming.Dynasty.in.1566.E46.2007.WEB-DL.1080p.HE/main.mpd"
                    }
                ]
            })]
        }, function onReady(art) { this.pause() });
    }
}
