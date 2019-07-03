import React from "react";
import { Card } from 'react-bootstrap'

function AboutCard (props) {
    return(
        <div>
            <Card>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Card>
        </div>
    );
}

export default AboutCard;