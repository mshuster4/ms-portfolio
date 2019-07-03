import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

function AboutContainer(props) {
    return (
         <Container className="about-container">
            {props.children}
         </Container>
    )
}

export default AboutContainer;