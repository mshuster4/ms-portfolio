import React, { Component } from "react";
import AboutContainer from "../components/AboutContainer";
import AboutCard from "../components/AboutCard";
import AboutText from "../components/AboutText";
import Button from "../components/Button";
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
                      <Row className="align-items-center">
                        <Col sm={12} lg={{ span: 4, offset: 1}} className="d-flex justify-content-center">
                          <AboutImage/>
                        </Col>
                        <Col sm={12} lg={6}>
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
                    </AboutCard>
                  </Col>
                </Row>
                <Row>
                    <Col sm={6} lg={6}>
                        <DevelopmentSkills/>
                    </Col>
                    <Col sm={6} lg={6}>
                        <DesignSkills/>
                    </Col>
                </Row>
            </AboutContainer>
        )
    }
}

export default About 