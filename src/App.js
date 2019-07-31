import React, { Component}  from 'react';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import ReactFullpage from '@fullpage/react-fullpage';
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import "./index.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faRocket,
  faBookOpen
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faRocket,
  faBookOpen
);

const fullpageProps = {
  licenseKey: "8C1670EB-87A2452C-B87437C8-FD4AECCD",
  anchors: ["landing", "portfolio", "about", "contact"],
  menu: true,
  sectionsColor: ["black", "white", "black", "white"],
  callbacks: ["onLeave", "destroy", "reBuild"],
  scrollOverflow: true,
  fitToSection: false
};

 
const FullpageWrapper = () => (
    <ReactFullpage
        {...fullpageProps}
        render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi)
        
         // eslint-disable-line no-console

        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <Landing/>
            </div>
            <div className="section">
              <div className="slide">
                <div
                  style={{
                    overflow: "scroll",
                    height: 1,
                    backgroundColor: "white",
                  }}
                >
                </div>
                  <div>
                      <Portfolio
                        showModal={() =>{fullpageApi.setAllowScrolling(false); console.log("modalOn")}}
                        hiddenModal={() => {fullpageApi.setAllowScrolling(true); console.log(fullpageApi, state, "modalOff")}}
                      />
                  </div>
              </div>
            </div>
            <div className="section">
            <About/>
            </div>
              <div className="section">
              <Contact/>
              <Footer/>
            </div>
          </div>
        );
        }}
    
    />

  );

 

class App extends Component {

  render() {
    return (
      <div id="App">
        <NavBar/>
        <FullpageWrapper/>
      </div>
       
    );
  }
}


export default App;
