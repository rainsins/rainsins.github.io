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

window.load_event = {
    ...window.load_event,
    player_video: () => {
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

        function playFlv(video, url, art) {
            if (flvjs.isSupported()) {
                if (art.flv) art.flv.destroy();
                const flv = flvjs.createPlayer({ type: 'flv', url });
                flv.attachMediaElement(video);
                flv.load();
                art.flv = flv;
                art.on('destroy', () => flv.destroy());
            } else {
                art.notice.show = 'Unsupported playback format: flv';
            }
        }

        window.art = new Artplayer({
            container: '#video-box',
            url: 'https://txmov2.a.kwimgs.com/bs3/video-hls/5195465185500328899_hlsb.m3u8',
            type: 'm3u8',
            theme: "#2c9678",
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
                m3u8: playM3u8,
                flv: playFlv,
            },

        },
            function onReady(art) {
                this.pause()
            },);
    }
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
        fetch(`https://enapi.rainsin.cn/blog/envideo/${query}`)
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

                data.forEach((element, index) => {
                    let dbl = 0;
                    let text = "";
                    let list_el = element[1].forEach((e, i) => {
                        let self_dbl = element[2][i] ? element[2][i].gblen() / 2 : ((i + 1).toString().gblen()) / 2;
                        dbl = dbl >= self_dbl ? dbl : self_dbl;

                        let img = element[3] ? `data-imgurl=${element[3][i]}` : "";

                        text += `<li ${img} data-url=${e}>${element[2][i] ? element[2][i] : i + 1}</li>`;
                    });
                    let el = `<details><summary>${element[0]}</summary><ul style="grid-template-columns: repeat(auto-fit,minmax(${dbl + 2}em,1fr));">${text}</ul></details>`;
                    $("#video-list-lock-box").append(el);
                });

                $("#middle").hide();

                $('#video-list-unlock-box li, #video-list-lock-box li').click(function () {
                    const clickedElement = $(this);
                    const type_ex = getExtension(clickedElement.data("url"));
                    $('#video-list-unlock-box li, #video-list-lock-box li').removeClass("selected")
                    clickedElement.addClass("selected")
                    art.type = type_ex;
                    art.switch = clickedElement.data("url");
                    art.poster = clickedElement.data("imgurl") ? clickedElement.data("imgurl") : "";
                    art.currentTime = 0;
                });
            }
            isLoad = false;
        });
    }

    
}

fetch("https://enapi.rainsin.cn/blog/video")
    .then((response) => response.json())
    .then((data) => {
        
        data.forEach((element, index) => {
            let dbl = 0;
            let text = "";
            if (index == 0) {
                let list_el = element[1].forEach((e, i) => {

                    let self_dbl = element[2][i] ? element[2][i].gblen() / 2 : ((i + 1).toString().gblen()) / 2;
                    dbl = dbl >= self_dbl ? dbl : self_dbl;

                    let img = element[3] ? `data-imgurl=${element[3][i]}` : "";

                    i == 11 ? text += `<li class="selected" ${img} data-url="${e}">${element[2][i] ? element[2][i] : i + 1}</li>` : text += `<li data-url=${e}>${element[2][i] ? element[2][i] : i + 1}</li>`;
                });

                let el = `<details><summary>${element[0]}</summary><ul style="grid-template-columns: repeat(auto-fit,minmax(${dbl + 2}em,1fr));">${text}</ul></details>`;
                $("#video-list-unlock-box").append(el);
            } else {
                let list_el = element[1].forEach((e, i) => {
                    let self_dbl = element[2][i] ? element[2][i].gblen() / 2 : ((i + 1).toString().gblen()) / 2;
                    dbl = dbl >= self_dbl ? dbl : self_dbl;
                    let img = element[3] ? `data-imgurl=${element[3][i]}` : "";
                    text += `<li ${img} data-url=${e}>${element[2][i] ? element[2][i] : i + 1}</li>`;
                });
                let el = `<details><summary>${element[0]}</summary><ul style="grid-template-columns: repeat(auto-fit,minmax(${dbl + 2}em,1fr));">${text}</ul></details>`;
                $("#video-list-unlock-box").append(el);
            }

        });

        $('#video-list-unlock-box li, #video-list-lock-box li').click(function () {
            const clickedElement = $(this);
            const type_ex = getExtension(clickedElement.data("url"));
            $('#video-list-unlock-box li, #video-list-lock-box li').removeClass("selected")
            clickedElement.addClass("selected")
            art.type = type_ex;
            art.switch = clickedElement.data("url");
            art.poster = clickedElement.data("imgurl") ? clickedElement.data("imgurl") : "";
            art.currentTime = 0;
        });

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
    });