import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LandingContainer from "../components/LandingContainer";
import LandingText from "../components/LandingText";
import LandingImg from "../components/LandingImg";


class Landing extends Component {

    render() {
        return (
              <LandingContainer>
                 <LandingImg className="d-flex justify-content-start">
                    <div className="landing-content">
                        <LandingText delay={1000}><h1 className="h1-responsive">My name is <span className="accent-color">Marguerite Shuster</span>.</h1></LandingText>
                        <LandingText delay={2000}><h1 className="h1-responsive">I am a <span className="accent-color">Web Developer</span> and <span className="accent-color"> UI Designer</span>.</h1></LandingText>
                    </div>
                 </LandingImg>
              </LandingContainer>
        );
    }
}

export default Landing;