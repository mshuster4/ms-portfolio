import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import ContactContainer from "../components/ContactContainer";
import { Row, Col } from "react-bootstrap";

class Contact extends Component {

    render() {
        return(
          <ContactContainer>
            <Row>
                <Col sm={12}>
                    <ContactForm/>
                </Col>
            </Row>
          </ContactContainer>
        );
    }
}

export default Contact