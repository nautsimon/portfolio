import React, { Component } from "react";
import bigGhana from "../img/bigGhana.png";
import bigFtc from "../img/bigFtc.png";
import bigCap from "../img/bigCap.png";
import bigFspace from "../img/bigFspace2.png";
import bigOrion from "../img/bigOrion.png";
import bigRoot from "../img/bigRoot.png";
import bigOmni from "../img/bigOmni.PNG";

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
          <p className="titleP2">RD Recicla</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigCap} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A website that uses Google Maps API to display locations in the
                Dominican Republic where one could recycle various objects. My
                first project with a legitimate client.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>ReactJs, Google Maps API, CDNs</p>
              <br />
              <a className="link" href="react">
                DevPost
              </a>{" "}
              <a className="link" href="react">
                GitHub
              </a>
            </div>
          </div>
        </div>
      );
    }
    if (filter === 4) {
      return (
        <div>
          <p className="titleP2">New Tab Chrome Extension</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigRoot} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A Chrome extension designed to facilitate productivity through
                dynamic to do lists and customizable links
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>Chrome Dev Tools, HTML DB, ReactJs</p>
              <br />
              <a className="link" href="react">
                DevPost
              </a>{" "}
              <a className="link" href="react">
                GitHub
              </a>
            </div>
          </div>
        </div>
      );
    }
    if (filter === 3) {
      return (
        <div>
          <p className="titleP2">Fractal Renderer</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigOmni} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A navigatable fractal renderer for both julia and mandelbrot
                sets.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>Matplotlib, Numpy, Cuda python</p>
              <br />
              <a className="link" href="react">
                DevPost
              </a>{" "}
              <a className="link" href="react">
                GitHub
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
          <p className="titleP2">F[Space]</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigGhana} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A website for a makerspace meetup group. Backend api to collect
                emails for a mailing list into a mongoDB instance on aws.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>Three.js, reactjs, mongoDB, AWS Lambda/API Gateway</p>
              <br />
              <a className="link" href="react">
                DevPost
              </a>{" "}
              <a className="link" href="react">
                GitHub
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
          <p className="titleP2">Microdot</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigFtc} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A simple and secure chat room submitted to UMBC's 2017
                hackathon.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>Nodejs, Express</p>
              <br />
              <a className="link" href="react">
                DevPost
              </a>{" "}
              <a className="link" href="react">
                GitHub
              </a>
            </div>
          </div>
        </div>
      );
    }
    //photography
    else {
      return (
        <div>
          <p className="titleP2">Act Now</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigOrion} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                Act now is a chrome extension that notifies the user of nearby
                activisim related events.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>
                PhotoShop, Django REST Framework, ReactJs, Chrome Developer
                tools
              </p>
              <br />
              <a className="link" href="react">
                DevPost
              </a>{" "}
              <a className="link" href="react">
                GitHub
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
    return <div className="toolComponentDiv">{output}</div>;
  }
}
export default Projects;
