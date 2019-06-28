import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Animated} from "react-animated-css";
import "./style.css"

class Landing extends Component {
    render() {
        return (
            <Container fluid={true} className="landing-container">
                <Row>
                    <Col md={4} lg={6}>
                        <div className="landing-text text-left">
                            <Animated animationIn="fadeIn" animationInDelay={1000} isViibile={true}>
                                <p>Hello.</p>
                            </Animated>
                            <Animated animationIn="fadeIn" animationInDelay={2000} isViibile={true}>
                                <p>My name is Marguerite Shuster.</p>
                            </Animated>
                            <Animated animationIn="fadeIn" animationInDelay={3000} isViibile={true}>
                                <p>I am a Web Developer and UI Designer.</p>
                            </Animated>
                        </div>
                    </Col>
                    <Col md={8} lg={6}>
                      <div className="bg-image"></div>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        )
    }

}

export default Landing