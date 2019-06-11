import React from "react";
import { MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "./style.css"

class PortfolioButton extends React.Component {

  handleClick = () => {
    this.props.onClick();
  }

   render() {
    return (
        <div>
          <MDBBtn color="info" onClick={this.handleClick}>Learn More <FontAwesomeIcon icon={['fa', 'book-open']}/></MDBBtn>
        </div>
    );
  
  }

}

export default PortfolioButton 

