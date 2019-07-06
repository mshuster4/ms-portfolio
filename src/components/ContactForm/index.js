import React, { Component } from "react";
import SendButton from "../SendButton";
import { MDBInput } from "mdbreact";

class ContactForm extends Component {

  constructor() {
    super();
    this.state = {
        name: "",
        email: "",
        message: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendForm = () => {
    console.log(this.state);
  }


  render() {
        return(
          <div>
            <form>
              <p className="h4 text-center py-4">Contact</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
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
                  label="Your email"
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
                  label="Your message"
                  icon="pencil"
                  name="message"
                  value={this.state.message}
                  onInput={this.handleInput}/>
              </div>
              <div className="text-center py-4 mt-3">
                <SendButton onClick={this.sendForm}>
                  Send Message
                </SendButton>
              </div>
            </form>
          </div>
        );
    }
}


export default ContactForm;