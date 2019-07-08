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
            <Container className="landing-container d-flex flex-column">
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={5}>
                    <Animated className="text-animation" animationIn="fadeIn" animationInDelay={1000} isViibile={true}>
                        <h1 className="h1-responsive landing-text">Hello.</h1>
                    </Animated>
                    <Animated className="text-animation" animationIn="fadeIn" animationInDelay={2000} isViibile={true}>
                        <h1 className="h1-responsive landing-text">My name is Marguerite Shuster.</h1>
                    </Animated>
                    <Animated className="text-animation" animationIn="fadeIn" animationInDelay={3000} isViibile={true}>
                        <h1 className="h1-responsive landing-text">I am a Web Developer and UI Designer.</h1>
                    </Animated>
                    <Animated className="text-animation" animationIn="fadeIn" animationInDelay={4000} isViibile={true}>
                        <button className="landing-text portfolio-button">View Portfolio</button>
                    </Animated>
                </Col> 
                <Col></Col>
              </Row>
              <Row>
                <Col xs={12}>
                    <div className="bg-image"></div>
                </Col>
              </Row>
            </Container>
        )
    }

}

export default Landing