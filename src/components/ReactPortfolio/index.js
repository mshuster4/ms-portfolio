import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import readingPreview from "../../assets/page-images/reading-wishlist.png";
import bobPreview from "../../assets/page-images/bobs-burgers.png";
import campPreview from "../../assets/page-images/camp-wanna.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./style.css";

class ReactPortfolio extends Component {
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
                                <Card.Img className="img-fluid" src={readingPreview} alt="reading-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center">Book discovery app.</p>
                                <a rel="noopener noreferrer" className="text-center" href="https://rocky-cliffs-93730.herokuapp.com/"><p>Launch Reading Wishlist<FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Book-Search-React" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col sm={4}>
                     <Flippy
                            flipOnHover={true}
                            flipDirection="horizontal"
                        >
                            <FrontSide>
                                <Card.Img className="img-fluid" src={bobPreview} alt="bob-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center"> Bob's Burgers Memory Game.</p>
                                <a rel="noopener noreferrer" className="text-center" href="https://mshuster4.github.io/Bobs-Burgers-Memory-Game/"><p>Launch Game <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Bobs-Burgers-Memory-Game" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                    <Col sm={4}>
                         <Flippy
                            flipOnHover={true}
                            flipDirection="horizontal"
                        >
                            <FrontSide>
                                <Card.Img className="img-fluid" src={campPreview} alt="camp-screenshot"/>
                            </FrontSide>
                            <BackSide>
                                <p className="text-center">Job skills enhancing app with games and quizzes.</p>
                                 <a rel="noopener noreferrer" className="text-center" href="https://camp-wanna-mongo.herokuapp.com/"><p>Launch Camp Wannagetajob <FontAwesomeIcon icon={['fa', 'rocket']}/></p></a>
                                <a rel="noopener noreferrer" className="text-center" href="https://github.com/mshuster4/Camp-Wanna-Mongo" target="_blank"><p>Source Code <FontAwesomeIcon icon={['fab', 'github']} /></p></a>
                            </BackSide>
                        </Flippy>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ReactPortfolio;
