import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBMask, MDBView, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import campPreview from "../../assets/page-images/camp-wanna-preview.png";
import readingPreview from "../../assets/page-images/reading-preview.png";
import brewsPreview from "../../assets/page-images/brews-preview.png";
import mongoPreview from "../../assets/page-images/mongo-preview.png";
import friendPreview from "../../assets/page-images/friend-preview.png";
import blockPreview from "../../assets/page-images/block-preview.png";
import blockScreenOne from "../../assets/page-images/blockparty-shot-one.png";
import blockScreenTwo from "../../assets/page-images/blockparty-shot-two.png";
import PortfolioButton from "../PortfolioButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";
 
 

class ReactPortfolio extends Component {

    state = {
        modal0: false,
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false, 
        modal6: false
    }

    toggle = num => () => {
        let modalNum = 'modal' + num
        this.setState({
            [modalNum]: !this.state[modalNum]
        });
    }

    render() {
      return(
          <Container fluid className="portfolio-container d-flex">
            <Row className="align-self-center">
              <Col xs={12} md={6} lg={4}>
                <MDBView hover>
                    <img
                        src={blockPreview}
                        className="img-fluid"
                        alt="Camp Wanna Screenshot"
                    />
                    <MDBMask overlay="white-strong" className="text-center">
                        <Row>
                            <Col sm={12}>
                                <h5 className="text-center">Block Party</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                              <PortfolioButton
                                onClick = {this.toggle(0)}
                              />
                              <a rel="noopener noreferrer" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>View Github <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                              <a rel="noopener noreferrer" href="https://mshuster4.github.io/Giftastic/"><p>Launch Demo <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                            </Col>
                        </Row>
                    </MDBMask>
                </MDBView>
              </Col>
              <Col xs={12} md={6} lg={4}> 
                <MDBView hover>
                    <img
                        src={readingPreview}
                        className="img-fluid"
                        alt="Reading Wishlist Screenshot"
                    />
                    <MDBMask overlay="white-strong">
                        <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                        <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                    </MDBMask>
                </MDBView>
              </Col>
              <Col xs={12} md={6} lg={4}> 
                <MDBView hover>
                    <img
                        src={friendPreview}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center" overlay="white-strong">
                        <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                                  <PortfolioButton
                            onClick = {this.toggle(1)}
                        />
                    </MDBMask>
                </MDBView>
              </Col>
              <Col xs={12} md={6} lg={4}> 
                <MDBView hover>
                    <img
                        src={campPreview}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center" overlay="white-strong">
                        <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                    </MDBMask>
                </MDBView>
              </Col>
              <Col xs={12} md={6} lg={4}> 
                  <MDBView hover>
                        <img
                            src={brewsPreview}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="white-strong">
                            <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                    <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                        </MDBMask>
                  </MDBView>
                </Col>
                <Col xs={12} md={6} lg={4}> 
                  <MDBView hover>
                        <img
                            src={mongoPreview}
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="white-strong">
                            <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                    <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                        </MDBMask>
                  </MDBView>
                </Col>
               </Row>
               <MDBModal size="lg" isOpen={this.state.modal0} toggle={this.toggle(0)}>
                  <MDBModalHeader toggle={this.toggle(0)}>Block Party</MDBModalHeader>
                        <MDBModalBody>
                            <Row>
                              <Col sm={12}>
                                   <MDBCarousel
                                        activeItem={1}
                                        length={2}
                                        showControls={true}
                                        showIndicators={true}
                                        className="z-depth-1"
                                    >
                                     <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                                                    alt="First slide"
                                                />
                                           </MDBView>
                                       </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                        <MDBView>
                                        <img
                                            className="d-block w-100"
                                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
                                            alt="Second slide"
                                        />
                                        </MDBView>
                                          </MDBCarouselItem>
                                        </MDBCarouselInner>
                                   </MDBCarousel>
                                     </Col>
                                    </Row>
                                </MDBModalBody>
                            <MDBModalFooter>
                    </MDBModalFooter>
              </MDBModal>
              <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
                  <MDBModalHeader toggle={this.toggle(1)}>Reading Wishlist</MDBModalHeader>
                        <MDBModalBody>
                        this is modal1
                        </MDBModalBody>
                        <MDBModalFooter>
                        </MDBModalFooter>
              </MDBModal>    
            </Container>
        );
    }
}

export default ReactPortfolio;
