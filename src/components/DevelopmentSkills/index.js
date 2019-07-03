import React from "react"
import { ListGroup, Card } from 'react-bootstrap'
import "./style.css"

function DevelopmentSkills() {
    return (
        <div>
            <Card className="text-center"> 
                <Card.Header>Development Skills</Card.Header>
                    <ListGroup className="about-list" variant="flush">
                        <ListGroup.Item>HTML/CSS</ListGroup.Item>
                        <ListGroup.Item>Bootstrap</ListGroup.Item>
                        <ListGroup.Item>JavaScript</ListGroup.Item>
                        <ListGroup.Item>JQuery</ListGroup.Item>
                        <ListGroup.Item>Node.js/Express</ListGroup.Item>
                        <ListGroup.Item>React.js</ListGroup.Item>
                        <ListGroup.Item>Firebase</ListGroup.Item>
                        <ListGroup.Item>MySql</ListGroup.Item>
                        <ListGroup.Item>MongoDB</ListGroup.Item>
                    </ListGroup>
            </Card>
        </div>
    )
}

export default DevelopmentSkills