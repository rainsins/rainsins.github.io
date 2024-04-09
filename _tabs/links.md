---
layout: about
icon: fas fa-paperclip
order: 4
react: true
video: false
music: false
math: false
mathpolt: false
jquery: true
babel: true
forbid: true
comments: true
cube: false
linksdata: true
anime: true

post: true
description: 友情链接页
keywords: rainsin, links
author: rainsin
---

<style>
  /*  */
@font-face {
    font-family: "Link 隶书";
    src: url("https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/fonts/links/%E8%87%AA%E7%95%99%E5%AE%8B.woff");
}

#core-wrapper,
#tail-wrapper {
    width: 100%;
    padding-right: 0 !important;
    padding-left: 0 !important;
}

#access-tags,
#access-lastmod {
    display: none;
}

#links-box{
    width: 100%;
}

.links-box{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
}

@media (max-width: 1300px) {
    .links-box{
        grid-template-columns: 1fr 1fr;
    }
    /* #core-wrapper,
    #tail-wrapper {
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * .5) !important;
} */
}
@media (max-width: 1000px) {
    .links-box{
        grid-template-columns: 1fr;
    }
}

.links-item-box{
    display: flex;
    color: black;
    padding: 12px;
    background-color: var(--box-bg);
    box-shadow: 0 8px 16px -4px #2c2d300c;
    border: var(--box-border) !important;
    border-radius: 12px;
    transition: all .4s ease-in-out;
}

.links-item-box:hover{
    box-shadow: 0px 0px 20px #a6a8af55;
    border-bottom: var(--box-border) !important;
}

.links-item-img-box{
    display: flex;
    width: 88px;
    aspect-ratio: 1;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}
.links-item-img{
    background-size: cover;
    background-position: center;
    width: 64px;
    height: 64px;
    border-radius: 32px;
    border: 1px solid #dadce0;
}
.links-item-info-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 18px;
    flex: 1;
    /* font-family: "Link 隶书"; */
    font-weight: bold;
}

.links-item-info-name{
    font-size: 1.4rem;
    color: #000;
    line-height: 2.2rem;
}
.links-item-info-url{
    font-size: .8rem;
    color: #767676;
}
.links-item-info-dec{
    font-size: .8rem;
    color: #767676;
}

</style>

<div id="links-box"></div>

## ⛓️申请友链

> 1. 网站名称：（必需）
> 2. 网站地址：（必需）
> 3. 网站头像：（可选，没有的话为默认）
> 4. 网站描述：（可选）
{: .prompt-info }

> 将信息发到这个邮箱里mail@rainsin.cn，或者下面评论。
{: .prompt-tip }

## 🔗我的链接

> 1. 网站名称：rainsin's blog
> 2. 网站地址：https://blog.rainsin.cn
> 3. 网站头像：https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/website/avatar.webp
> 4. 网站描述：思考，练习和坚持。
{: .prompt-info }

## 💣须知

> 1. 如果长时间无法访问 或 未添加本站链接将会删除友链，恕不另行通知。
> 2. 申请链接前请先 添加本站链接。
{: .prompt-warning }

<!-- <script defer>
let gitalk = new Gitalk({
  clientID: '8609fa79e19dadf4a8fb',
  clientSecret: '602d1db1d4f0cf81d602ead9958254b0d0440117',
  repo: 'rainsins.github.io',
  owner: 'rainsins',
  admin: ['rainsins'],
  id: md5(location.pathname),
  distractionFreeMode: true  
});
gitalk.render('gitalk-container');
</script> -->

<script type="text/babel" defer>
  function LinksItem({data}) {
    const item = data.map((e,i)=>{
        const imgobj = {
            backgroundImage: `url(${e.img ? e.img : "https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/img/mm/act.gif"})`
        };
        return(
            <a className="links-item-box" href={e.url} target="_blank">
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
</script>

<script>
  window.load_event = {
  ...window.load_event,
  animes1: $(".links-item-box").hover((e)=>{
      console.log(e);
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
  }),
}
</script>