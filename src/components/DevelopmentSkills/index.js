import React from "react"
import { ListGroup, Card } from 'react-bootstrap'
import "./style.css"

function DevelopmentSkills() {
    return (
        <div className="skills-list">
            <Card className="text-center skills-card"> 
                <Card.Header><b>Development Skills</b></Card.Header>
                    <ListGroup className="about-list" variant="flush">
                        <ListGroup.Item>HTML/CSS</ListGroup.Item>
                        <ListGroup.Item>Frameworks</ListGroup.Item>
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