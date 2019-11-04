import React, { Component } from "react";
import DevProjects from "./components/DevProjects";
import SceneThree from "./components/SceneThree";
import titleImg from "./img/title3.png";
import whatsThis from "./img/whatsThis.png";
import downArrow from "./img/downArrow.png";
import { Link, Element } from "react-scroll";
import face from "./img/face8.png";
import youImg from "./img/youtube.png";
import linImg from "./img/linkdin.png";
import gitImg from "./img/github.png";
import emaImg from "./img/email.png";
import devImg from "./img/devpost.png";
import overview from "./img/overview.png";
import resume from "./img/resume.png";
import icoAct from "./img/icoAct.png";
import icoBlog from "./img/icoBlog.png";
import icoDot from "./img/icoDot.png";
import icoFspace from "./img/icoFspace.png";
import icoMand from "./img/icoMand.png";
import icoNew from "./img/icoNew.png";
import icoRd from "./img/icoRD.png";
import icoTweet from "./img/icoTweet.png";
import icoActAlt from "./img/icoActAlt.png";
import icoBlogAlt from "./img/icoBlogAlt.png";
import icoDotAlt from "./img/icoDotAlt.png";
import icoFspaceAlt from "./img/icoFspaceAlt.png";
import icoMandAlt from "./img/icoMandAlt.png";
import icoNewAlt from "./img/icoNewAlt.png";
import icoRdAlt from "./img/icoRDAlt.png";
import icoTweetAlt from "./img/icoTweetAlt.png";
import devProjects from "./img/devProjects.png";
import projects from "./img/projects.png";
import aboutMe from "./img/aboutMe.png";
import "./App.css";
const devImages = [
  icoAct,
  icoBlog,
  icoDot,
  icoFspace,
  icoMand,
  icoNew,
  icoRd,
  icoTweet
];
const devImagesAlt = [
  icoActAlt,
  icoBlogAlt,
  icoDotAlt,
  icoFspaceAlt,
  icoMandAlt,
  icoNewAlt,
  icoRdAlt,
  icoTweetAlt
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devFilter: 0
    };

    this.handleDevFilter = this.handleDevFilter.bind(this);
  }
  handleDevFilter(filterNum) {
    this.setState({ devFilter: filterNum });
  }
  render() {
    return (
      <div className="App">
        {/* Landing */}
        <div>
          <div className="topSplash">
            <SceneThree />
          </div>

          <img src={titleImg} alt="title" className="titleImg"></img>
          <div className="tooltip">
            <img src={whatsThis} alt="what" className="whatsThisImg"></img>

            <span className="tooltiptext">
              This landing page was built with three.js/webgl and react
            </span>
          </div>
          <Link
            to="intro"
            style={{ width: "100%", zIndex: "20" }}
            offset={2}
            smooth={true}
            duration={500}
          >
            <img src={downArrow} alt="arrow" className="downArrow"></img>
          </Link>
        </div>
        {/* Education/About */}
        <Element name="intro">
          <div className="main bottomBorder lilPad">
            <div className="row">
              <div className="tri centerVert">
                <p className="regularText alignRight">
                  Hi, my name is Simon. I am a student at the University of
                  Chicago studying Astrophysics and Computer Science.
                </p>
              </div>
              <div className="tri centerVert">
                <img src={face} alt="face" className="faceImg" />
              </div>
              <div className="tri centerVert">
                <div className="rowND">
                  <img src={emaImg} alt="email" className="icon" />
                  <img src={linImg} alt="linkedin" className="icon " />
                  <img src={gitImg} alt="github" className="icon " />
                  <img src={devImg} alt="devpost" className="icon" />
                  <img src={youImg} alt="youtube" className="icon " />
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element name="over">
          <div className="main bottomBorder ">
            <div className="center">
              <img src={overview} alt="overview" className="subtitleImg" />
            </div>
            <div className="row">
              <div className="overLeft">
                <a href="www.pornhub.com">
                  <img src={resume} className="resumeImg" alt="resume" />
                </a>
              </div>
              <div className="overRight">
                <p className="resumeTitle">Awards</p>
                <p>- Facebook Community Award (HackHarvard 2019)</p>
                <p>- Hacker's Spirit Award (HackHarvard 2019)</p>
                <p>- Star of Life Nominee (AMR 2019)</p>
                <p>
                  - "Top Performer" at the National Cadet Competition (CAP News
                  2017)
                </p>
                <p>- Officer of the Year (VFW 2016, 2017)</p>
                <br />
                <p className="resumeTitle">Development Proficiencies</p>
                <p>
                  Languages: Java, JavaScript, Python, PHP, Objective C, C#,
                  HTML/CSS, Git, Racket
                </p>
                <p>
                  Tools: AWS (Databases(MongoDB), EC2,S3, Gateway, Lambda,
                  Cognito), Heroku, Twitter Developer Tools, Cloudiniary, Linux
                  Systems, VS code, Chrome Extension Developer Tools, Google
                  Maps API
                </p>
                <p>
                  Libraries/Frameworks: Node.js, React.js, Django, Flask, Mocha,
                  TensorFlow, Android SDK, Open CV, Spring Boot, Three.js,
                  Numpy, MatPlotLib
                </p>
              </div>
            </div>
          </div>
        </Element>
        <Element name="dev">
          <div className="main bottomBorder">
            <div className="center">
              <img src={devProjects} alt="overview" className="subtitleImg" />
            </div>
            <div className="toolsDiv">
              <ul className="toolsUl">
                {devImages.map((name, index) => {
                  return (
                    <div>
                      <li className="toolsLi">
                        <div className="liDiv">
                          <img
                            alt={"img"}
                            style={{
                              filter:
                                this.state.devFilter === index
                                  ? "grayscale(0%)"
                                  : "grayscale(90%)"
                            }}
                            className="toolIco"
                            src={
                              this.state.devFilter === index
                                ? name
                                : devImagesAlt[index]
                            }
                            onClick={() => this.handleDevFilter(index)}
                          />
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
              <DevProjects filter={this.state.devFilter} />
            </div>
          </div>
        </Element>
        <Element name="w">
          <div className="main bottomBorder">
            <div className="center">
              <img src={projects} alt="overview" className="subtitleImg" />
            </div>
            <div className="toolsDiv">
              <ul className="toolsUl">
                {devImages.map((name, index) => {
                  return (
                    <div>
                      <li className="toolsLi">
                        <div className="liDiv">
                          <img
                            alt={"img"}
                            style={{
                              filter:
                                this.state.devFilter === index
                                  ? "grayscale(0%)"
                                  : "grayscale(90%)"
                            }}
                            className="toolIco"
                            src={
                              this.state.devFilter === index
                                ? name
                                : devImagesAlt[index]
                            }
                            onClick={() => this.handleDevFilter(index)}
                          />
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
              <DevProjects filter={this.state.devFilter} />
            </div>
          </div>
        </Element>
        <Element name="over">
          <div className="main bottomBorder ">
            <div className="center">
              <img src={aboutMe} alt="overview" className="subtitleImg" />
            </div>
            <div className="row">
              <div className="tri centerVert">
                <p className="regularText alignRight">
                  Hi, my name is Simon. I am a student at the University of
                  Chicago studying Astrophysics and Computer Science.
                </p>
              </div>
              <div className="tri centerVert">
                <img src={face} alt="face" className="faceImg" />
              </div>
              <div className="tri centerVert">
                <div className="rowND">
                  <img src={emaImg} alt="email" className="icon" />
                  <img src={linImg} alt="linkedin" className="icon " />
                  <img src={gitImg} alt="github" className="icon " />
                  <img src={devImg} alt="devpost" className="icon" />
                  <img src={youImg} alt="youtube" className="icon " />
                </div>
              </div>
            </div>
          </div>
        </Element>
        <footer>
          <p>sadasd</p>
        </footer>
      </div>
    );
  }
}

export default App;
