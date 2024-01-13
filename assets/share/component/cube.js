
const oll = [

]

const f2l = [

]

const pll = [
    
]

function Cube(){
    return (
        <twisty-player alg="R U R' U R U2' R'"></twisty-player>
    );
};



const cube_boxs = ReactDOM.createRoot(document.getElementById('cube-box'));
cube_boxs.render(<Cube />);