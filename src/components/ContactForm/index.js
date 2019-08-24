import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import { Row, Col } from "react-bootstrap"


class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: "",
        email: "",
        message: "",
        mailSent: false,
        error: null
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state)
};


  render() {
        return(
          <form>
            <MDBInput
              label="Name"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              name="name"
              value={this.state.name}
              onInput={this.handleInput}
            />
            <MDBInput
              label="Email"
              icon="envelope"
              group
              type="email"
              validate
              error="wrong"
              success="right"
              name="email"
              value={this.state.email}
              onInput={this.handleInput}
            />
            <MDBInput
              type="textarea"
              rows="2"
              label="Message"
              icon="pencil-alt"
              name="message"
              value={this.state.message}
              onInput={this.handleInput}/>
          </form>
        );
    }
}


export default ContactForm;