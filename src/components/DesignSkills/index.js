import React from "react"
import { ListGroup, Card } from 'react-bootstrap'
import "./style.css";

function DesignSkills() {
    return (
        <div>
            <Card className="text-center about-list skills-card">
                <Card.Header><b>Design Skills</b></Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Photoshop</ListGroup.Item>
                        <ListGroup.Item>Illustrator</ListGroup.Item>
                        <ListGroup.Item>InDesign</ListGroup.Item>
                        <ListGroup.Item>Animation</ListGroup.Item>
                        <ListGroup.Item>Wireframing</ListGroup.Item>
                        <ListGroup.Item>Responsive Web Design</ListGroup.Item>
                        <ListGroup.Item>SEO</ListGroup.Item>
                    </ListGroup>
            </Card>
        </div>
    )
}

export default DesignSkills;