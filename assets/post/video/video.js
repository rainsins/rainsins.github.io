function getExtension(name) {
    return name.substring(name.lastIndexOf(".") + 1)
}

window.load_event = {
    ...window.load_event,
    player_video: () => {
        $('#email-field').click(function () {
            $(this).addClass("active");
            $(this).attr('placeholder', '密码');
            $('#subscribe-button').addClass("show");
        });

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
        });
    }
}

fetch("https://myapi.rainsin.cn:2000/blog/video")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((element, index) => {
            if (index == 0) {
                let text = "";
                let list_el = element[1].forEach((e, i) => {
                    i == 11 ? text += `<li class="selected" data-url=${e}>${element[2][i] ? element[2][i] : i + 1}</li>` : text += `<li data-url=${e}>${element[2][i] ? element[2][i] : i + 1}</li>`;
                });
                let el = `<details><summary>${element[0]}</summary><ul>${text}</ul></details>`;
                $("#video-list-box").append(el);
            } else {
                let text = "";
                let list_el = element[1].forEach((e, i) => {
                    text += `<li data-url=${e}>${element[2][i] ? element[2][i] : i + 1}</li>`;
                });
                let el = `<details><summary>${element[0]}</summary><ul>${text}</ul></details>`;
                $("#video-list-box").append(el);
            }

        });

        let el = `<h2>嘿嘿嘿</h2><div class="middle" id="middle">
    <input type="password" value="" name="EMAIL" class="email-field" id="email-field" placeholder="输入密码">
    <input type="submit" value="Subscribe" name="subscribe" id="subscribe-button" class=""></div>`;

        $("#video-list-box").append(el);

        $('#video-list-box li').click(function () {
            const clickedElement = $(this);
            const type_ex = getExtension(clickedElement.data("url"));
            $('#video-list-box li').removeClass("selected")
            clickedElement.addClass("selected")
            art.type = type_ex;
            art.switch = clickedElement.data("url");
            art.currentTime = 0;
        });

        $('#subscribe-button').click(() => {
            const password = $("#email-field").val();

            const key = CryptoJS.enc.Utf8.parse('qfqf0kqcajzoa04h');
            const iv = CryptoJS.enc.Utf8.parse('4517229305703582'); 

            const query = CryptoJS.AES.encrypt(password, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            }).toString();

            fetch(`https://myapi.rainsin.cn:2000/blog/envideo/${query}`)
                .then((response) => {
                    if (response.status == "404") {
                        Qmsg.error("哎呀，密码不对！🤡")
                        return false;
                    } else {
                        return response.json()
                    }
                }).then((data) => {
                    if (data) {
                        data.forEach((element, index) => {

                            let text = "";
                            let list_el = element[1].forEach((e, i) => {
                                text += `<li data-url=${e}>${element[2][i] ? element[2][i] : i + 1}</li>`;
                            });
                            let el = `<details><summary>${element[0]}</summary><ul>${text}</ul></details>`;
                            $("#video-list-box").append(el);
                        });

                        $("#middle").hide();

                        $('#video-list-box li').click(function () {
                            const clickedElement = $(this);
                            const type_ex = getExtension(clickedElement.data("url"));
                            $('#video-list-box li').removeClass("selected")
                            clickedElement.addClass("selected")
                            art.type = type_ex;
                            art.switch = clickedElement.data("url");
                            art.currentTime = 0;
                        });
                    }
                });
        })
    });