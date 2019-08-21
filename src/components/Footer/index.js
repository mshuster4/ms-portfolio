import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Row, Col } from "react-bootstrap"
import Icon from "../Icon";
import Button from "../Button";
import "./style.css";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 footer">
      <MDBContainer fluid className="text-center">
         <Row>
            <Col sm={12}>
                <Button className="contact-button"><Icon icon={["fab", "github-square"]} size="4x"/></Button>
                <Button className="contact-button"><Icon icon={["fab", "linkedin"]} size="4x"/></Button>
                <Button className="contact-button"><Icon icon={["fab", "facebook-square"]} size="4x"/></Button>
                <Button className="contact-button"><Icon icon={["fab", "instagram"]} size="4x"/></Button>
            </Col>
        </Row>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a>Domain Here</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;

