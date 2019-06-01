import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import giftasticPreview from "../../assets/page-images/giftastic.png";
import blockPreview from "../../assets/page-images/block-party.png";
import friendPreview from "../../assets/page-images/friend-finder.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

class JavascriptPortfolio extends Component {
    render() {
        return(
            <Container>
                <Row>
                    <Col sm={4}>
                        <Flippy
                            flipOnHover={true}
                            flipDirection="horizontal"
                        >
                            <FrontSide>
                                <Card.Img className="img-fluid" src={giftasticPreview} alt="giftastic-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center">Entertainment app for finding and downloading Gifs.</p>
                                <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Giftastic/"><p>Launch Giftastic <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Giftastic" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col sm={4}>
                     <Flippy
                            flipOnHover={true}
                            flipDirection="horizontal"
                        >
                            <FrontSide>
                                <Card.Img className="img-fluid" src={blockPreview} alt="block-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center"> Neighborhood forum for buying, selling, and posting events.</p>
                                <a rel="noopener noreferrer" className="text-center" href="https://blockpartyucsd.herokuapp.com/"><p>Launch Block Party <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Block-Party" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col sm={4}>
                         <Flippy
                            flipOnHover={true}
                            flipDirection="horizontal"
                        >
                            <FrontSide>
                                <Card.Img className="img-fluid" src={friendPreview} alt="friend-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center">Social app for finding friends.</p>
                                 <a rel="noopener noreferrer" className="text-center" href="https://calm-springs-34430.herokuapp.com/"><p>Launch Friend Finder <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Friend-Finder" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default JavascriptPortfolio;
