import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Portfolio from "./pages/Portfolio"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"
import Landing from "./pages/Landing"
import PageModal from "./pages/PageModal"
import blockScreenOne from "./assets/page-images/block-party-shot-one.png";
import blockScreenTwo from "./assets/page-images/block-party-shot-two.png";
import campScreenOne from "./assets/page-images/camp-shot-one.png";
import campScreenTwo from "./assets/page-images/camp-shot-two.png";
import readingScreenOne from "./assets/page-images/reading-shot-one.png"
import readingScreenTwo from "./assets/page-images/reading-shot-two.png"
import friendScreenOne from "./assets/page-images/friend-shot-one.png"
import friendScreenTwo from "./assets/page-images/friend-shot-two.png"
import brewsScreenOne from "./assets/page-images/brews-shot-one.png";
import brewsScreenTwo from "./assets/page-images/brews-shot-two.png";
import mongoScreenOne from "./assets/page-images/mongo-shot-one.png";
import mongoScreenTwo from "./assets/page-images/mongo-shot-two.png";
import projects from "./projects.json";
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


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      tagline: "",
      description: "",
      role: "",
      imageOne: "",
      imageTwo: "",
      techsUsed: [],
    }
    console.log(this.props)
    this.toggle.bind(this);
    this.onCloseModal.bind(this);
  }
 
toggle = (num) => {


  if (num === 0) {
    this.setState({ 
        modal: true,
        title: projects[0].title,
        tagline: projects[0].tagline,
        imageOne: blockScreenOne,
        imageTwo: blockScreenTwo,
        description: projects[0].description,
        role: projects[0].role,
        techsUsed: projects[0].techsUsed
      });
  }

  else if (num === 1) {
      this.setState({
          modal: true,
          title: projects[1].title,
          tagline: projects[1].tagline,
          imageOne: readingScreenOne,
          imageTwo: readingScreenTwo,
          description: projects[1].description,
          techsUsed: projects[1].techsUsed
      })
  }
  
  else if (num === 2) {
    this.setState({ 
        modal: true,
        title: projects[2].title,
        tagline: projects[2].tagline,
        imageOne: friendScreenOne,
        imageTwo: friendScreenTwo,
        description: projects[2].description,
        techsUsed: projects[2].techsUsed
      });
  }

  else if (num === 3) {
    this.setState({
        modal: true,
        title: projects[3].title,
        tagline: projects[3].tagline,
        imageOne: campScreenOne,
        imageTwo: campScreenTwo,
        description: projects[3].description,
        role: projects[3].role,
        techsUsed: projects[3].techsUsed
    })
  }

  else if (num === 4) {
    this.setState({
        modal: true,
        title: projects[4].title,
        tagline: projects[4].tagline,
        imageOne: brewsScreenOne,
        imageTwo: brewsScreenTwo,
        description: projects[4].description,
        role: projects[4].role,
        techsUsed: projects[4].techsUsed,
    })
  }

  else if (num === 5) {
    this.setState({
        modal: true,
        title: projects[5].title,
        tagline: projects[5].tagline,
        imageOne: mongoScreenOne,
        imageTwo: mongoScreenTwo,
        description: projects[5].description,
        techsUsed: projects[5].techsUsed
    })
  }
};

  onCloseModal = () => {

    this.setState({ 
      modal: false,
      title: "",
      tagline: "",
      description: "",
      role: "",
      imageOne: "",
      imageTwo: "",
      techsUsed: []
    });

};


  render() {
    return (
      <div>
       <NavBar/>
       <Landing/>
       <div>
          <PageModal
            show={this.state.modal}
            onHide={this.onCloseModal}
            title={this.state.title}
            tagline={this.state.tagline}
            imageOne={this.state.imageOne}
            imageTwo={this.state.imageTwo}
            description={this.state.description}
            role={this.state.role}
            techsUsed={this.state.techsUsed}
          />
       </div>
       <Portfolio
         toggle={(num) => this.toggle(num)}
       />
       <About/>
       <Contact/>
       <Footer/>
    </div>

    );
  }
}

export default App;
