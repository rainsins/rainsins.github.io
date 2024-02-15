const puzzles_data = [
    {
        banner: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/puzzle/%E9%BB%84%E7%87%95%E7%A7%8B.jpeg",
        title: "黄延秋事件",
        state: "未解",
        dec: "事情发生于1977年7月27日至同年9月20日期间，过程从严格意义上来讲属于第五类接触，但却并未见到传统意义上的外星人或UFO。整个事件过程极其诡秘怪异，且有大量的包括公安人员、军人等在内的人证与间接的物证，成为一大悬案。",
    },
    {
        banner: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/puzzle/%E9%80%9A%E5%8F%A4%E6%96%AF.jpg",
        title: "通古斯大爆炸",
        state: "未解",
        dec: "通古斯大爆炸（Tungus Explosion）是1908年6月30日早上7时许发生于现俄罗斯西伯利亚通古斯河附近的爆炸事件。爆炸摧毁了该地区面积达2000平方公里的针叶林，推倒了约8千万棵树。",
    },
    {
        banner: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/puzzle/%E7%BD%97%E6%96%AF.jpg",
        title: "罗斯维尔事件",
        state: "假",
        dec: "伦敦的导演Ray Santilli在1995年时造成了一个相当大的轰动，当时有一段录像，录像上是黑白画面，显示的是一些人在墨西哥罗斯维尔实验室对某种外星生物进行尸检的场景。不过直到2006年，Santilli才说出来这其实是一个骗局。",
    },
    {
        banner: "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/puzzle/%E8%BF%AA.webp",
        title: "迪亚特洛夫事件",
        state: "未解",
        dec: "Dyatlov事件是指1959年2月2日，9名滑雪登山者攀登乌拉尔山脉北部“死亡之山”，不幸发生事故致9人死亡。新调查显示他们当时遭遇雪崩，因此离开帐篷到石脊下躲避，但因山上能见度差又走得太远，当时气温为零下41-45°，最终无法返回而在风雪中冻死。这起64年前的意外被称为人类史上最诡异的登山事故。",
    }
];


function Puzzles() {
    const puzzles_items = puzzles_data.map((el,index) => {
        const imgobj = {
            backgroundImage: `url(${el.banner})`
        };

        const state_color = {
            color: `${el.state == "未解" ? "#c02c38" : el.state == "存疑" ? "#2775b6" : el.state == "假" ? "#1ba784" : "#fbcd31"}`
        };

        return (
            <div className="puzzle-item-box">
                <div className="puzzle-item-img" style={imgobj}></div>
                <div className="puzzle-item-info">
                    <span className="puzzle-item-title">
                        {el.title}
                    </span>
                    <span className="puzzle-item-state" style={state_color}>
                        {el.state}
                    </span>
                    <span className="puzzle-item-dec">
                        {el.dec}
                    </span>
                </div>
            </div>
        );
    });
    return (
        <div className="puzzle-box">
            {puzzles_items}
        </div>
    );
}

const puzzles = ReactDOM.createRoot(document.getElementById('puzzles-box'));
puzzles.render(<Puzzles />);