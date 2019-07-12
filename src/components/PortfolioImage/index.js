import React from "react";
import { Row, Col } from "react-bootstrap"
import { MDBMask, MDBView } from "mdbreact";
import "./style.css";

function PortfolioImage(props) {

  return (
      <div>
          <MDBView hover>
                <img
                    src={props.img}
                    className="img-fluid"
                    alt={props.alt}
                />
              <MDBMask overlay="white-strong" className="text-center">
                <Row>
                    <Col sm={12}>
                       {props.children}
                    </Col>
                </Row>
              </MDBMask>
          </MDBView>
      </div>
  );
}

export default PortfolioImage;

