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
        <div className="contact-page">
          <ContactContainer>
           <Row>
            <Col sm={12}>
              <p className="h6 text-center">
               Need a web developer to polish your company's online presence?  Have a design idea you would like to discuss?  
             </p>
              <p className="h6 text-center">Drop me a line below!</p>
            </Col>
           </Row>
            <Row>
              <Col sm={12}>
                <PageCard className="contact-card">
                  <ContactForm/>
                </PageCard>
              </Col>
            </Row>
          </ContactContainer>
          <div>
            <Footer/>
          </div>
        </div>
        );
    }
}

export default Contact