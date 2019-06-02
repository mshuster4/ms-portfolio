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
                    <Col sm={12}>
                        <Animated animationIn="fadeIn" animationInDelay={1000} isViibile={true}>
                            <p className="text-center">Hello.</p>
                        </Animated>
                    </Col>
                    <Col sm={12}>
                        <Animated animationIn="fadeIn" animationInDelay={2000} isViibile={true}>
                            <p className="text-center">My name is Marguerite Shuster.</p>
                         </Animated>
                    </Col>
                    <Col sm={12}>
                        <Animated animationIn="fadeIn" animationInDelay={3000} isViibile={true}>
                            <p className="text-center">I am a Web Developer and UI Designer.</p>
                        </Animated>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default Landing