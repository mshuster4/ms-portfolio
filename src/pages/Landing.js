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

export default Landing;