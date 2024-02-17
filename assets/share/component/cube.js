console.log(TwistyPlayer);

const oll = [

]

const f2l = [

]

const pll = [
    
]

function Cube() {
    const cuu = new TwistyPlayer({
        puzzle: "4x4x4",
        alg: "R U R'",
        hintFacelets: "none",
        backView: "top-right",
        background: "none"
    });

    const display = new ScrambleDisplay({
        event: "pyram",
        scramble: "B U' L U' L B' U' L' l' r u'",
    })
    return (
        <div>
            <twisty-player
  alg="R U R' (U' D) R2 U' R U' R' U R' U R2 (D' U)"
  experimental-setup-anchor="end"
  visualization="experimental-2D-LL"
  background="none"
  control-panel="none"
            ></twisty-player>
            {cuu}
            {display}
        </div>
    );
};



const cube_boxs = ReactDOM.createRoot(document.getElementById('cubes-box'));
cube_boxs.render(<Cube />);