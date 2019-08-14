import React from "react";
import { MDBBtn } from "mdbreact";
import "./style.css"

function Button(props) {

    function handleClick(e) {
        e.preventDefault();
        props.onClick();
    }

    return (
        <MDBBtn outline={props.outline} size={props.size} color={props.color} onClick={handleClick} className={props.className}>
            {props.children}
        </MDBBtn>
    );
}

export default Button;