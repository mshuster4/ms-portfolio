import React, { Component } from "react";
import { Row, Col } from "react-bootstrap"
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import PortfolioContainer from "../components/PortfolioContainer"
import PortfolioImage from "../components/PortfolioImage"
import Button from "../components/Button";
import Icon from "../components/Icon";
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
  constructor(props) {
    super(props);
    
    this.state = {
          modal: false,
          title: "",
          tagline: "",
          imageOne: "",
          imageTwo: "",
          description: "",
          role: "",
          techsUsed: ""
      }
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
        <div>
        <PortfolioContainer>
            <Row>
              <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={blockPreview}
                        alt="Block Party Preview"
                    >
                      <h5 className="project-title">Block Party</h5>
                      <Button
                          onClick = {this.toggle(0)}
                          className = "portfolio-button"
                          outline={false}
                          size = "sm"

                      >
                        Learn More <Icon icon={["fas", "book-open"]} />
                      </Button>
                    </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                    img={readingPreview}
                    alt="Reading Wishlist Preview"
                  >
                    <h5 className="project-title">Reading Wishlist</h5>
                     <Button
                        onClick = {this.toggle(1)}
                         className = "portfolio-button"
                         outline={false}
                         size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={friendPreview}
                      alt="Friend Finder Preview"
                  >
                    <h5 className="project-title">Friend Finder</h5>
                      <Button
                        onClick = {this.toggle(2)}
                        className = "portfolio-button"
                        outline={false}
                        size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                    <PortfolioImage
                        img={campPreview}
                        alt="Camp Wanna Preview"
                    >
                    <h5 className="project-title">Camp Wannagetajob</h5>
                      <Button
                        onClick = {this.toggle(3)}
                        className = "portfolio-button"
                        outline={false}
                        size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={brewsPreview}
                      alt="Brews Beats Preview"
                  >
                    <h5 className="project-title">Brews <span>&#38;</span> Beats</h5>
                     <Button
                        onClick = {this.toggle(4)}
                        className = "portfolio-button"
                        outline={false}
                        size = "sm"
                      >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>

                <Col xs={12} md={6} lg={4}>
                  <PortfolioImage
                      img={mongoPreview}
                      alt="News Scraper Preview"
                  >
                    <h5 className="project-title">News Scraper</h5>
                    <Button
                      onClick = {this.toggle(5)}
                      className = "portfolio-button"
                      outline={false}
                      size = "sm"
                    >
                      Learn More <Icon icon={["fas", "book-open"]} />
                    </Button>
                  </PortfolioImage>
                </Col>
                </Row>
               </PortfolioContainer>
                    <MDBModal ref={this.targetRef} showModal={this.props.showModal} hiddenModal={this.props.hiddenModal} isOpen={this.state.modal} toggle={this.toggle(this.state.modalNumber)} size="lg" position="top">
                        <MDBModalHeader toggle={this.toggle(this.state.modalNumber)} titleClass="w-100">
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
                        <ModalList
                            techsUsed={this.state.techsUsed}
                        />
                    </MDBModalBody>
                    <MDBModalFooter className="display-flex justify-content-start">
                      <Button
                          outline={true}
                          size = "md"
                          color="black"
                          className="mt-0 mb-0"

                      >
                        Launch Demo <Icon icon={["fas", "book-open"]} />
                      </Button>
                      <Button
                          outline={true}
                          color="black"
                          size = "md"
                          className="ml-3 mt-0 mb-0"

                      >
                        View Github <Icon icon={["fab", "git-hub"]} />
                      </Button>
                    </MDBModalFooter>
                  </MDBModal>
              </div>
      )
  }

}

export default Portfolio; 

