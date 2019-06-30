import React, { Component } from "react";
import {  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import PortfolioButton from "../PortfolioButton";
import ModalImages from "../ModalImages";
import  ModalList from "../ModalList";
import "./style.css";


class PortfolioModal extends Component {

    state = {
        modal: false,
        title: this.props.title,
        tagline: this.props.tagline,
        imageOne: this.props.imageOne,
        imageTwo: this.props.imageTwo,
        description: this.props.description,
        techsUsed: this.props.techsUsed
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
            <MDBModal size="lg" isOpen={this.state.modal}>
                <MDBModalHeader>
                <h1>{this.state.title}</h1>
                <h3>{this.state.tagline}</h3>
                </MDBModalHeader>
                <MDBModalBody>
                    <ModalImages
                        imageOne = {this.state.imageOne}
                        imageTwo= {this.state.imageTwo}
                    />
                    <p>{this.state.description}</p>
                    <ModalList
                        techsUsed={this.state.techsUsed}
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
