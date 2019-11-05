import React, { Component } from "react";
import { Link, Element } from "react-scroll";

import DevProjects from "./components/DevProjects";
import SceneThree from "./components/SceneThree";

import titleImg from "./img/title4.png";
import whatsThis from "./img/whatsThis.png";
import downArrow from "./img/downArrow.png";
import face from "./img/face12.png";

import youImg from "./img/youtube.png";
import linImg from "./img/linkdin.png";
import gitImg from "./img/github.png";
import bloImg from "./img/blog.png";
import devImg from "./img/devpost.png";

import resume from "./img/resume.png";
import uchicago from "./img/uchicago.jpg";
import resumeAlt from "./img/resumeAlt.png";
import bike from "./img/bike2.jpg";

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

import cap from "./img/cap.png";
import first from "./img/first.png";
import ghana from "./img/ghana.png";
import omnitech from "./img/omnitech.png";
import orion from "./img/orion.png";
import root from "./img/root.png";

import capAlt from "./img/capAlt.png";
import firstAlt from "./img/firstAlt.png";
import ghanaAlt from "./img/ghanaAlt.png";
import omnitechAlt from "./img/omnitechAlt.png";
import rootAlt from "./img/rootAlt.png";
import orionAlt from "./img/orionAlt.png";

import overview from "./img/overview3.png";
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
const Images = [orion, first, ghana, omnitech, root, cap];
const ImagesAlt = [orionAlt, firstAlt, ghanaAlt, omnitechAlt, rootAlt, capAlt];

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
                  Hi, my name is Simon. I'm a currently studying Astrophysics
                  and Computer Science at the University of Chicago studying .
                </p>
              </div>
              <div className="tri centerVert">
                <img src={face} alt="face" className="faceImg" />
              </div>
              <div className="tri centerVert">
                <div className="rowND">
                  <a href="https://cookedcorn.casa/bike">
                    <img src={bloImg} alt="email" className="icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/simonmahns">
                    <img src={linImg} alt="linkedin" className="icon " />
                  </a>
                  <a href="https://github.com/simonmahns">
                    <img src={gitImg} alt="github" className="icon " />
                  </a>
                  <a href="https://devpost.com/simonmahns?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
                    <img src={devImg} alt="devpost" className="icon" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCF0aMNDCAR9EBaDjbS0jjaQ">
                    <img src={youImg} alt="youtube" className="icon " />
                  </a>
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

            <div className="row bottomPad">
              <div className="bi">
                <p className="titleP">Work Experience</p>

                <p>
                  Research Assistant{" "}
                  <i>at The Harris School of Public Policy (2019)</i>
                </p>

                <p>
                  EMT <i>at American Medical Response (2018-2019)</i>
                </p>

                <p>
                  Math Instructor <i>at Mathnasium (2018)</i>
                </p>

                <p>
                  Waiter/Bartender <i>at Cazbar (2018)</i>
                </p>
                <p>
                  Data Science Intern <i>at JPAL (2017)</i>
                </p>

                <p>
                  Intern<i> at Ampersand (2019)</i>
                </p>
              </div>
              <div className="bi">
                <p className="titleP alignRight">Education</p>
                <div className="row bottomPad">
                  <div className="overRight alignRight">
                    <i>Computer Science/Astrophysics</i>
                    <p>Class of 2023</p>
                    <p>GPA: 4.0</p>
                  </div>
                  <div className="overLeft centerVert">
                    <img src={uchicago} className="uchiImg" alt="resume" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="overLeft centerVert">
                <div className="liDiv">
                  <img
                    src={resumeAlt}
                    className="resumeImgAlt"
                    alt="resumeAlt"
                  />
                  <a href="https://www.pornhub.com/">
                    <img src={resume} className="resumeImg" alt="resume" />
                  </a>
                </div>
              </div>
              <div className="overRight">
                <p className="titleP">Awards</p>
                <p>- Facebook Community Award (HackHarvard 2019)</p>
                <p>- Hacker's Spirit Award (HackHarvard 2019)</p>
                <p>- Star of Life Nominee (AMR 2019)</p>
                <p>
                  - "Top Performer" at the National Cadet Competition (CAP News
                  2017)
                </p>
                <p>- Officer of the Year (VFW 2016, 2017)</p>
                <br />
                <p className="titleP">Development Proficiencies</p>
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
                    <div className="outerDiv">
                      <li className="toolsLi">
                        <div className="liDiv">
                          <img
                            alt={"img"}
                            style={{
                              opacity:
                                this.state.devFilter === index ? "1" : "0"
                            }}
                            className="toolIco"
                            src={name}
                          />
                          <img
                            alt={"img"}
                            style={{
                              opacity:
                                this.state.devFilter === index ? "0" : "1"
                            }}
                            className="grey"
                            src={devImagesAlt[index]}
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
                {Images.map((name, index) => {
                  return (
                    <div className="outerDiv">
                      <li className="toolsLi">
                        <div className="liDiv">
                          <img
                            alt={"img"}
                            style={{
                              opacity:
                                this.state.devFilter === index ? "1" : "0"
                            }}
                            className="toolIco"
                            src={name}
                          />
                          <img
                            alt={"img"}
                            style={{
                              opacity:
                                this.state.devFilter === index ? "0" : "1"
                            }}
                            className="grey"
                            src={ImagesAlt[index]}
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
          <div className="main bottomBordered ">
            <div className="center">
              <img src={aboutMe} alt="overview" className="subtitleImg" />
            </div>

            <div className="row">
              <div className="tri ">
                <p className="regularText ">
                  <p className="titleP">Fun Facts:</p>
                  - Bears can run up to 37 mph
                  <br />
                  - I was born in Alaska.
                  <br />- Both of my parents are immigrants, from Japan and
                  Chile.
                  <br />- All the matter that makes up the human race could fit
                  in a sugar cube.
                  <br /> - I attended three different high schools.
                  <br />- Because of gravitational time dilation, time travels
                  slower in your basement than in your living room.
                  <br />- Cranberry juice helps prevent UTIs.
                </p>
              </div>
              <div className="tri ">
                <p className="titleP">My super cool and epic bike trek:</p>
                <img src={bike} alt="bike" className="bikeImg" />
                <p className="regularText">
                  Over the summer I completed a solo and self supported bike
                  trip from Baltimore, Maryland to Anchorage, Alaska.
                  <a href="https://cookedcorn.casa/bike">(More About This)</a>
                </p>
              </div>
              <div className="tri centerVert">
                <p className="regularText ">
                  <p className="titleP">Contact Me:</p>
                  Email: simonm@uchicago.edu <br />
                  Discord: naut#1973
                </p>
              </div>
            </div>
          </div>
        </Element>
        <footer>
          <iframe
            src="https://gifer.com/embed/fynK"
            title="quirky"
            width="150"
            height="200"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </footer>
      </div>
    );
  }
}

export default App;
