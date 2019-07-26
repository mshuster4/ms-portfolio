import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";

function PortfolioContainer(props) {
    return (
        <Container fluid className="portfolio-container d-flex mt-4">
          {props.children}
        </Container>
    
    )
}

export default PortfolioContainer;