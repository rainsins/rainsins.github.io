const reading_item = [
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/book/tcp.jpg",
        name:"TCP:IP详解 卷一：协议",
        author:"W.Richard Stevens / 范建华",
        publishtime:" 2000-4-1",
        publish:"机械工业出版社",
        va:"45.00元",
        pdf:"https://2000python.lanzouq.com/iK7CU1k8lcsb",
        pdfmi: "",
        ye: 423
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/%E9%A9%AC%E5%85%8B%E6%80%9D/1844.jpg",
        name:"1844年经济学哲学手稿",
        author:"马克思",
        publishtime:"2014.12.1",
        publish:"人民出版社",
        va:"48.00元",
        pdf:"https://pan.rainsin.cn:2000/s/jxi4vs",
        pdfmi: "",
        ye: 325
    }
];

const readed_item = [
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E5%BE%AE%E7%A7%AF%E5%88%86%E5%AD%A6%E6%95%99%E7%A8%8B%EF%BC%8C%E8%8F%B2%E8%B5%AB%E9%87%91%E6%88%88%E5%B0%94%E8%8C%A8/s1525451.webp",
        name:"微积分学教程（第一卷）",
        author:"Г.М.菲赫金哥尔茨",
        publishtime:"2006.1.1",
        publish:"高等教育出版社",
        va:"150.00元",
        pdf:"https://2000python.lanzouq.com/b01fvs9kf",
        pdfmi: "密码:5czs",
        ye: 526
    }
];
const read_item = [
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/book/%E5%BE%AE2.jpg",
        name:"微积分学教程（第二卷）",
        author:"Г.М.菲赫金哥尔茨",
        publishtime:"2006.1.1",
        publish:"高等教育出版社",
        va:"150.00元",
        pdf:"https://2000python.lanzouq.com/b01fvs9kf",
        pdfmi: "密码:5czs",
        ye: 672
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/book/%E5%BE%AE3.jpg",
        name:"微积分学教程（第三卷）",
        author:"Г.М.菲赫金哥尔茨",
        publishtime:"2006.1.1",
        publish:"高等教育出版社",
        va:"150.00元",
        pdf:"https://2000python.lanzouq.com/b01fvs9kf",
        pdfmi: "密码:5czs",
        ye: 546
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%B9%A0%E9%A2%98%E9%9B%86%EF%BC%8C%E5%90%89%E7%B1%B3%E5%A4%9A%E7%BB%B4%E5%A5%87/s4438068.webp",
        name:"数学分析习题集",
        author:"吉米多维奇",
        publishtime:"2010.7.1",
        publish:"机械工业出版社",
        va:"29.00元",
        pdf:"https://2000python.lanzouq.com/izGc71k9gg0d",
        pdfmi: "",
        ye: 392
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E8%A7%A3%E5%89%96/s1613915.webp",
        name:"奈特人体解剖彩色图谱",
        author:"Frank H.Netter / 王怀经",
        publishtime:"2005.10",
        publish:"人民卫生出版社",
        va:"212.00元",
        pdf:"https://pan.rainsin.cn:2000/s/hwqwri",
        pdfmi: "",
        ye: 584
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%EF%BC%8C%E5%8D%93%E9%87%8C%E5%A5%87/s30003985.webp",
        name:"数学分析",
        author:"B.A.卓里奇",
        publishtime: "2006.6.1",
        ye: 276,
        publish:"高等教育出版社",
        va:"110.00元",
        pdf:"https://2000python.lanzouq.com/b01fvs9uf",
        pdfmi:"密码:acs3"
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/book/%E7%BB%8F%E6%B5%8E%E5%AD%A6.jpg",
        name:"经济学",
        author:"保罗·萨缪尔森 / 萧琛",
        publishtime:"2014.6.1",
        publish: "商务印书馆",
        ye: 821,
        va:"268.00元",
        pdf:"",
        pdfmi:""
    },
];


function Ifons({ data }) {
    const data_item = data.map((el, index) => {
        const sty = {
            backgroundImage: `url(${el.imgurl})`
        }

        return (<div className="bb-item-box">
            <div className="bb-item-img" style={sty}></div>
            <div className="bb-item-info">
                <div className="bb-item-info-title">
                    {el.name}
                </div>
                <div className="bb-item-info-det">
                    <div className="author-box det-box flex-box">
                        <span>作者/译者</span>
                        <span>{el.author}</span>
                        
                    </div>
                    <div className="publish-box det-box flex-box">
                        <span>出版社</span>
                        <span>{el.publish}</span>
                    </div>
                    <div className="pages-box flex-box">
                        <span>页数</span>
                        <span>{el.ye}</span>
                    </div>
                </div>
            </div>
        </div>);
    });

    return (<div className="bbox">
        {data_item}
    </div>);
}

const ed_item = ReactDOM.createRoot(document.getElementById('readed-box'));
ed_item.render(<Ifons data={readed_item} />);

const ing_item = ReactDOM.createRoot(document.getElementById('reading-box'));
ing_item.render(<Ifons data={reading_item}/>);

const fu_item = ReactDOM.createRoot(document.getElementById('future-box'));
fu_item.render(<Ifons data={read_item}/>);