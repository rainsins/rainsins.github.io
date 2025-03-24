window.isLoad = false;
let art = null;
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
        fetch(`https://myapi.rainsin.cn:2000/blog/envideo/${query}`)
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
            url: 'https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/01.mp4',
            type: 'mp4',
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
            plugins: [artplayerPlaylist({
                rebuildPlayer: false, // 换P时重建播放器，默认false
                onchanged: (art) => { // 换P后的回调函数
                    console.log('Video Changed');
                },
                autoNext: true, // 自动播放下一P, 默认false
                showText: false, // 在控制栏显示文本，否则显示图标，默认为false
                playlist: [
                    {
                        title: "01集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/01.mp4"
                    },
                    {
                        title: "02集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/02.mp4"
                    },
                    {
                        title: "03集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/03.mp4"
                    },
                    {
                        title: "04集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/04.mp4"
                    },
                    {
                        title: "05集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/05.mp4"
                    },
                    {
                        title: "06集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/06.mp4"
                    },
                    {
                        title: "07集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/07.mp4"
                    },
                    {
                        title: "08集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/08.mp4"
                    },
                    {
                        title: "09集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/09.mp4"
                    },
                    {
                        title: "10集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/10.mp4"
                    },
                    {
                        title: "11集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/11.mp4"
                    },
                    {
                        title: "12集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/12.mp4"
                    },
                    {
                        title: "13集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/13.mp4"
                    },
                    {
                        title: "14集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/14.mp4"
                    },
                    {
                        title: "15集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/15.mp4"
                    },
                    {
                        title: "16集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/16.mp4"
                    },
                    {
                        title: "17集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/17.mp4"
                    },
                    {
                        title: "18集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/18.mp4"
                    },
                    {
                        title: "19集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/19.mp4"
                    },
                    {
                        title: "20集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/20.mp4"
                    },
                    {
                        title: "21集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/21.mp4"
                    },
                    {
                        title: "22集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/22.mp4"
                    },
                    {
                        title: "23集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/23.mp4"
                    },
                    {
                        title: "24集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/24.mp4"
                    },
                    {
                        title: "25集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/25.mp4"
                    },
                    {
                        title: "26集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/26.mp4"
                    },
                    {
                        title: "27集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/27.mp4"
                    },
                    {
                        title: "28集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/28.mp4"
                    },
                    {
                        title: "29集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/29.mp4"
                    },
                    {
                        title: "30集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/30.mp4"
                    },
                    {
                        title: "31集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/31.mp4"
                    },
                    {
                        title: "32集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/32.mp4"
                    },
                    {
                        title: "33集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/33.mp4"
                    },
                    {
                        title: "34集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/34.mp4"
                    },
                    {
                        title: "35集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/35.mp4"
                    },
                    {
                        title: "36集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/36.mp4"
                    },
                    {
                        title: "37集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/37.mp4"
                    },
                    {
                        title: "38集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/38.mp4"
                    },
                    {
                        title: "39集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/39.mp4"
                    },
                    {
                        title: "40集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/40.mp4"
                    },
                    {
                        title: "41集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/41.mp4"
                    },
                    {
                        title: "42集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/42.mp4"
                    },
                    {
                        title: "43集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/43.mp4"
                    },
                    {
                        title: "44集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/44.mp4"
                    },
                    {
                        title: "45集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/45.mp4"
                    },
                    {
                        title: "46集",
                        url: "https://pans.rainsin.cn:2000/d/kk/%E5%BD%B1%E8%A7%86/%E5%89%A7%E9%9B%86/D%20%E6%89%93%E9%B8%A3%E7%8E%8B%E6%9B%B91566%EF%BC%882007%EF%BC%892K%E4%BF%AE%E5%A4%8D%E7%89%88%20%E5%85%A846%E9%9B%86/46.mp4"
                    }
                ]
            })]
        },function onReady(art) {this.pause()});
    }
}
