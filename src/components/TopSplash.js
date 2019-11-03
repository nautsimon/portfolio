import React from "react";
import SceneThree from "./SceneThree";
import "./Top.css";
import titleImg from "../img/title2.png";
import whatsThis from "../img/whatsThis.png";
import downArrow from "../img/downArrow.png";
class TopSplash extends React.Component {
  render() {
    return (
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
    );
  }
}

export default TopSplash;
