import React from "react";
import { MDBBtn } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  "./style.css"

function PortfolioButton(props) {

    return (
          <MDBBtn color="info" onClick={props.onClick}>Learn More <FontAwesomeIcon icon={['fa', 'book-open']}/></MDBBtn>
    );
}

export default PortfolioButton 

