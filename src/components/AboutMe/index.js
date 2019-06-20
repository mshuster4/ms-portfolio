import React, { Component } from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import Headshot from "../../assets/page-images/headshot.jpg";


class AboutMe extends Component {
    render() {
        return (
            <Container>
              <Row>
              <Col sm={6}>
                  <h2>My Story</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Non consectetur a erat nam at lectus urna duis. At auctor urna nunc id. 
                    Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.
                  </p>                    
                </Col>
                <Col sm={6}>
                  <h2>My Skills</h2>
                </Col>
              </Row>
            </Container>
        );
    }
}

export default AboutMe;