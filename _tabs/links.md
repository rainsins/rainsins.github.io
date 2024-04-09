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

<link rel="stylesheet" href="/assets/links/links.css"/>

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