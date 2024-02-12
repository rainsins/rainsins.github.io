
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