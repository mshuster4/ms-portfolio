import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import ReactPortfolio from "./components/ReactPortfolio";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faRocket
)



class App extends Component {
  render() {
  return (
      <div>
        <NavBar></NavBar>
        <ReactPortfolio></ReactPortfolio>
      </div>
    );
  }

}

export default App;
