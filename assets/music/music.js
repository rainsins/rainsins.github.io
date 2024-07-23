const audios = [
    {
        "bg": "#c9bea28f",
        "artist": "Tatsumi Yano",
        "songName": "LOVE Theme from TIGA",
        "files": {
            "song": "https://api.rainsin.cn/music/post-about/tigo.ogg",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNoZ0xac2QzUzFWOGRwNXc_ZT1DWVlDOE4.jpg"
        }
    },
    {
        "bg": "#0896eba1",
        "artist": "Tatsumi Yano",
        "songName": "远き呼び声の彼方へ",
        "files": {
            "song": "https://api.rainsin.cn/music/post-about/%E5%91%BC.ogg",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNlbFVRZUtzal9TaUphOEE_ZT1BU0c4bjk.jpg"
        }
    },
    {
        "bg": "#ebbe03",
        "artist": "Tatsumi Yano",
        "songName": "安らぎを君に",
        "files": {
            "song": "https://api.rainsin.cn/music/post-about/%E5%AE%89.ogg",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGcyam55bWZkWWFuWGFHd1E_ZT1MaGRidk0.jpg"
        }
    },
    {
        "bg": "#ffc382",
        "artist": "Tatsumi Yano",
        "songName": "3000万年前からのメッセージ",
        "files": {
            "song": "https://api.rainsin.cn/music/post-about/3000.ogg",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNmb1NycVhWSkZwYk56UVE_ZT1FMVBkYks.jpg"
        }
    },
    {
        "bg": "#44c16fb5",
        "artist": "Tatsumi Yano",
        "songName": "Brave Love,TIGA(P V)",
        "files": {
            "song": "https://api.rainsin.cn/music/post-about/pv.ogg",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNTdlYwWmY1eV9aUHFlLWc_ZT15RFgweU8.jpg"
        }
    },
    {
        "bg": "#ffcbdc",
        "artist": "Tatsumi Yano",
        "songName": "Lounge Music2",
        "files": {
            "song": "https://api.rainsin.cn/music/post-about/2.ogg",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNneHJET0szUE9idFN0ZWc_ZT1FQUtaZFo.jpg"
        }
    }
];


function MusicPlayers() {
    const [arr, setArr] = React.useState(-1);
    const [isLoading, setIsLoading] = React.useState(false);

    const pause_m = (audio_in, index) => {
        audio_in.pause();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).removeClass('player-playing');
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-play').show();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-spinner').hide();
        
    }

    const play_m = (audio_in, index) => {
        audio_in.play();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).addClass('player-playing');
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-play').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').show();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-spinner').hide();
    }

    const load_m = (audio_in, index) => {
        $(`#a-player .player-music-card:nth-child(${index + 1})`).addClass('player-playing');
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-play').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').hide();
        $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-spinner').show();
        audio_in.oncanplaythrough = function (ev) {
            play_m(audio_in, index);  
            setIsLoading(false);
        }
    }

    const change_arr = (el, i) => {
        const audio_bt = document.getElementById('audio-obk');

        if (i == arr) {
            if (isLoading) {
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-spinner').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-play').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).removeClass('player-playing');
            } else {
                if (audio_bt.paused == false) {
                    pause_m(audio_bt, i);
                } else {
                    play_m(audio_bt, i);
                }
            }
        } else {
            if (isLoading) {
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).find('.fa-spinner').hide();
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).find('.fa-play').show();
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).removeClass('player-playing');
                audio_bt.src = audios[i].files.song;
                load_m(audio_bt, i);
            } else {
                if (audio_bt.paused == false) {
                    pause_m(audio_bt, arr);
                    audio_bt.src = audios[i].files.song;
                    setIsLoading(true);
                    load_m(audio_bt, i);
                } else {
                    audio_bt.src = audios[i].files.song;
                    setIsLoading(true);
                    load_m(audio_bt, i);
                }
            }
        }

        if (i !== arr) {
            setArr(i);
        }
    }

    const item = audios.map((e, i) => {
        const bgi = {
            backgroundImage: `url(${e.files.cover})`,
        };
        return (
            <div className='player-music-card' key={i} data-id={i}>
                <div className='player-image' style={bgi}></div>
                <div className='player-wave'></div>
                <div className='player-wave'></div>
                <div className='player-wave'></div>
                <div className='player-info'>
                    <h2 className='player-title'>{ e.songName }</h2>
                    <div className='player-artist'>{ e.artist}</div>
                </div>
                <i className="fa fa-solid fa-pause player-trigger" onClick={(el) => change_arr(el,i)} aria-hidden="true" data-id={i}></i>
                <i className="fa fa-solid fa-play player-trigger" onClick={(el) => change_arr(el, i)} aria-hidden="true" data-id={i}></i>
                <i className="fa fa-solid fa-spinner player-trigger player-loading" onClick={(el) => change_arr(el, i)} aria-hidden="true" data-id={i}></i>
            </div>
        );
    });

    React.useEffect(() => {
        const audio_bt = document.getElementById('audio-obk');
        audio_bt.src = audios[0].files.song;
        audio_bt.volume = 0.3;
        audio_bt.autoplay = false;

        audio_bt.onstalled = function (ev) {
            swal('获取音频失败，可能网络有点问题或者我的服务有问题！');
            $('.player-music-card').removeClass('player-playing');
            $('.fa-play').show();
            $('.fa-pause').hide();
            $('.fa-spinner').hide();
            audio_bt.pause();
        }

        $('.fa-play').show();
        $('.fa-pause').hide();
        $('.fa-spinner').hide();
    },[])

    return (
        <>
            {item}
            <audio className="audio-obk" loop id='audio-obk' autoplay='false'></audio>
        </>
    );
};

const musicplayer_boxs = ReactDOM.createRoot(document.getElementById('a-player')).render(<MusicPlayers />);