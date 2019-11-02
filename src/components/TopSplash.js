import React from "react";
import SceneThree from "./SceneThree";
import "./Top.css";
import titleImg from "./prfosized.png";
class TopSplash extends React.Component {
  render() {
    return (
      <div>
        <div className="stretch">
          <SceneThree />
        </div>
        <div className="comingSoonDiv">
          <img src={titleImg} alt="title" className="titleImg"></img>
        </div>
      </div>
    );
  }
}

export default TopSplash;
