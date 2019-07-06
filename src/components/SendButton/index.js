import React from "react";
import { MDBBtn } from "mdbreact";

function SendButton(props) {
    return (
        <div className="text-center py-4 mt-3">
            <MDBBtn color="cyan" onClick={props.onClick}>
                Send Message
            </MDBBtn>
        </div>
    );
}

export default SendButton;