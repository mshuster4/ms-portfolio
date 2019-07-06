import React, { Component } from "react";
import AboutContainer from "../components/AboutContainer";
import AboutCard from "../components/AboutCard";
import AboutText from "../components/AboutText";
import AboutButton from "../components/AboutButton";
import AboutImage from "../components/AboutImage"
import DevelopmentSkills from "../components/DevelopmentSkills";
import DesignSkills from "../components/DesignSkills"
import { Row, Col } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <AboutContainer>
                <Row>
                  <Col sm={12}>
                    <AboutCard>
                      <Row>
                        <Col sm={12} lg={{ span: 4, offset: 1}}>
                          <AboutImage/>
                        </Col>
                        <Col sm={12} lg={6}>
                          <AboutText/>
                            <Row>
                                <Col sm={12} md={4}>
                                    <AboutButton text="Say Hello"/>
                                </Col>
                                <Col sm={12} md={4}>
                                    <AboutButton text="Read Resume"/>
                                </Col>
                                <Col sm={12} md={4}>
                                    <AboutButton text="See Portfolio"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={1}></Col>
                      </Row>
                    </AboutCard>
                  </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={6}>
                        <DevelopmentSkills/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <DesignSkills/>
                    </Col>
                </Row>
            </AboutContainer>
        )
    }
}

export default About 