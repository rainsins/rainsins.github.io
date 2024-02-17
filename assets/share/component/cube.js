Element.prototype._attachShadow = Element.prototype.attachShadow

Element.prototype.attachShadow = function () {

        return this._attachShadow({mode:'open'})

}

const cube = [
    {
        name: "F2L",
        count: 41,
    },
    {
        name: "OLL",
        count: 57,
    },
    {
        name: "PLL",
        count: 21,
    },
]

function Cube() {
    const [alg, setAlg] = React.useState("");
    const [algType, setAlgType] = React.useState("F2L");
    const [algArray, setAlgArray] = React.useState(f2l);
    const [count, setCount] = React.useState(41);

    const change_type = (e,type, cou) => {
        setAlgType(type);
        setCount(cou);
        switch (type) {
            case "F2L":
                setAlgArray(f2l);
                break;
            case "OLL":
                setAlgArray(oll);
                break;
            case "PLL":
                setAlgArray(pll);
                break;
            default:
                break;
        }
    }

    const alg_type = cube.map((el, i) => {

        return (
            <span className={`cube-alg-type-item ${algType == el.name ? "select-item" : ""}`} onClick={(e) => change_type(e, el.name, el.count)}>
                {el.name}
            </span>
        );
    });

    function show_item(){
        const temp = new Array(count).fill("");
        return temp.map((el, ind) => {
            const i = ind + 1;
            const str = i > 9 ? `${algType}${i}` : `${algType}0${i}`;
            
            const datas = algArray[str];

            const data_items = datas.data.map((el, i) => {
                if (i > 3) {
                    return;
                }
                return (
                    <div>{el.alg}</div>
                );
            })

            const img_sty = {
                backgroundImage: `url(${datas.img})`
            }
            
            return (
                <div className="cube-alg-det-item-box">
                    <div className="cube-alg-det-item-info">
                        <div className="cube-alg-det-item-info-img" style={img_sty}></div>
                        <span >{str}</span>
                    </div>
                    <div className="cube-alg-det-item-alg">
                        {data_items}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="cube-box">
            <div className="cube-alg-box">
                <div className="cube-alg-type">
                    {alg_type}
                </div>
                <div className="cube-alg-det">
                    {show_item()}
                </div>
            </div>
            <div className="cube-info-box">
                <twisty-player
                    alg={alg}
                    experimental-setup-anchor="end"
                    experimental-stickering={algType}
                    background="none"
                    back-view="top-right"
                ></twisty-player>
                <div className="cube-info-alg">
                    {alg}
                </div>
            </div>
        </div>
    );
};



const cube_boxs = ReactDOM.createRoot(document.getElementById('cubes-box'));
cube_boxs.render(<Cube />);