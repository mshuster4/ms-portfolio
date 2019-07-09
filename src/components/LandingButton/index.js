import React, { Component } from "react";
import { MDBBtn } from 'mdbreact';
import  "./style.css"

class LandingButton extends Component {

  handleClick = () => {
    this.props.onClick();
  }

   render() {
    return (
        <div className="d-flex justify-content-center">
          <MDBBtn className="landing-button mt-1" color="info" onClick={this.handleClick}>Button</MDBBtn>
        </div>
    );
  
  }

}

export default LandingButton 

