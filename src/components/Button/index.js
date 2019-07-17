import React from "react";
import { MDBBtn } from "mdbreact";
import "./style.css"

function Button(props) {
    return (
        <MDBBtn outline={props.outline} size={props.size} color={props.color} onClick={props.onClick} className={props.className}>
            {props.children}
        </MDBBtn>
    );
}

export default Button;