const audios = [
    {
        "bg": "#c9bea28f",
        "artist": "Tatsumi Yano",
        "songName": "LOVE Theme from TIGA",
        "files": {
            "song": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb2VyMmNVNVNsT0ZpUGNaTFNrMVlnNG1QNGRyUlE_ZT1UcmN6c3A.flac",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNTdlYwWmY1eV9aUHFlLWc_ZT15RFgweU8.jpg"
        }
    },
    {
        "bg": "#0896eba1",
        "artist": "Tatsumi Yano",
        "songName": "远き呼び声の彼方へ",
        "files": {
            "song": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb2VyMmNVNVNsT0ZpUGNjNVBfQnZLSk5uRG0ySWc_ZT1QOXdDM1U.flac",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNoZ0xac2QzUzFWOGRwNXc_ZT1DWVlDOE4.jpg"
        }
    },
    {
        "bg": "#ebbe03",
        "artist": "Tatsumi Yano",
        "songName": "安らぎを君に",
        "files": {
            "song": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb2VyMmNVNVNsT0ZpUGNhVHIwc01wSVZ2eUtjMGc_ZT1GVVo5MXQ.flac",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNlbFVRZUtzal9TaUphOEE_ZT1BU0c4bjk.jpg"
        }
    },
    {
        "bg": "#ffc382",
        "artist": "Tatsumi Yano",
        "songName": "3000万年前からのメッセージ",
        "files": {
            "song": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb2VyMmNVNVNsT0ZpUGNiSEVnZ1IyWDVUT254MkE_ZT1Tc2VjRXE.flac",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNmb1NycVhWSkZwYk56UVE_ZT1FMVBkYks.jpg"
        }
    },
    {
        "bg": "#44c16fb5",
        "artist": "Tatsumi Yano",
        "songName": "Brave Love,TIGA(P V)",
        "files": {
            "song": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb2VyMmNVNVNsT0ZpUGNSMGFfNGJhM1FzT1ptX2c_ZT1lN2Vmc1M.flac",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNkLWM4V3VjSEJfTmIyRnc_ZT11T1JDS3c.jpg"
        }
    },
    {
        "bg": "#ffcbdc",
        "artist": "Tatsumi Yano",
        "songName": "Lounge Music2",
        "files": {
            "song": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBb2VyMmNVNVNsT0ZpUGNZalpkc0gwREdtaEVlVVE_ZT1kaXh5Vm8.mp3",
            "cover": "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGNneHJET0szUE9idFN0ZWc_ZT1FQUtaZFo.jpg"
        }
    }
];


function MusicPlayers() {
    const [arr, setArr] = React.useState(-1);

    const change_arr = (el, i) => {
        const audio_bt = document.getElementById('audio-obk');

        if (i == arr) {
            if (audio_bt.paused == false) {
                audio_bt.pause();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).removeClass('player-playing');
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-pause').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-play').show();
            } else {
                audio_bt.play();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).addClass('player-playing');
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-play').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-pause').show();
            }
        } else {
            if (audio_bt.paused == false) {
                audio_bt.pause();
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).removeClass('player-playing');
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).find('.fa-pause').hide();
                $(`#a-player .player-music-card:nth-child(${arr + 1})`).find('.fa-play').show();
                audio_bt.src = audios[i].files.song;
                audio_bt.play();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).addClass('player-playing');
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-play').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-pause').show();
            } else {
                audio_bt.src = audios[i].files.song;
                audio_bt.play();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).addClass('player-playing');
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-play').hide();
                $(`#a-player .player-music-card:nth-child(${i + 1})`).find('.fa-pause').show();

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
                <i className="fa fa-solid fa-play player-trigger" onClick={(el) => change_arr(el,i)} aria-hidden="true" data-id={i}></i>
            </div>
        );
    });

    React.useEffect(() => {
        const audio_bt = document.getElementById('audio-obk');
        audio_bt.src = audios[0].files.song;
        audio_bt.volume = 0.3;
        audio_bt.autoplay = false;
        arr_audio = 0;

        $('.fa-play').show();
        $('.fa-pause').hide();
    },[])

    return (
        <>
            {item}
            <audio className="audio-obk" loop id='audio-obk' autoplay='false'></audio>
        </>
    );
};

const musicplayer_boxs = ReactDOM.createRoot(document.getElementById('a-player')).render(<MusicPlayers />);