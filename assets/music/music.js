const audios = [
    {
        "bg": "#c9bea28f",
        "artist": "Tatsumi Yano",
        "songName": "LOVE Theme from TIGA",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20LOVE%20Theme%20from%20TIGA%20M-2.flac?sign=RhbpSmHcAaENzOKZQLXdaQmZ95rQLMzAL4eg-msIu6s=:0",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNoZ0xac2QzUzFWOGRwNXc_ZT1DWVlDOE4.jpg"
        }
    },
    {
        "bg": "#0896eba1",
        "artist": "Tatsumi Yano",
        "songName": "远き呼び声の彼方へ",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E8%BF%9C%E3%81%8D%E5%91%BC%E3%81%B3%E5%A3%B0%E3%81%AE%E5%BD%BC%E6%96%B9%E3%81%B8%20M-41%2CM-62A.flac?sign=5_6QSQMqOOa0uW0Srp6SQszUtAWMyvjjGX0-4nKFi1w=:0",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNlbFVRZUtzal9TaUphOEE_ZT1BU0c4bjk.jpg"
        }
    },
    {
        "bg": "#ebbe03",
        "artist": "Tatsumi Yano",
        "songName": "安らぎを君に",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E5%AE%89%E3%82%89%E3%81%8E%E3%82%92%E5%90%9B%E3%81%AB%20M-62B%2CM-35.flac?sign=ebtjUdGbnwmk6odqHQQbjWsry7gsSkGH2upYASIooRs=:0",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGcyam55bWZkWWFuWGFHd1E_ZT1MaGRidk0.jpg"
        }
    },
    {
        "bg": "#ffc382",
        "artist": "Tatsumi Yano",
        "songName": "3000万年前からのメッセージ",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%203000%E4%B8%87%E5%B9%B4%E5%89%8D%E3%81%8B%E3%82%89%E3%81%AE%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%20M-44%2CTam%E3%81%AE%E3%81%BF%2CM-45.flac?sign=htbQN8RrcU3p84_RNmRDYwM6gg7jWkl08zFfsAz8eDM=:0",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNmb1NycVhWSkZwYk56UVE_ZT1FMVBkYks.jpg"
        }
    },
    {
        "bg": "#44c16fb5",
        "artist": "Tatsumi Yano",
        "songName": "Brave Love,TIGA(P V)",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20Brave%20Love%2CTIGA%20(PIANO%20VERSION)%20M-7.flac?sign=8Msd8-vkIu21EgaUvYDnruSrEL6TWme6s1MGB7uYFb8=:0",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNTdlYwWmY1eV9aUHFlLWc_ZT15RFgweU8.jpg"
        }
    },
    {
        "bg": "#ffcbdc",
        "artist": "Tatsumi Yano",
        "songName": "Lounge Music2",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20Lounge%20Music2M-63.mp3?sign=blwKzl0cFFgdlKtJPSeCtYk0187gbbyEg_dZ90obDus=:0",
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
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-play').show();
                $(`#a-player .player-music-card:nth-child(${index + 1})`).find('.fa-pause').hide();
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
