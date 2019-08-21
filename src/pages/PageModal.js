import React, { Component } from "react";
import { Modal, Row, Col } from 'react-bootstrap/'
import { MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact";
import Button from "../components/Button";
import Icon from "../components/Icon";
import ModalImages from "../components/ModalImages";
import ModalList from "../components/ModalList";
     
     
     class PageModal extends Component {

          constructor(props) {
            super(props);
            console.log(this.props);
         }

         render() {

         return (
         <Modal show={this.props.show} onHide={this.props.onHide} size="lg"> 
            <Modal.Header closeButton>
              <div>
                <h1>{this.props.title}</h1>
                <h6 className="modal-tag"><i>{this.props.tagline}</i></h6>
              </div>
            </Modal.Header>
                <MDBModalBody>
                <ModalImages
                    imageOne = {this.props.imageOne}
                    imageTwo= {this.props.imageTwo}
                />
                <p>{this.props.description}</p>
                <p>{this.props.role}</p>
                <ModalList
                    techsUsed={this.props.techsUsed}
                />
            </MDBModalBody>
            <MDBModalFooter className="display-flex justify-content-start">
                <MDBBtn
                    outline={true}
                    size = "md"
                    color="black"
                    className="mt-0 mb-0"
                    href={this.props.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    tag="a"

                >
                    Launch Demo <Icon icon={["fas", "rocket"]} />
                </MDBBtn>
                 <MDBBtn
                    outline={true}
                    size = "md"
                    color="black"
                    className="mt-0 mb-0"
                    href={this.props.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    tag="a"

                >
                    View Github <Icon icon={["fab", "github"]} />
                </MDBBtn>
            </MDBModalFooter>
          </Modal>
    );
  }
}

export default PageModal