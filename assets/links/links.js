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