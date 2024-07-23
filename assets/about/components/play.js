const playdata = [
    {
        url: "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGx0a2l3cFNIUDVFNkwtYnc_ZT1YV0ZzU2c.png",
        name: "羽毛球",
        layel: "❤❤❤❤❤"
    },
    {
        url: "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGx1OGpUN1R6cTJCUmNWMlE_ZT1mR0YweU8.png",
        name: "网球",
        layel: "❤❤❤❤❤"
    },
    {
        url: "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGwyU1A0SmVzeGhVMktsLXc_ZT1wYXI4UWE.png",
        name: "散步思考",
        layel: "❤❤❤❤❤"
    },
    {
        url: "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGx6R0toWnZUNUNZWGY3V0E_ZT1IRUZ5VXU.png",
        name: "魔方",
        layel: "❤❤❤❤"
    },
    {
        url: "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGx5aW1BV2I4OUllZFNzcFE_ZT1qaWRabng.png",
        name: "写写",
        layel: "❤❤❤❤"
    },
    {
        url: "https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL2kvcyFBb2VyMmNVNVNsT0ZpUGx2RGtlb1RSTDQ4Y0x5QXc_ZT16d3RQdng.png",
        name: "🚗",
        layel: "❤❤❤❤"
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

const root_play = ReactDOM.createRoot(document.getElementById('playing-box'));
root_play.render(<Playing />);