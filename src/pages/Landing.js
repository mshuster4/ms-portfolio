import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LandingContainer from "../components/LandingContainer";
import LandingText from "../components/LandingText";
import LandingImg from "../components/LandingImg";


class Landing extends Component {

    render() {
        return (
              <LandingContainer>
                 <LandingImg className="d-flex justify-content-center">
                    <div className="landing-content">
                        <LandingText delay={2000}><h1 className="h1-responsive">My name is Marguerite Shuster.</h1></LandingText>
                        <LandingText delay={3000}><h1 className="h1-responsive">I am a Web Developer and UI Designer.</h1></LandingText>
                    </div>
                 </LandingImg>
              </LandingContainer>
        );
    }
}

export default Landing;