import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LandingContainer from "../components/LandingContainer";
import LandingText from "../components/LandingText";
import LandingButton from "../components/LandingButton";
import LandingImg from "../components/LandingImg";


class Landing extends Component {


    
    render() {
        return (

                <LandingContainer>
                <Row>
                  <Col sm={12}>
                   <LandingImg>
                      <Row>
                        <Col sm={{span:6, offset:1}}>
                            <LandingText delay={2000}><h1>Hello. My name is Marguerite Shuster.</h1></LandingText>
                            <LandingText delay={3000}><h1>I am a Web Developer and UI Designer</h1></LandingText>
                        </Col>
                        <Col sm={5}></Col>
                      </Row>
                 </LandingImg>
                 </Col> 
                </Row>
              </LandingContainer>
        );
    }
}

export default Landing;