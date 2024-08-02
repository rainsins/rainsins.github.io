const audios = [
  {
    "bg": "#ffcbdc",
    "artist": "曾淑琴",
    "songName": "鲁冰花",
    "files": {
      "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E9%B2%81%E5%86%B0%E8%8A%B1.mp3?sign=2dMc1a4uP_6YZujVfGiBZ9tTMlJDoI1pIkfooCZuTvw=:0",
      "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/colorhub.webp?sign=3BGZaGixz3TDhzQxMhSBdMRvSBE3OzFl3Q76q2i9mZk=:0"
    }
  },
  {
    "bg": "#c9bea28f",
    "artist": "李劫夫",
    "songName": "二小",
    "files": {
      "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E6%AD%8C%E5%94%B1%E4%BA%8C%E5%B0%8F.mp4?sign=bTVUN2GkjFrklKuW8YG8DMBkAT7TBdJEr6fDXwYa7M4=:0",
      "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E6%8A%97%E6%88%98.jpg?sign=nh1pBIGXkwEPJdKY8hARGK2vg97qzj5zSddmtlJr6gY=:0"
    }
  },
    {
        "bg": "#0896eba1",
        "artist": "群星",
        "songName": "读书郎",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E8%AF%BB%E4%B9%A6%E9%83%8E.aac?sign=1NEjZ5bNfQp3tUFQcoQaKCNPratwttnbAPkL0RskSPI=:0",
            "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/Karl_Marx_001.jpg?sign=6G7gIiF4DBrVTVxgHoGB9Bu-CUD7Lh07i41M5Gv8D68=:0"
        }
    },
    {
        "bg": "#ebbe03",
        "artist": "甘萍",
        "songName": "三个和尚",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E4%B8%89%E4%B8%AA%E5%92%8C%E5%B0%9A.mp3?sign=BQ-DItDUjrBUbl5g6AT4K-Ga0BCIVb9WemPHYStQn_w=:0",
            "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/three.png?sign=Gj5N33s4ataC-na6db7Oe6617O1m2JHDXYJnCJ3Azt4=:0"
        }
    },
    {
        "bg": "#ffc382",
        "artist": "吴应炬",
        "songName": "葫芦娃",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E5%90%B4%E5%BA%94%E7%82%AC%20-%20%E8%91%AB%E8%8A%A6%E5%A8%83.mp3?sign=V8NqZDVSKynR5F-STwnsR_w53F4FFhQX29z1Gg_Vn4w=:0",
            "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E8%91%AB%E8%8A%A6.webp?sign=BGV-wvuGo0Pv7NsNQv-jnTMQYPLRzgAFvBN6LgiPWlY=:0"
        }
    },
    {
        "bg": "#44c16fb5",
        "artist": "古巨基",
        "songName": "烟雨朦朦",
        "files": {
            "song": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%83%9F%E9%9B%A8%E8%90%8C%E8%90%8C.mp3?sign=iXmaD7yZd46ZbHHhMuR67ZMDYlqClTQoSWgFLxlzkmE=:0",
            "cover": "https://pan.rainsin.cn:2000/d/blog/aobike/%E7%83%9F%E9%9B%A8%E8%92%99%E8%92%99.jpg?sign=9KuaPLcQnOSfAFDdJ8LOXMS1FChQN7gt6ZHt9fHiZLo=:0"
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
