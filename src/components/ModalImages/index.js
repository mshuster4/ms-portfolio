import React from "react";
import { Row, Col, Image } from 'react-bootstrap'


function ModalImages(props) {
  return (
      <Row> 
        <Col sm={6}>
          <Image
            className="img-fluid modal-image"
            src={props.imageOne}
            alt="First slide"
          />
        </Col>
        <Col sm={6}>
          <Image
            className="img-fluid modal-image"
            src={props.imageTwo}
            alt="Second Slide"
          />
        </Col>
      </Row>
    );
}

export default ModalImages 