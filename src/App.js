import React, { Component}  from 'react';
import { Route, Switch } from "react-router-dom";
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



class App extends Component {

  state = {
    currentPage: "Landing"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {

    if (this.state.currentPage === "Landing") {
      return <Landing/>;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "About") {
      return <About/>
    } else {
      return <Contact/>
    }

  }

  render() {
  return (
       <div className="page-content">
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>

    );
  }

}

export default App;
