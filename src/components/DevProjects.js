import React, { Component } from "react";
import bigAct from "../img/bigAct.png";
import bigBlog from "../img/bigBlog.png";
import bigSage from "../img/bigSage.png";
import bigFspace from "../img/bigFspace.png";
import bigMand from "../img/bigMand.png";
import bigNew from "../img/bigNew.png";
import bigRd from "../img/bigRd.png";
import bigTweet from "../img/bigTweet.png";
import Fade from "react-reveal/Fade";
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
                tools and Markov Chains.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>
                Twitter Dev Tools, Heroku, ReactJs, Django, Django Rest
                Framework
              </p>
              <br />
              <a
                className="link"
                href="https://github.com/simonmahns/TweetGenerator"
              >
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
              <a className="link" href="https://rdrecicla.com/">
                Website
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
              <a className="link" href="https://github.com/simonmahns/newtab">
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
                A navigable fractal renderer for both Julia and Mandelbrot sets.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>Matplotlib, Numpy, Cuda python</p>
              <br />
              <a className="link" href="https://github.com/simonmahns/fractal">
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
          <p className="titleP2">F[Space]</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigFspace} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A website for a Makerspace meetup group. Includes an API to
                collect emails for a mailing list into a mongoDB instance on
                AWS.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>Three.js, ReactJs, MongoDB, AWS Lambda/API Gateway</p>
              <br />
              <a className="link" href="https://github.com/simonmahns/fspace">
                GitHub
              </a>
            </div>
          </div>
        </div>
      );
    }

    if (filter === 2) {
      return (
        <div>
          <p className="titleP2">Sage</p>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigSage} />
            </div>
            <div className="toolCompRight">
              <p className="titleP3">Overview</p>
              <p>
                A Fake News detector built at HackPrinceton. Detection done with
                a Keras produced model hosted on the Cloud Shell and facilitated
                by flask. NN trained with 40,000 datapoints aggregated from
                databases from the University of Victoria and Kaggle. Google NLP
                API used to provide related sites.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>
                ReactJs, Chrome Dev Tools, Flask, Keras, Google Cloud, Google
                NLP API
              </p>
              <br />
              <a
                className="link"
                href="https://devpost.com/software/sage-9b6aqh"
              >
                DevPost
              </a>{" "}
              <a className="link" href="https://github.com/simonmahns/sage">
                GitHub
              </a>
            </div>
          </div>
        </div>
      );
    }

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
                My blog. Because there are hundreds of large photos that must be
                served to each visitor I had to seek out a CDN to ensure my blog
                loaded at a reasonable speed.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>CDNs, ReactJs, Map rendering</p>
              <br />
              <a className="link" href="https://cookedcorn.casa/bike">
                Website
              </a>{" "}
              <a className="link" href="https://github.com/simonmahns/mm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      );
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
                Act Now is a Chrome extension that recommends activism events
                and organizations based on a backend analyzes of the current
                news articles and content consumed. Submitted to HackHarvard.
              </p>
              <br />
              <p className="titleP3">Skills/Tools used</p>
              <p>
                PhotoShop, Django REST Framework, ReactJs, Chrome Developer
                tools
              </p>
              <br />
              <a className="link" href="https://devpost.com/software/act-now">
                DevPost
              </a>{" "}
              <a className="link" href="https://github.com/simonmahns/act-now">
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
    return (
      <Fade spy={this.props.filter} duration={500}>
        <div className="toolComponentDiv">{output}</div>
      </Fade>
    );
  }
}
export default Tools;
