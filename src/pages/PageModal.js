import React, { Component } from "react";
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
         <MDBContainer>
          <MDBModal size="lg" showModal={this.props.showModal} isOpen={this.props.modal} toggle={this.props.toggle} onClose={this.props.onClose}>    
            <MDBModalHeader titleClass="w-100" toggle={this.props.onClose}>
                <h1>{this.props.title}</h1>
                <h6 className="modal-tag"><i>{this.props.tagline}</i></h6>
                </MDBModalHeader>
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
          </MDBModal>
        </MDBContainer>
    );
  }
}

export default PageModal