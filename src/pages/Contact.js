import React, { Component } from "react";
import ContactForm from "../components/ContactForm";
import ContactContainer from "../components/ContactContainer";
import Icon from "../components/Icon";
import Button from "../components/Button"
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
            <Row>
              <Col sm={12}>
                <Button className="contact-button"><Icon icon={["fab", "github-square"]} size="4x"/></Button>
                <Button className="contact-button"><Icon icon={["fab", "linkedin"]} size="4x"/></Button>
                <Button className="contact-button"><Icon icon={["fab", "facebook-square"]} size="4x"/></Button>
                <Button className="contact-button"><Icon icon={["fab", "instagram"]} size="4x"/></Button>
              </Col>
            </Row>
          </ContactContainer>
        );
    }
}

export default Contact