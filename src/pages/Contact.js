import React, { Component } from "react";
import PageCard from "../components/PageCard";
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
                <PageCard>
                   <ContactForm/>
                </PageCard>
              </Col>
            </Row>
          </ContactContainer>
        );
    }
}

export default Contact