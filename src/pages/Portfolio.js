import React, { Component } from "react";
import { Row, Col } from "react-bootstrap"
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import PortfolioContainer from "../components/PortfolioContainer"
import PortfolioImage from "../components/PortfolioImage"
import PortfolioButton from "../components/PortfolioButton";
import ModalImages from "../components/ModalImages";
import ModalList from "../components/ModalList";
import blockPreview from "../assets/page-images/block-party-preview.png";
import blockScreenOne from "../assets/page-images/block-party-shot-one.png";
import blockScreenTwo from "../assets/page-images/block-party-shot-two.png";
import campPreview from "../assets/page-images/camp-preview.png";
import campScreenOne from "../assets/page-images/camp-shot-one.png";
import campScreenTwo from "../assets/page-images/camp-shot-two.png";
import readingPreview from "../assets/page-images/reading-preview.png";
import readingScreenOne from "../assets/page-images/reading-shot-one.png"
import readingScreenTwo from "../assets/page-images/reading-shot-two.png"
import friendPreview from "../assets/page-images/friend-preview.png";
import friendScreenOne from "../assets/page-images/friend-shot-one.png"
import friendScreenTwo from "../assets/page-images/friend-shot-two.png"
import brewsPreview from "../assets/page-images/brews-preview.png";
import brewsScreenOne from "../assets/page-images/brews-shot-one.png";
import brewsScreenTwo from "../assets/page-images/brews-shot-two.png";
import mongoPreview from "../assets/page-images/mongo-preview.png";
import mongoScreenOne from "../assets/page-images/mongo-shot-one.png";
import mongoScreenTwo from "../assets/page-images/mongo-shot-two.png";
import projects from "../projects.json";

class Portfolio extends Component {

  state = {
        modal: false,
        title: "",
        tagline: "",
        imageOne: "",
        imageTwo: "",
        description: "",
        role: "",
        techsUsed: ""
    }

    toggle = () => {
       console.log("clicked");
        this.setState({
        modal: !this.state.modal,
        title: projects[0].title,
        tagline: projects[0].tagline,
        imageOne: blockScreenOne,
        imageTwo: blockScreenTwo,
        description: projects[0].description,
        role: projects[0].role,
        techsUsed: projects[0].techsUsed
      
    });
  }
   
  render() {
      return (
        <PortfolioContainer>
            <Row className="align-self-center">

              <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={blockPreview}
                        alt="Block Party Preview"
                    >
                        Block Party
                        <PortfolioButton
                            onClick = {this.toggle}
                          />
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                    img={readingPreview}
                    alt="Reading Wishlist Preview"
                  >
                    Reading Wishlist
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={friendPreview}
                      alt="Friend Finder Preview"
                  >
                  Friend Finder
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={campPreview}
                        alt="Camp Wanna Preview"
                    >
                        Camp Wannagetajob
                    </PortfolioImage>

                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={brewsPreview}
                        alt="Brews Beats Preview"
                    >
                      Brews and Beats
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={mongoPreview}
                        alt="News Scraper Preview"
                    >
                      News Scraper
                    </PortfolioImage>
                </Col>
                <div>
                  <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="fluid" position="top">
                      <MDBModalHeader>
                        <h1>{this.state.title}</h1>
                        <h6>{this.state.tagline}</h6>
                      </MDBModalHeader>
                      <MDBModalBody>
                        <ModalImages
                            imageOne = {this.state.imageOne}
                            imageTwo= {this.state.imageTwo}
                        />
                      <p>{this.state.description}</p>
                      <p>{this.state.role}</p>
                      <ModalList
                          techsUsed={this.state.techsUsed}
                      />
                  </MDBModalBody>
                  <MDBModalFooter>
                  </MDBModalFooter>
                </MDBModal>
                </div>
            </Row>
        </PortfolioContainer>
      )
  }

}

export default Portfolio; 

