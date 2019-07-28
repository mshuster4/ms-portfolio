import React from "react";
import { Card } from 'react-bootstrap'

function AboutCard (props) {
    return(
        <Card className={props.className}>
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    );
}

export default AboutCard;