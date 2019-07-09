import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import LandingContainer from "../components/LandingContainer";
import LandingText from "../components/LandingText";
import LandingButton from "../components/LandingButton";
import LandingImg from "../components/LandingImg";


class Landing extends Component {
    
    render() {
        return (
            <LandingImg>
                <LandingContainer>
                </LandingContainer>
            </LandingImg>
        );
    }
}


/*
class Landing extends Component {
    
    render() {
        return (
            <LandingContainer>
                <div>
                    <LandingText delay={1000}>Hello.</LandingText>
                    <LandingText delay={2000}>My name is Marguerite Shuster.</LandingText>
                    <LandingText delay={3000}>I am a Web Developer and UI Designer.</LandingText>
                    <LandingButton></LandingButton>
                </div>
                <div>
                    <LandingImg></LandingImg>
                </div>
            </LandingContainer>
        );
    }
}
*/
export default Landing;