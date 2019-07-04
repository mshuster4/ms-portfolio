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
                  <Col sm={12}>
                    <AboutCard>
                      <Row>
                        <Col sm={{ span: 4, offset: 1}}>
                          <AboutImage/>
                        </Col>
                       <Col sm={6}>
                          <AboutText/>
                       </Col>
                       <Col sm={1}></Col>
                      </Row>
                      </AboutCard>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <DevelopmentSkills/>
                    </Col>
                    <Col>
                        <DesignSkills/>
                    </Col>
                </Row>
            </AboutContainer>
        )
    }
}

export default About 