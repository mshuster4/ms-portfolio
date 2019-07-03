import React, { Component } from "react";
import AboutContainer from "../components/AboutContainer";
import AboutCard from "../components/AboutCard";
import AboutText from "../components/AboutText";
import AboutImage from "../components/AboutImage"
import DevelopmentSkills from "../components/DevelopmentSkills";
import DesignSkills from "../components/DesignSkills"
import { Row, Col, Container } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <AboutContainer>

                <Row>
                    <Col sm={4}>
                        <AboutImage/>
                    </Col>
                    <Col sm={8}>
                        <AboutText/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <DevelopmentSkills/>
                    </Col>
                    <Col sm={6}>
                        <DesignSkills/>
                    </Col>
                </Row>
            </AboutContainer>
        )
    }
}

export default About 