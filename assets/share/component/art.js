function ArterItem({ arts }) {
    const w_screen = {
        width: `${arts.width[0]}px`
    };

    const update = () => {
        let cs = new Array(arts.page - 1).fill('');
        return cs.map((e, i) => {
            let index = i + 1;
            const url = index >= 100 ? `https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E4%B9%A6%E6%B3%95/${arts.path}/IMG_00${index}.webp` : index >= 10 ? `https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E4%B9%A6%E6%B3%95/${arts.path}/IMG_000${index}.webp` : `https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/%E4%B9%A6%E6%B3%95/${arts.path}/IMG_0000${index}.webp`;

            const setTitle = (index_title) => {
                let title = "";
                if (!arts.pagefonts) {
                    return arts.name;
                }
                arts.pagefonts.forEach((element, index) => {
                    if (element.length == 2) {
                        if (index_title == element[1]) {
                            title = element[0];
                        }
                    } else {
                        if (index_title >= element[1] && index_title <= element[2]) {
                            title = element[0];
                        }
                    }
                });
                return title;
            };
            return (
                <div className="swiper-slide" style={w_screen}>
                    <div className="title">{setTitle(index)}</div>
                    <img data-src={url} className="swiper-lazy" />
                    <div className="swiper-lazy-preloader"></div>
                </div>
            );
        });
    };

    React.useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            speed: 700,
            allowTouchMove: false,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 3,
            },
            centeredSlides: true,
            spaceBetween: 50,
            slidesOffsetBefore: 40,
            loop: true,
            slidesPerView: 'auto',
            on: {
                slideChangeTransitionEnd: function () {
                    this.slides.transition(this.params.autoplay.delay + this.params.speed).transform('translate3d(-60px, 0, 0)');
                },
                slideChangeTransitionStart: function () {
                    this.slides.transition(this.params.speed).transform('translate3d(0, 0, 0)');
                },
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="' + className + '"><span></span><i></i></div>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        window.onresize = function () {
            swiper.update();
        };
    }, [arts]);

    return (
        <div className="swiper-container">
            <div className="swiper-wrapper" id="swiper-wrapper-id">
                {update()}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

//path用来生成图片信息
//图片的名字是有序的，以开始。
const art_item = [
    {
        name: "行书赤壁二赋册",
        path: "chibifu",
        time: "元",
        author: "赵孟頫",
        page: 16,
        color: "#69a7944c",
        width: [800],
        pagefonts: [
            ["前赤壁赋", 1, 6],
            ["后赤壁赋", 7, 10],
            ["赵孟頫识", 11],
            ["东坡像", 12],
            ["鲜于枢识", 13],
            ["康棣识", 14],
            ["班惟志识", 15],
            ["赵弈识", 16]
        ]
    },
    {
        name: "红楼梦赋图册",
        path: "hongloumeng",
        time: "清",
        author: "沈谦作赋盛昱录",
        page: 39,
        color: "#ee48634c",
        width: [640],
        pagefonts: [
            ["封面", 1],
            ["贾宝玉梦游太虚境赋", 2, 3],
            ["秋夜制风雨词赋", 4, 5],
            ["醉眠芍药茵赋", 6, 7],
            ["怡红院开夜宴赋", 8, 9],
            ["海棠结社赋", 10, 11],
            ["邢岫烟典衣赋", 12, 13],
            ["稻香村课子赋", 14, 15],
            ["葬花赋", 16, 17],
            ["滴翠亭扑蝶赋", 18, 19],
            ["中秋夜品笛桂花阴赋", 20, 21],
            ["凹晶馆月夜联句赋", 22, 23],
            ["四美钓鱼赋", 24, 25],
            ["潇湘馆听琴赋", 26, 27],
            ["焚稿断痴情赋", 28, 29],
            ["月夜感幽魂赋", 30, 31],
            ["病补孔雀裘赋", 32, 33],
            ["栊翠庵品茶赋", 34, 35],
            ["见土物思乡赋", 36, 37],
            ["芦雪亭赏雪赋", 38, 39],
        ]
    }
];

//传递作品信息
const ArtContext = React.createContext(null);

//方便是否生成作品页面
function Arterr() {
    const art = React.useContext(ArtContext);

    return (art ? <ArterItem arts={art} /> : "");
};

function Arter() {
    //生成作品列表
    const title_arts = art_item.map((el, i) => {
        const sty = {
            backgroundColor: el.color
        };
        return (
            <div className="art-item" onClick={(e) => setArthandle(el, e)} key={i} style={sty} title="点击查看详情">
                <div className="art-author">
                    {el.time}{el.author}
                </div>
                <div className="art-name">
                    {el.name}
                </div>
            </div>);
    });
    //无作用
    function handleStopWheel(e) {
        if (this.flags === true) {
            e.preventDefault();
        } else {
            return true
        }
    };

    //查看作品
    const setArthandle = (el, e) => {
        setArtContent(el);
        setIsShow(true);
        document.body.classList.add('bd-clean');
        document.documentElement.style.width = "100%";
        document.documentElement.style.height = "100%";
        window.addEventListener("touchmove", handleStopWheel, { passive: false });
    };
    //作品的详细信息
    const [artContent, setArtContent] = React.useState(null);
    //是否展示作品
    const [isShow, setIsShow] = React.useState(false);

    // 查看作品关闭
    const setShow = () => {
        setIsShow(false);
        document.body.classList.remove('bd-clean');
        document.documentElement.style.width = "";
        document.documentElement.style.height = "";
    };

    return (
        <ArtContext.Provider value={artContent}>
            <div className="art-title-box">
                {title_arts}
            </div>
            {isShow ? (
                <div className="swiper-box">
                    <div className="masks"></div>
                    <div className="swiper-if-button" onClick={setShow}></div>
                    <Arterr />
                </div>) : ""}
        </ArtContext.Provider>
    );
};

const art_boxs = ReactDOM.createRoot(document.getElementById('art-box'));
art_boxs.render(<Arter />);