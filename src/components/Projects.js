import React, { Component } from "react";
import bigGhana from "../img/bigGhana.png";
import bigFtc from "../img/bigFtc.png";
import bigCap from "../img/bigCap.png";

import bigOrion from "../img/bigOrion.png";
import bigRoot from "../img/bigRoot.png";
import bigOmni from "../img/bigOmni.PNG";
import Fade from "react-reveal/Fade";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
  }
  handlePop(i) {
    var caption = i;
    this.visPop.show(caption);
  }
  handleFilter(filter) {
    //react
    if (filter === 5) {
      return (
        <div>
          <p className="titleP2">Civil Air Patrol</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigCap} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                While in the Civil Air Patrol I became the Cadet Commander of
                two Squadrons, the State Chair of the Alaska Cadet Advisory
                Council, and led a team to win 5 first place awards at the 2017
                National Cadet Competition - the first MD team to qualify in 15
                years.
              </p>
              <br />
              <a
                className="link"
                href="https://www.cap.news/se-region-team-from-puerto-rico-takes-national-cadet-competition-crown/"
              >
                CAP News Article
              </a>
            </div>
          </div>
        </div>
      );
    }
    if (filter === 4) {
      return (
        <div>
          <p className="titleP2">The Root Cellar</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigRoot} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                The Root Cellar is a Makerspace being built under the Root
                Accelerator on Market Street of Frederick MD. I am contributing
                to this project with previous experience helping run F[Space], a
                Makerspace meetup group where I ran various
                programming/engineering workshops 1-2 times a month. The Root
                Cellar also absorbed the remaining ORION assets at the time of
                Dissolution and currently houses a FTC team. The Root Cellar is
                set to open some time 2020.
              </p>
              <br />
            </div>
          </div>
        </div>
      );
    }
    if (filter === 3) {
      return (
        <div>
          <p className="titleP2">Omnified Technologies LLC</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigOmni} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A small LCC formed in 2017 with a fellow programmer to
                centralize our efforts. Though this LLC I have completed the
                majority of my freelance work. Dissolved in November 2019.
              </p>
              <br />

              <a className="link" href="https://omnified.tech/">
                Website
              </a>
            </div>
          </div>
        </div>
      );
    }
    //media
    if (filter === 2) {
      return (
        <div>
          <p className="titleP2">Build-a-Bot Ghana</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigGhana} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A Ghanaian STEM camp completed in 2019 in collaboration with
                Ghanian based nonprofit STEMBees. Responsible for curriculum,
                overall management, and instruction.
              </p>
              <br />
              <a
                className="link"
                href="https://photos.app.goo.gl/Rhqosyvf2RRVxxTY7"
              >
                Photos
              </a>
            </div>
          </div>
        </div>
      );
    }
    //legacy
    if (filter === 1) {
      return (
        <div>
          <p className="titleP2">Robotics</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigFtc} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                Upon moving to my third and final high school in 2016 I started
                a FIRST Tech Challenge (FTC) team. Since then I have
                participated in two seasons of FTC as the captain and chief
                engineer under the team name "The Mandelbots". For our 2018/19
                season I served as a coach. For every season we were a
                completely student run team operating under ORION, my nonprofit.
                Currently, I am mentoring Team SteamWorks, a FTC team operating
                in the Root Cellar Makerspace. I have also mentored two FIRST
                Lego League teams in Urbana, MD in 2017 and 2019
              </p>
              <br />
            </div>
          </div>
        </div>
      );
    }
    //photography
    else {
      return (
        <div>
          <p className="titleP2">
            Omnified Resources for Innovation and Cognition Corp
          </p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigOrion} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                ORION is a 501c3 I founded in High School with the initial
                purpose to fund my robotics team. With ORION I have been able
                conduct robotics camps in the Dominican Republic and GHana, help
                open a Makerspace, and support various robotics teams. ORION was
                dissolved October 2019. For a full review of activity view our
                dissolution report.
              </p>
              <br />
              <a
                className="link"
                href="https://drive.google.com/file/d/1QpibLdgkagIMpPY1efD8hUBCyqegIEWS/view?usp=sharing"
              >
                Dissolution Report
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    var filter = this.props.filter;
    var output = this.handleFilter(filter);
    return (
      <Fade spy={this.props.filter} duration={500}>
        <div className="toolComponentDiv">{output}</div>
      </Fade>
    );
  }
}
export default Projects;
