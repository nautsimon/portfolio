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
          <h2>misc.</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigTweet} />
            </div>
            <div className="toolCompRight">
              <p>
                The aforementioned tools and capabilities of our team are simply
                the foundation of the expansive array of proficiencies that our
                developers have experience in. If you have a specific API,
                Library, framework, etc. that you would prefer for us to use,
                let us know and we will be happy to comply.
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (filter === 6) {
      return (
        <div>
          <h2>misc.</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigRd} />
            </div>
            <div className="toolCompRight">
              <p>
                The aforementioned tools and capabilities of our team are simply
                the foundation of the expansive array of proficiencies that our
                developers have experience in. If you have a specific API,
                Library, framework, etc. that you would prefer for us to use,
                let us know and we will be happy to comply.
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (filter === 5) {
      return (
        <div>
          <h2>misc.</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigNew} />
            </div>
            <div className="toolCompRight">
              <p>
                The aforementioned tools and capabilities of our team are simply
                the foundation of the expansive array of proficiencies that our
                developers have experience in. If you have a specific API,
                Library, framework, etc. that you would prefer for us to use,
                let us know and we will be happy to comply.
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (filter === 4) {
      return (
        <div>
          <h2>Analytics</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigMand} />
            </div>
            <div className="toolCompRight">
              <p>
                We use a combination of Google Analytics and our own "homemade"
                analytics application to evaluate our sites. With these tools we
                provide you with the data that you want about your application.
                <br />
                <br />
                Learn more about <a href="react">Google Analytics</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    //media
    if (filter === 3) {
      return (
        <div>
          <h2>IOS</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigFspace} />
            </div>
            <div className="toolCompRight">
              <p>
                We all know someone that has a "great app idea". If you're
                serious about yours, we are here for you. We can deliver a
                professional App Store ready application promptly.
                <br />
                <br />
                Learn more about <a href="react">App store development</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    //legacy
    if (filter === 2) {
      return (
        <div>
          <h2>Cross Compatibility</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigDot} />
            </div>
            <div className="toolCompRight">
              <p>
                Nothing is more frustrating than navigating to a website on your
                phone to find that "it doesn't work on mobile". Our developers
                are dedicated to making sure that your application runs, looks,
                and communicates its intended message regardless of browser or
                device it is visited on. Furthermore, we pay attention to the
                details, ensuring every pixel is styled perfectly.
                <br />
                <br />
                Learn more about <a href="react">Cross Compatibility</a>
              </p>
            </div>
          </div>
        </div>
      );
    }
    //photography
    if (filter === 1) {
      return (
        <div>
          <h2>AWS</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigBlog} />
            </div>
            <div className="toolCompRight">
              <p>
                Amazon Web Services (AWS) is a tool of vast proportions. From
                everything from databases to APIs to VR, AWS has it. We
                primarily use AWS for hosting and creating our backends due to
                the security and scalability that it offers.
                <br />
                <br />
                Learn more about <a href="react">AWS</a>
              </p>
            </div>
          </div>
        </div>
      );
      //react
    } else {
      return (
        <div>
          <h2>React Js</h2>
          <div className="toolCompDiv">
            <div className="toolCompLeft">
              <img className="toolCompImg" alt="toolCompImg" src={bigAct} />
            </div>
            <div className="toolCompRight">
              <p>
                React Js is a cutting edge javascript library developed by
                Facebook that utilizes a virtual DOM in order to expedite
                loading times and optimize the website. Also, because react js
                facilitates the inline use of html in javascript files, frontend
                development comes first. With React we create fast and beautiful
                websites.
                <br />
                <br />
                Learn more about <a href="react">React Js</a>
              </p>
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
