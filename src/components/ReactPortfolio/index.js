import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { MDBMask, MDBView } from "mdbreact";
import campPreview from "../../assets/page-images/camp-wanna-preview.png";
import readingPreview from "../../assets/page-images/reading-preview.png";
import brewsPreview from "../../assets/page-images/brews-preview.png";
import mongoPreview from "../../assets/page-images/mongo-preview.png";
import friendPreview from "../../assets/page-images/friend-preview.png";
import blockPreview from "../../assets/page-images/block-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";


class ReactPortfolio extends Component {

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
                    <MDBMask className="flex-center" overlay="white-strong">
                        <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
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
                    <MDBMask className="flex-center" overlay="white-strong">
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
            </Container>
        );
    }
}

export default ReactPortfolio;
