import React, { Component}  from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
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



class App extends Component {
  render() {
  return (
      <div className="page-content">
        <NavBar/>
        <Landing/>
      </div>
    );
  }

}

export default App;
