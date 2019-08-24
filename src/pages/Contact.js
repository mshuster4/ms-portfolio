import React, { Component } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ContactForm from "../components/ContactForm";
import ContactContainer from "../components/ContactContainer";
import Footer from "../components/Footer"
import Icon from "../components/Icon";
import Button from "../components/Button"
import { Row, Col } from "react-bootstrap";

class Contact extends Component {

    render() {
        return(
      <ScrollAnimation animateIn="fadeIn">  
        <div>
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
              <Col sm={{span: 8, offset: 2}}>
                  <ContactForm/>
              </Col>
            </Row>
          </ContactContainer>
          <div>
            <Footer/>
          </div>
        </div>
       </ScrollAnimation>
        );
    }
}

export default Contact