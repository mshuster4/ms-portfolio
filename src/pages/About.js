import React, { Component } from "react";
import AboutContainer from "../components/AboutContainer";
import PageCard from "../components/PageCard";
import AboutText from "../components/AboutText";
import ScrollAnimation from 'react-animate-on-scroll';
import Button from "../components/Button";
import AboutImage from "../components/AboutImage"
import DevelopmentSkills from "../components/DevelopmentSkills";
import DesignSkills from "../components/DesignSkills"
import { Row, Col } from "react-bootstrap";


class About extends Component {
    render() {
        return (
           <ScrollAnimation animateIn="fadeIn">
            <AboutContainer>
                <Row>
                  <Col sm={12}>
                    <PageCard className="mb-3 about-card">
                      <Row className="align-items-center">
                        <Col sm={12} md={5} lg={{ span: 4, offset: 1}} className="d-flex justify-content-center">
                          <AboutImage/>
                        </Col>
                        <Col sm={12} md={7} lg={6}>
                          <AboutText></AboutText>
                          <Button
                            outline={true}
                            className="about-button"
                            color="black"
                          >
                            View Resume
                          </Button>
                          <Button
                            outline={true}
                            className="about-button"
                            color="black"
                          >
                            Say Hello
                          </Button>
                        </Col>
                        <Col lg={1}></Col>
                      </Row>
                    </PageCard>
                  </Col>
                </Row>
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <DevelopmentSkills/>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <DesignSkills/>
                    </Col>
                </Row>
            </AboutContainer>
           </ScrollAnimation>
        )
    }
}

export default About 