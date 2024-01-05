---
title: 魔方OLL公式
author: rainsin
date: 2023-12-28 11:32:10 +0800
categories: [魔方]
tags: [魔方, OLL]
pin: false
math: false
react: true
mermaid: false
video: false
music: false
cube: true
babel: true

mathpolt: false
jquery: false

image:
  path: https://photo.rainsin.cn:2000/LightPicture/2023/12/abe08e59721f7edf.png
  alt: OLL

permalink: /src/cube/oll/
---

<script src="alg.js"></script>

<div id="cube"></div>

<script type="module">
import { TwistyPlayer } from "https://cdn.cubing.net/js/cubing/twisty";
window.Twistyplayer = TwistyPlayer;
</script>

<script type="text/babel" >
function CubeState({alg}) {
  const player = new Twistyplayer({
  alg: alg,
  visualization: "experimental-2D-LL",
  experimental-stickering: "OLL",
  background: "none",
  control-panel: "none",
  experimental-setup-anchor: "end",
});
  return (
    <div>
      {player}
    </div>
  );
}
function Cubing({alg}) {

  return (
    <twisty-player
      experimental-setup-anchor="end"
      alg={alg}
      back-view="top-right"
      background="none">
      
    </twisty-player>
  );
};

function CubeItem({type,obj}){
    const item = obj.map( a =>  (
        <div className="cube-alg-detail">
          <div className="cube-alg-tu">
            <div className="cube-alg-tu-box">
            <CubeState alg={a.alg}/>
            </div>
          </div>
          <div className="cube-alg-title">
            {a.name}
          </div>
          <div className="cube-alg-move">
            <Cubing alg={a.alg}/>
          </div>
          <div className="cube-alg-formal">
            {a.alg}
          </div>
        </div>
      ));
    return (
      <div>
        <div className="cube-alg-type">
        {type.name} [{type.count}]
        </div>
        {item}
      </div>
    )
};

function Cube() {
  const list = alg.map( (a,i) => <CubeItem type={typealg[i]} obj={a} />);
  return (
    <div className="cube-item">{list}</div>
  );
}
</script>

<script name="app" type="text/babel">
    class App extends React.Component {
      render() {
        return <div className="container">
            <Cube/>
        </div>;
      }
    }
  </script>

  <script name="index" type="text/babel">
    ReactDOM.render(<App />, document.getElementById('cube'));
  </script>

<link rel="stylesheet" href="oll.css">