const item = [
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/TCP%3AIP%E8%AF%A6%E8%A7%A3%20%E5%8D%B7%E4%B8%80%EF%BC%9A%E5%8D%8F%E8%AE%AE/s28845534.webp",
        name:"TCP:IP详解 卷一：协议",
        author:"W.Richard Stevens / 范建华",
        publishtime:" 2000-4-1",
        publish:"机械工业出版社",
        va:"45.00元",
        pdf:"https://2000python.lanzouq.com/iK7CU1k8lcsb",
        pdfmi:""
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E4%B8%8D%E7%AD%89%E5%BC%8F/s5956428.webp",
        name:"不等式",
        author:"哈代 / 越民义",
        publishtime:"2008.12",
        publish:"人民邮电出版社",
        va:"49.00元",
        pdf:"https://2000python.lanzouq.com/ihXZY1k8lscb",
        pdfmi:""
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E6%A6%82%E7%8E%87%E5%AF%BC%E8%AE%BA/s4082782.webp",
        name:"概率导论",
        author:"Dimitri P. Bertsekas等 / 郑忠国 等",
        publishtime:"2016.1",
        publish:"人民邮电出版社",
        va:"24.00元",
        pdf:"https://2000python.lanzouq.com/iwofg1k9dqsd",
        pdfmi:""
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E5%BE%AE%E7%A7%AF%E5%88%86%E5%AD%A6%E6%95%99%E7%A8%8B%EF%BC%8C%E8%8F%B2%E8%B5%AB%E9%87%91%E6%88%88%E5%B0%94%E8%8C%A8/s1525451.webp",
        name:"微积分学教程",
        author:"Г.М.菲赫金哥尔茨",
        publishtime:"2006.1.1",
        publish:"高等教育出版社",
        va:"150.00元",
        pdf:"https://2000python.lanzouq.com/b01fvs9kf",
        pdfmi:"密码:5czs"
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%EF%BC%8C%E5%8D%93%E9%87%8C%E5%A5%87/s30003985.webp",
        name:"数学分析",
        author:"B.A.卓里奇",
        publishtime:"2006.6.1",
        publish:"高等教育出版社",
        va:"110.00元",
        pdf:"https://2000python.lanzouq.com/b01fvs9uf",
        pdfmi:"密码:acs3"
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E7%AE%97%E6%B3%95/s29107491.webp",
        name:"算法",
        author:"Robert Sedgewick等 / 谢路云",
        publishtime:"2012.10.1",
        publish:"人民邮电出版社",
        va:"99.00元",
        pdf:"https://2000python.lanzouq.com/ifBo71k9h32d",
        pdfmi:""
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F/s29195878.webp",
        name:"深入理解计算机系统",
        author:"Randal E.Bryant等 / 龚奕利等",
        publishtime:"2011.1.1",
        publish:"机械工业出版社",
        va:"99.00元",
        pdf:"https://pan.rainsin.cn:2000/s/jxi4vs",
        pdfmi:""
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E4%B9%A0%E9%A2%98%E9%9B%86%EF%BC%8C%E5%90%89%E7%B1%B3%E5%A4%9A%E7%BB%B4%E5%A5%87/s4438068.webp",
        name:"数学分析习题集",
        author:"吉米多维奇 / 李荣涷等",
        publishtime:"2010.7.1",
        publish:"机械工业出版社",
        va:"29.00元",
        pdf:"https://2000python.lanzouq.com/izGc71k9gg0d",
        pdfmi:""
    },
    {
        imgurl:"https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/book/%E8%A7%A3%E5%89%96/s1613915.webp",
        name:"奈特人体解剖彩色图谱",
        author:"Frank H.Netter / 王怀经",
        publishtime:"2005.10",
        publish:"人民卫生出版社",
        va:"212.00元",
        pdf:"https://pan.rainsin.cn:2000/s/hwqwri",
        pdfmi:""
    }
];

function Book({el}){
    const style = {
        backgroundImage: `url(${el.imgurl})`
    };

    return(
        <div className="book-item-box">
            <div className="book-item">
                <div className="book-item-content">
                    <div className="book-item-content-img"  style={style}/>
                    <div className="book-item-content-inf">
                        <span>书名</span>
                        <span>{el.name}</span>
                        <span>作者译者</span>
                        <span>{el.author}</span>
                        <span>出版商</span>
                        <span>{el.publish}</span>
                        <span>文件链接</span>
                        <span>
                        <a href={el.pdf} target="_blank">
                            {el.name}
                        </a>
                        {el.pdfmi ? el.pdfmi : ""}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Bookbox(){
    const itembox = item.map((e,i)=>{
        return(<Book el={e} key={i}/>);
    });
    return(
        <div className="book-out-box">
            {itembox}
        </div>
    );
};

function Booker(){
    return(<Bookbox/>);
};

const book_boxs = ReactDOM.createRoot(document.getElementById('book-box'));
book_boxs.render(<Booker/>);