import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from "../../assets/page-images/ms-logo.png";
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"

class NavBar extends Component {

    render() {
        return (
            <Navbar bg="light" variant="light">
                <Container fluid={true}>
                        <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            id="logo"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                        </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default NavBar