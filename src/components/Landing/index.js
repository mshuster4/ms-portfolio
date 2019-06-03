import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css"
import {Animated} from "react-animated-css";

class Landing extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={7}>
                        <div className="landing-text">
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
                    <Col sm={5}>
                        <div class="bg-image"></div>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Landing