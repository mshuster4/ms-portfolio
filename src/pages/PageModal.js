import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
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
            <MDBModalHeader titleClass="w-100" toggle={this.props.onClose}>
                <h1>{this.props.title}</h1>
                <h6 className="modal-tag"><i>{this.props.tagline}</i></h6>
            </MDBModalHeader>
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
            <Button
                outline={true}
                size = "md"
                color="black"
                className="mt-0 mb-0"

            >
                Launch Demo <Icon icon={["fas", "book-open"]} />
            </Button>
            <Button
                outline={true}
                color="black"
                size = "md"
                className="ml-3 mt-0 mb-0"

            >
                View Github <Icon icon={["fab", "github"]} />
            </Button>
            </MDBModalFooter>
          </Modal>
    );
  }
}

export default PageModal