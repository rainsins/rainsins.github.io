const links_data = [
  {
    name: "Rainsin（test）",
    url: "https://blog.rainsin.cn",
    img: "",
    dec: "如人饮水，冷暖自知。",
    emil: "1820278582@qq.com",
    index: 1,
  },
  {
    name: "半截の诗",
    url: "https://sweetjing.cc/",
    img: "https://q1.qlogo.cn/g?b=qq&nk=1486823198&s=640",
    dec: "保持热爱，奔赴山海。",
    emil: "",
    index: null,
  },
  {
    name: "半日闲",
    url: "https://xiaoa.me",
    img: "https://xiaoa.me/logo.png",
    dec: "偷得浮生半日闲",
    emil: "",
    index: null
  },
  {
    name: "Cream薄荷糖",
    url: "https://creammint.cn/",
    img: "https://cdn.creammint.cn/basicdata_img/avatar.webp",
    dec: "尚未佩剑，转眼遍是江湖，喜欢的人太美，想买的东西太贵~",
    emil: "",
    index: null
  },
];
function LinksItem({data}) {

    React.useEffect(()=>{
      $(".links-item-box").hover((e)=>{
        anime({
          targets: e.currentTarget.firstChild.firstChild,
          keyframes: [
            {rotate: "18deg",},
            {rotate: "-18deg"},
            {rotate: "10deg"},
            {rotate: "-8deg"},
            {rotate: "5deg"},
            {rotate: "-1deg"},
            {rotate: 0},
          ],
          easing: 'easeInOutSine'
        });
      },(e)=>{
      });
    },[])

    const item = data.map((e,i)=>{
        const imgobj = {
            backgroundImage: `url(${e.img ? e.img : e.emil ? `https://cravatar.cn/avatar/${MD5.generate(e.emil)}` : "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/mm/act.gif"})`
      };

      const get_imgurl = (index1) => {
        return index1 >= 9 ? `https://pan.rainsin.cn:2000/d/blog/img/post/%E5%8D%81%E4%BA%8C%E6%A2%A6_%E4%BA%AE%E7%82%B9%E6%BC%AB%E7%94%BB-%E7%AB%99%E9%85%B7ZCOOL/100${i + 1}.jpg` : `https://pan.rainsin.cn:2000/d/blog/img/post/%E5%8D%81%E4%BA%8C%E6%A2%A6_%E4%BA%AE%E7%82%B9%E6%BC%AB%E7%94%BB-%E7%AB%99%E9%85%B7ZCOOL/1000${i + 1}.jpg`
      }
      
      const imgbg = {
        backgroundImage: `url(${ e.index ? get_imgurl(e.index) : get_imgurl(i - Math.floor(i % 13) * 13 )})`
      }
        return(
            <a className="links-item-box" href={e.url} target="_blank" style={imgbg}>
                <div className="links-item-img-box">
                    <div className="links-item-img" style={imgobj}></div>
                </div>
                <div className="links-item-info-box">
                    <span className="links-item-info-name">{e.name}</span>
                    <span className="links-item-info-url">{e.url}</span>
                    {e.dec ? <span className="links-item-info-dec">
                        {e.dec}
                    </span> : null}
                </div>
            </a>
        );
    });
    return (
        <div className="links-box">
            {item}
        </div>
    );
};

const links_item = ReactDOM.createRoot(document.getElementById('links-box'));
links_item.render(<LinksItem data={links_data}/>);
