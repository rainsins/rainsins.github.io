const audios = [
  {
    "bg": "#ffcbdc",
    "artist": "叶蒨文",
    "songName": "黎明不要来",
    "files": {
      "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E5%8F%B6%E8%92%A8%E6%96%87%20-%20%E9%BB%8E%E6%98%8E%E4%B8%8D%E8%A6%81%E6%9D%A5.flac",
      "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%8E%8B%E7%A5%96%E8%B4%A4.jpeg"
    }
  },
  {
    "bg": "#c9bea28f",
    "artist": "孙燕姿",
    "songName": "Honey Honey",
    "files": {
      "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E5%AD%99%E7%87%95%E5%A7%BF%20-%20Honey%20Honey.mp3",
      "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/honey.jpg"
    }
  },
    {
        "bg": "#0896eba1",
        "artist": "小时姑娘",
        "songName": "爱殇",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E5%B0%8F%E6%97%B6%E5%A7%91%E5%A8%98%20-%20%E7%88%B1%E6%AE%87%EF%BC%88%E7%94%B5%E8%A7%86%E5%89%A7%E3%80%8A%E4%B8%9C%E5%AE%AB%E3%80%8B%E7%89%87%E5%A4%B4%E6%9B%B2%EF%BC%89.flac",
            "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E4%B8%9C%E5%AE%AB.jpeg"
        }
    },
  {
    "bg": "#ffcbdc",
    "artist": "张渠",
    "songName": "采薇",
    "files": {
      "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E5%BC%A0%E6%B8%A0%20-%20%E9%87%87%E8%96%87.flac",
      "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E5%AD%94%E5%AD%90.jpg"
    }
  },
    {
        "bg": "#ffc382",
        "artist": "刘随社",
        "songName": "【秦腔】杀庙",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E5%88%98%E9%9A%8F%E7%A4%BE%20-%20%E3%80%90%E7%A7%A6%E8%85%94%E3%80%91%E6%9D%80%E5%BA%99_%5Bcut_41sec%5D_join.mp3",
            "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E6%9D%80%E5%BA%99.jpg"
        }
    },
  {
    "bg": "#ffcbdc",
    "artist": "卫赞成",
    "songName": "【眉户】莲花落",
    "files": {
      "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E8%8E%B2%E8%8A%B1%E8%90%BD.AAC",
      "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E8%8E%B2%E8%8A%B1.webp"
    }
  },
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
