import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/page-images/ms-logo.png";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import "./style.css";

function NavBar() {

    return (
        <Navbar bg="light" variant="dark">
          <Container className="nav-container" fluid>
            <Row>
              <Col>
                <Navbar.Brand collapseOnSelect expand="md" href="#home">
                  <Link to="#">
                    <img
                        alt="logo"
                        src={logo}
                        className="d-inline-block align-top"
                    />
                  </Link>
                </Navbar.Brand>
              </Col>
              <Col size="sm-12 md-8" className="text-center">
                 <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="ml-auto">
                        <Link to="/" className="main-nav nav-link">Home</Link>
                        <Nav.Link to="/Profile" className="main-nav">Profile</Nav.Link>
                        <Nav.Link to="/Resources" className="main-nav">Resources</Nav.Link>
                        <Nav.Link to="/About" className="main-nav">About Us</Nav.Link>
                      </Nav>
                   </Navbar.Collapse>
               </Col>
             </Row>
          </Container>
        </Navbar>

    );

}

export default NavBar