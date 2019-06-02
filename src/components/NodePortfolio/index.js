import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import wordPreview from "../../assets/page-images/word.png";
import bamazonPreview from "../../assets/page-images/bamazon.png";
import liriPreview from "../../assets/page-images/liri.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.css";

class NodePortfolio extends Component {
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
                                <Card.Img className="img-fluid" src={wordPreview} alt="word-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center">CLI word guessing game application.</p>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Word-Guess" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col sm={4}>
                     <Flippy
                            flipOnHover={true}
                            flipDirection="horizontal"
                        >
                            <FrontSide>
                                <Card.Img className="img-fluid" src={bamazonPreview} alt="bamazon-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center">CLI store front application.</p>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Bamazon" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col sm={4}>
                         <Flippy
                            flipOnHover={true}
                            flipDirection="horizontal"
                        >
                            <FrontSide>
                                <Card.Img className="img-fluid" src={liriPreview} alt="friend-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center">CLI song, movie, and concert search application.</p>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Friend-Finder" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NodePortfolio;
