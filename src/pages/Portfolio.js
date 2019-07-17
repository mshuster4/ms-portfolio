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

    toggle = modalNumber => () => {
    
        if (modalNumber === 0) {
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

      else if (modalNumber === 1) {
          this.setState({
            modal: !this.state.modal,
            title: projects[1].title,
            tagline: projects[1].tagline,
            imageOne: readingScreenOne,
            imageTwo: readingScreenTwo,
            description: projects[1].description,
            role: projects[1].role,
            techsUsed: projects[1].techsUsed
        });
      }

      else if (modalNumber === 2) {
        this.setState({
            modal: !this.state.modal,
            title: projects[2].title,
            tagline: projects[2].tagline,
            imageOne: friendScreenOne,
            imageTwo: friendScreenTwo,
            description: projects[2].description,
            role: projects[2].role,
            techsUsed: projects[2].techsUsed
        });
      }

      else if (modalNumber === 3) {
          this.setState({
            modal: !this.state.modal,
            title: projects[3].title,
            tagline: projects[3].tagline,
            imageOne: campScreenOne,
            imageTwo: campScreenTwo,
            description: projects[3].description,
            role: projects[3].role,
            techsUsed: projects[3].techsUsed
        });
      }

      else if (modalNumber === 4) {
          this.setState({
            modal: !this.state.modal,
            title: projects[4].title,
            tagline: projects[4].tagline,
            imageOne: brewsScreenOne,
            imageTwo: brewsScreenTwo,
            description: projects[4].description,
            role: projects[4].role,
            techsUsed: projects[4].techsUsed
        });
      }

      else {
          this.setState({
            modal: !this.state.modal,
            title: projects[5].title,
            tagline: projects[5].tagline,
            imageOne: mongoScreenOne,
            imageTwo: mongoScreenTwo,
            description: projects[5].description,
            role: projects[5].role,
            techsUsed: projects[5].techsUsed
        });
      }
    }
   
  render() {
      return (
        <PortfolioContainer>
            <Row>
              <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={blockPreview}
                        alt="Block Party Preview"
                    >
                      <h5>Block Party</h5>
                      <PortfolioButton
                          onClick = {this.toggle(0)}
                        />
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                    img={readingPreview}
                    alt="Reading Wishlist Preview"
                  >
                    <h5>Reading Wishlist</h5>
                     <PortfolioButton
                        onClick = {this.toggle(1)}
                      />
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={friendPreview}
                      alt="Friend Finder Preview"
                  >
                    <h5>Friend Finder</h5>
                      <PortfolioButton
                        onClick = {this.toggle(2)}
                      />
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={campPreview}
                        alt="Camp Wanna Preview"
                    >
                    <h5>Camp Wannagetajob</h5>
                      <PortfolioButton
                        onClick = {this.toggle(3)}
                      />
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={brewsPreview}
                      alt="Brews Beats Preview"
                  >
                    <h5>Brews and Beats</h5>
                     <PortfolioButton
                        onClick = {this.toggle(4)}
                      />
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={mongoPreview}
                      alt="News Scraper Preview"
                  >
                    <h5>News Scraper</h5>
                    <PortfolioButton
                      onClick = {this.toggle(5)}
                    />
                  </PortfolioImage>
                </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle(0)} size="lg" position="top">
                        <MDBModalHeader toggle={this.toggle(0)} titleClass="w-100">
                          <h1>{this.state.title}</h1>
                          <h6 className="modal-tag"><i>{this.state.tagline}</i></h6>
                        </MDBModalHeader>
                        <MDBModalBody>
                          <ModalImages
                              imageOne = {this.state.imageOne}
                              imageTwo= {this.state.imageTwo}
                          />
                        <p>{this.state.description}</p>
                        <p>{this.state.role}</p>
                    </MDBModalBody>
                    <MDBModalFooter className="d-flex justify-content-start">
                      <ModalList
                            techsUsed={this.state.techsUsed}
                        />
                    </MDBModalFooter>
                  </MDBModal>
                  </Col>
              </Row>
        </PortfolioContainer>
      )
  }

}

export default Portfolio; 

