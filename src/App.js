import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio"
import About from "./pages/About";
import Contact from "./pages/Contact";
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
)


const SCROLL_KEY = process.env.FULLPAGE_SCROLL;


class App extends Component {

 onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
    console.log(SCROLL_KEY);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <div>
      <NavBar/>
      <ReactFullpage
        licenseKey = {SCROLL_KEY}
        scrollOverflow={true}
        sectionsColor={["white", "white", "white", "white"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <Landing/>
              </div>
              <div className="section scrollable-content">
                <Portfolio/>
              </div>
              <div className="section scrollable-content">
                <About/>
              </div>
              <div className="section">
                <Contact/>
              </div>
            </div>
          );
        }}
      />
      </div>
    );
  }
}



export default App;
