import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

function ContactContainer(props) {
    return (
         <Container className="contact-container">
            {props.children}
         </Container>
    )
}

export default ContactContainer;