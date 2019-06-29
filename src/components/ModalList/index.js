import React from 'react';
import { MDBListGroup, MDBListGroupItem } from "mdbreact";


function ModalList(props) {
    console.log(props) 
    console.log(props.techsUsed)
    const techs = props.techsUsed;
    const listItems = techs.map((tech) => 
        <MDBListGroupItem>{tech}</MDBListGroupItem>
    );
    console.log(listItems);
    return (
        <MDBListGroup>{listItems}</MDBListGroup>
    )
}

export default ModalList