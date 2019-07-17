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
        <div className="modal-list">
            <h4><u>Technologies Used</u></h4>
            <MDBListGroup>{listItems}</MDBListGroup>
        </div>
    )
}

export default ModalList