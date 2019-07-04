import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Animated} from "react-animated-css";
import LandingImg from "../../assets/page-images/landing-page-final.png"
import Image from 'react-bootstrap/Image'
import "./style.css"

class Landing extends Component {
    render() {
        return (
            <Container className="landing-container d-flex">
                <Row>
                    <Col xs={12} col md={6}>
                        <Animated animationIn="fadeIn" animationInDelay={1000} isViibile={true}>
                            <h2>Hello.</h2>
                        </Animated>
                        <Animated animationIn="fadeIn" animationInDelay={2000} isViibile={true}>
                            <h2>My name is Marguerite Shuster.</h2>
                        </Animated>
                        <Animated animationIn="fadeIn" animationInDelay={3000} isViibile={true}>
                            <h2>I am a Web Developer and UI Designer.</h2>
                        </Animated>
                    </Col>
                    <Col sm={12} md={6} className="d-flex">
                        <Image src={LandingImg} className="img-fluid landing-image" alt="image"></Image>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Landing