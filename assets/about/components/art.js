const threeav = [
    {
        name: "香水じゅん",
        age: "2001.03.29.",
        three: "B82 / W55 / H85",
        out: "2021.7.",
        color: "#5248b5",
        color1: "#6E4A35",
        color2: "#CB926E",
        color3: "#D2B39C",
        color4: "#90552C",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E9%A6%99%E6%B0%B4.jpg",
        bgimg: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E9%A6%99%E6%B0%B4.webp",
        mfact: "S1",
        mfactlogo: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/s1.webp",
        url: "https://xslist.org/zh/model/138616.html"
    },
    {
        name: "山岸あやか",
        age: "1992.11.30.",
        three: "B82 / W59 / H81",
        out: "2017.07.",
        color: "#1f7b8f",
        color1: "#86706F",
        color2: "#D6D7DA",
        color3: "#C2BBBC",
        color4: "#9BA5A4",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E5%B1%B1%E5%B2%B8/%E5%B1%B1%E5%B2%B8t.webp",
        bgimg: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E5%B1%B1%E5%B2%B8/%E5%B1%B1%E5%B2%B8.webp",
        mfact: "PREMIUM",
        mfactlogo: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/premium.png",
        url: "https://xslist.org/zh/model/358.html"
    },
    {
        name: "さくら まな",
        age: "1993.03.22.",
        three: "B89 / W58 / H89",
        out: "2016.06.",
        color: "#cf3881",
        color1: "#2B6C8A",
        color2: "#2092C5",
        color3: "#0DC0E5",
        color4: "#BF9989",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E7%BA%B1%E7%BB%98/%E7%BA%B1%E7%BB%98t.jpg",
        bgimg: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E7%BA%B1%E7%BB%98/%E7%BA%B1%E7%BB%98b.webp",
        mfact: "SOD",
        mfactlogo: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/sod.webp",
        url: "https://xslist.org/zh/model/172.html"
    }
];

const twoav = [
    {
        name: "太阳しずく",
        age: "2000.05.09.",
        three: "B88 / W54 / H87",
        out: "2021.08.",
        color: "#e9652e",
        color1: "#DAC9BF",
        color2: "#DFB095",
        color3: "#B49179",
        color4: "#AD6F4B",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/mi/mot.jpg",
        bgimg: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/mi/mob1.webp",
        mfact: "SOD",
        mfactlogo: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/sod.webp",
        url: "https://xslist.org/zh/model/134598.html"
    },
    {
        name: "坂道みる",
        age: "1999.11.28.",
        three: "B82 / W54 / H84",
        out: "2021.06",
        color: "#cc7a23",
        color1: "#838386",
        color2: "#E6CECA",
        color3: "#C6BCB7",
        color4: "#838386",
        img: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E6%9D%BF%E5%88%80/murit.jpg",
        bgimg: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/av/%E6%9D%BF%E5%88%80/muri.webp",
        mfact: "S1",
        mfactlogo: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/s1.webp",
        url: "https://xslist.org/zh/model/25134.html"
    },
];
function Three() {
    const aitem = threeav.map(i => {
        return (
            <AvItem avs={i} />
        );
    });
    return (
        <div class="three-av">
            {aitem}
        </div>
    );
};

function Two() {
    const aitem = twoav.map(i => {
        return (<AvItem avs={i} />)
    });
    return (
        <div class="Two-av">
            {aitem}
        </div>
    );
};

function AvItem({ avs }) {
    const st = {
        backgroundImage: `url(${avs.bgimg})`
    };
    const nameimg = {
        backgroundImage: `url(${avs.img})`
    };
    const maskstyle = {
        backgroundImage: `linear-gradient(to bottom, ${avs.color1}  0%, ${avs.color2} 35%, ${avs.color3} 75%, ${avs.color4} 100%)`
    };
    const titlecolor = {
        color: avs.color
    };
    const mfact_logo = {
        backgroundImage: `url(${avs.mfactlogo})`
    };
    return (
        <div className="av-item-box" style={st}>
            <div className="av-mask" style={maskstyle}></div>

            <div className="av-title">
                <div className="av-title-name" style={titlecolor}>
                    {avs.name}
                </div>
                <div className="av-title-img">
                    <div className="av-title-img-main" style={nameimg} data-url={avs.url}></div>
                </div>
            </div>
            <div className="av-detial">
                <Deitem left={'生日'} right={avs.age} color={titlecolor} />
                <Deitem left={'三围'} right={avs.three} color={titlecolor} />
                <Deitem left={'出道'} right={avs.out} color={titlecolor} />
                <Deitem left={'厂商'} right={avs.mfact} color={titlecolor} />
            </div>
            <div className="av-mfact-logo" id={avs.name} style={mfact_logo}></div>
        </div>
    );
};

function Deitem({ left, right, color }) {
    return (
        <div className="av-detial-item">
            <div className="av-detial-item-main" style={color}>
                {left}
            </div>
            <div className="av-detial-item-content">
                {right}
            </div>
        </div>
    );
};

class Av extends React.Component {
    render() {
        return (<div className="container-av">
            <Three />
            <Two />
        </div>);
    };
};

const av_boxs = ReactDOM.createRoot(document.getElementById('av-box'));
av_boxs.render(<Av />);