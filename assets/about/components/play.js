const playdata = [
    {
        url: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/%E7%BE%BD%E6%AF%9B.png",
        name: "羽毛球",
        layel: "❤❤❤❤❤"
    },
    {
        url: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/%E7%BD%91%E7%90%83.png",
        name: "网球",
        layel: "❤❤❤❤❤"
    },
    {
        url: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/cube.png",
        name: "魔方",
        layel: "❤❤❤❤"
    },
    {
        url: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/calligraphy.png",
        name: "写写",
        layel: "❤❤❤❤"
    },
    {
        url: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/hei.png",
        name: "黑苹果",
        layel: "❤❤❤"
    },
    {
        url: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/pubis.png",
        name: "🚗",
        layel: "❤❤❤"
    }
];

function Playing() {
    const item = playdata.map((e) => {
        return (<Pitem obj={e} />)
    });
    return (
        <div className="playing-item-box">
            {item}
        </div>
    );
};

function Pitem({ obj }) {
    const style_img = {
        backgroundImage: `url(${obj.url})`,
    };
    return (
        <div className="palying-item">
            <div className="palying-item-img">
                <div className="palying-img" style={style_img}></div>
            </div>
            <div className="palying-item-name">
                {obj.name}
            </div>
            <div className="palying-item-lay">
                {obj.layel}
            </div>
        </div>
    );
};

class Play extends React.Component {
    render() {
        return (<div className="container-playing">
            <Playing />
        </div>);
    };
};

const root_play = ReactDOM.createRoot(document.getElementById('playing-box'));
root_play.render(<Play />);