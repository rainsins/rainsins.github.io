Element.prototype._attachShadow = Element.prototype.attachShadow

Element.prototype.attachShadow = function () {

        return this._attachShadow({mode:'open'})

}

function Cube() {
    return (
        <div className="cube-box">
            <div className="cube-alg-box">

            </div>
            <div className="cube-alg-det-box">
                
            </div>
            <div className="cube-info-box">
                <twisty-player
                    alg="R U R' (U' D) R2 U' R U' R' U R' U R2 (D' U)"
                    experimental-setup-anchor="end"
                    experimental-stickering="PLL"
                    background="none"
                ></twisty-player>
                <div className="cube-info-alg">
                    {"R U R' (U' D) R2 U' R U' R' U R' U R2 (D' U)"}
                </div>
            </div>
        </div>
    );
};



const cube_boxs = ReactDOM.createRoot(document.getElementById('cubes-box'));
cube_boxs.render(<Cube />);