import React, { Component } from "react";
import bigAct from "../img/bigAct.png";
import bigBlog from "../img/bigBlog.png";
import bigDot from "../img/bigDot.png";
import bigFspace from "../img/bigFspace.png";
import bigMand from "../img/bigMand.png";
import bigNew from "../img/bigNew.png";
import bigRd from "../img/bigRd.png";
import bigTweet from "../img/bigTweet.png";

class Tools extends Component {
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
    if (filter === 7) {
      return (
        <div>
          <p className="titleP2">Tweet Generator</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigTweet} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A Django and React app that generates tweet using Twitter Dev
                tools and markov chains.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>
                Twitter Dev Tools, Heroku, ReactJs, Django, Django Rest
                Framework
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
    if (filter === 6) {
      return (
        <div>
          <p className="titleP2">RD Recicla</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigRd} />
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
    if (filter === 5) {
      return (
        <div>
          <p className="titleP2">New Tab Chrome Extension</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigNew} />
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
    if (filter === 4) {
      return (
        <div>
          <p className="titleP2">Fractal Renderer</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigMand} />
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
    if (filter === 3) {
      return (
        <div>
          <p className="titleP2">F[Space]</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigFspace} />
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
    if (filter === 2) {
      return (
        <div>
          <p className="titleP2">Microdot</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigDot} />
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
    if (filter === 1) {
      return (
        <div>
          <p className="titleP2">Blog</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigBlog} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                Act now is a chrome extension that notifies the user of nearby
                activisim related events.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>CDNs, React, Map rendering</p>
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
      //react
    } else {
      return (
        <div>
          <p className="titleP2">Act Now</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigAct} />
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
export default Tools;
