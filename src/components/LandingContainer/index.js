import React from "react";
import Container from 'react-bootstrap/Container';
import "./style.css";

function LandingContainer(props) {

    return (
         <Container className="landing-container">
            {props.children}
         </Container>
    )
}

export default LandingContainer;