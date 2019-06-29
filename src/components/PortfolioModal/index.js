import React, { Component } from "react";
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import PortfolioButton from "../PortfolioButton";
import ModalImages from "../ModalImages";
import "./style.css";


class PortfolioModal extends Component {

    state = {
        modal: false,
        title: this.props.title,
        description: this.props.description,
        imageOne: this.props.imageOne,
        imageTwo: this.props.imageTwo
    }

     toggle = () => {
       console.log("clicked");
        this.setState({
        modal: !this.state.modal
    });
    }

    render() {
    return (
        <div>
        <PortfolioButton
            onClick = {this.toggle}
        />
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                <MDBModalHeader toggle={this.toggle}>{this.state.title}</MDBModalHeader>
                <MDBModalBody>
                    {this.state.description}
                    <ModalImages
                        imageOne = {this.state.imageOne}
                        imageTwo= {this.state.imageTwo}
                    />
                </MDBModalBody>
                <MDBModalFooter>
                </MDBModalFooter>
            </MDBModal>
        </div>
    );
    }
  }

export default PortfolioModal
