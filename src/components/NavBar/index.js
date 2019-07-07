import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/page-images/ms-logo.png";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import "./style.css";

function NavBar() {

    return (
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Container className="nav-container" fluid>
            <Navbar.Brand >
                <Nav.Link to="#">
                    <img
                        alt="logo"
                        src={logo}
                        className="d-inline-block align-top logo-img"
                    />
                </Nav.Link>
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav">Portfolio</Nav.Link>
                        <Nav.Link className="nav">About</Nav.Link>
                        <Nav.Link className="nav">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
          </Container>
        </Navbar>

    );

}

export default NavBar