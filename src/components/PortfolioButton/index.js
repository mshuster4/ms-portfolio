import React, { Component } from "react";
import { MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "./style.css"

class PortfolioButton extends Component {

  handleClick = () => {
    this.props.onClick();
  }

   render() {
    return (
          <MDBBtn color="info" onClick={this.handleClick}>Learn More <FontAwesomeIcon icon={['fa', 'book-open']}/></MDBBtn>
    );
  
  }

}

export default PortfolioButton 

