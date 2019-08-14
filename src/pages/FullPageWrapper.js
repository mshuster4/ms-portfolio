import React, { Component, useRef, useEffect }  from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Landing from "./Landing";
import Portfolio from "./Portfolio"
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer"

const key = process.env.REACT_APP_FULLPAGE_API_KEY;

class FullPageWrapper extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    };

  render() {
    return (
        <ReactFullpage
          licenseKey={key}
          anchors={["landing", "portfolio", "about", "contact"]}
          menu={true}
          sectionsColor={["black", "white", "black", "white"]}
          scrollOverflow={true}
          fitToSection={false}
          setAutoScroll={true}
          render={({ fullpageApi, state }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <Landing/>
            </div> 
            <div className="section">
              <div className="slide">
                  <div
                    style={{
                      height: "auto",
                      overflow: "auto",
                      backgroundColor: "white",
                    }}
                  >
                      <Portfolio
                          toggle={this.props.toggle}
                          onModal={() => {fullpageApi.setAllowScrolling(false); fullpageApi.setAllowScrolling(true)}}
                      />
                  </div>
              </div>
            </div>
            <div className="section">
            <About/>
            </div>
            <div className="section">
              <div className="contact-page">
                <Contact/>
                <Footer/>
              </div>
            </div>
          </div>
        );
        }}
    
    />

    );
  }
}

export default FullPageWrapper;
