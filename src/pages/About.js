import React, { Component } from "react";
import AboutContainer from "../components/AboutContainer";
import AboutText from "../components/AboutText";
import AboutImage from "../components/AboutImage"
import DevelopmentSkills from "../components/DevelopmentSkills";
import { Row, Col, Container } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <AboutContainer>
                <Row>
                    <Col sm={3}>
                        <AboutImage/>
                    </Col>
                    <Col sm={9}>
                        <AboutText/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <DevelopmentSkills/>
                    </Col>
                    <Col sm={6}>
                        <h3>My Skills</h3>
                    </Col>
                </Row>
            </AboutContainer>
        )
    }
}

export default About 