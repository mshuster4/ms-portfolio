import React, { Component}  from 'react';
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
  faBookOpen,
  faArrowDown
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
  faBookOpen,
  faArrowDown
);

const key = process.env.REACT_APP_FULLPAGE_API_KEY;

const fullpageProps = {
  licenseKey: key,
  anchors: ["landing", "portfolio", "about", "contact"],
  menu: true,
  sectionsColor: ["black", "white", "black", "white"],
  callbacks: ["onLeave", "destroy", "reBuild"],
  scrollOverflow: true,
  fitToSection: true
};

 
const FullpageWrapper = () => (
    <ReactFullpage
        {...fullpageProps}
        afterReBuild= {(console.log("rebuilt"))}
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
                    height: "auto",
                    backgroundColor: "white",
                  }}
                >
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
