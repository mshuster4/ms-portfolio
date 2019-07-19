import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import axios from 'axios';


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
          <div>
            <form>
              <p className="h4 text-center py-4">Contact</p>
              <div className="grey-text">
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
              </div>
              <div className="text-center py-4 mt-3">
              </div>
            </form>
          </div>
        );
    }
}


export default ContactForm;