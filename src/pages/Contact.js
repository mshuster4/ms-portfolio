import React, { Component } from "react";
import AboutCard from "../components/AboutCard";
import ContactForm from "../components/ContactForm";
import ContactContainer from "../components/ContactContainer";
import Footer from "../components/Footer"
import Icon from "../components/Icon";
import Button from "../components/Button"
import { Row, Col } from "react-bootstrap";

class Contact extends Component {

    render() {
        return(
          <ContactContainer>
            <Row>
              <Col sm={12}>
                <AboutCard>
                   <ContactForm/>
                </AboutCard>
              </Col>
            </Row>
          </ContactContainer>
        );
    }
}

export default Contact