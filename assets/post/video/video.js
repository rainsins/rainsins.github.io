function getExtension(name) {
    return name.substring(name.lastIndexOf(".") + 1)
}

String.prototype.gblen = function () {
    var len = 0;
    for (var i = 0; i < this.length; i++) {
        if (this.charCodeAt(i) > 127 || this.charCodeAt(i) == 94) {
            len += 2;
        } else {
            len++;
        }
    }
    return len;
}

let isLoad = false;

function send_message() {
    const password = $("#email-field").val();

    const key = CryptoJS.enc.Utf8.parse('qfqf0kqcajzoa04h');
    const iv = CryptoJS.enc.Utf8.parse('4517229305703582');

    const query = CryptoJS.AES.encrypt(password, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();

    if (isLoad) {
        fetch(`https://enapi.rainsin.cn/envideo/${query}`)
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
                new Artplayer({
                    container: '#video-box',
                    url: 'https://pan.rainsin.cn:2002/%E7%BB%93%E6%88%90%E6%9E%9C%E5%AE%9E/Start-111-Uc.mp4',
                    type: 'mp4',
                    theme: "#2c9678",
                    title: 'Start-111',
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
                    },);
            }
            isLoad = false;
        });
    }

    
}

window.load_event = {
    ...window.load_event,
    player_video: () => {
        $("#email-field").keypress(function (event) {
            if (event.which === 13) {
                if (isLoad) {
                    Qmsg.success("点慢一点！奴家受不了啦！🌶")
                } else {
                    send_message();
                }
            }
        });
        
        $('#subscribe-button').on("mousedown",() => {
            if (isLoad) {
                Qmsg.success("点慢一点！奴家受不了啦！🌶")
            } else {
                send_message();
            }
        })
    }

}
