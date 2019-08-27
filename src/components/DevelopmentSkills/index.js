import React from "react";
import { ListGroup, Card } from 'react-bootstrap';
import Icon from "../Icon";
import "./style.css"

function DevelopmentSkills() {
    return (
        <div className="skills-list">
            <Card className="text-center skills-card"> 
                <Card.Header>
                  <h5 className="list-header"><b> Development Skills </b><Icon icon={["fas", "code"]}></Icon></h5>
                </Card.Header>
                    <ListGroup className="about-list" variant="flush">
                        <ListGroup.Item>HTML/CSS</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>Node.js/Express</ListGroup.Item>
                        <ListGroup.Item>React.js</ListGroup.Item>
                        <ListGroup.Item>MySql</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                    </ListGroup>
            </Card>
        </div>
    )
}

export default DevelopmentSkills