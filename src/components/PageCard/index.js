import React from "react";
import { Card } from 'react-bootstrap'

function PageCard (props) {
    return(
        <Card className={props.className}>
            <Card.Header><h5 className="list-header"><b>About Me</b></h5></Card.Header>
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    );
}

export default PageCard;