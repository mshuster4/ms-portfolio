import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import NavBar from "./components/NavBar";
import Landing from "./pages/Landing";
import Portfolio from "./pages/Portfolio"
import About from "./pages/About";
import Contact from "./pages/Contact";
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
)



class App extends Component {


  render() {
    return (
      <div>
        <NavBar/>
        <Landing/>
        <Portfolio/>
        <About/>
        <Contact/>
      </div>
    );
  }
}



export default App;
