import React from "react";
import { Row, Col, Image } from 'react-bootstrap'


function ModalImages(props) {
  return (
      <Row> 
        <Col sm={12} md={6}>
          <Image
            className="img-fluid z-depth-1-half modal-image mb-4 mt-2"
            src={props.imageOne}
            alt="First slide"
          />
        </Col>
        <Col sm={12} md={6}>
          <Image
            className="img-fluid z-depth-1-half modal-image mb-4 mt-2"
            src={props.imageTwo}
            alt="Second Slide"
          />
        </Col>
      </Row>
    );
}

export default ModalImages 