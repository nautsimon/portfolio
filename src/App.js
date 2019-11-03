import React from "react";
import MainSec from "./components/MainSec";
import SceneThree from "./components/SceneThree";
import titleImg from "./img/title2.png";
import whatsThis from "./img/whatsThis.png";
import downArrow from "./img/downArrow.png";
import "./App.css";
//https://codepen.io/enesser/pen/jdenE
//https://codepen.io/guillaumerxl/pen/pjbYoB
//https://codepen.io/kenjiSpecial/pen/wavooR

//https://tympanus.net/codrops/2019/01/17/interactive-particles-with-three-js/
function App() {
  return (
    <div className="App">
      {/* Landing Page */}
      <div>
        <div className="topSplash">
          <SceneThree />
        </div>

        <img src={titleImg} alt="title" className="titleImg"></img>
        <div className="tooltip">
          <img src={whatsThis} alt="what" className="whatsThisImg"></img>
          <span className="tooltiptext">
            This pretty cool landing page was built with three.js/webgl and
            react
          </span>
        </div>
        <img src={downArrow} alt="arrow" className="downArrow"></img>
      </div>

      <MainSec />
    </div>
  );
}

export default App;
