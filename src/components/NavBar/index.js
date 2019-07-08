import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/page-images/ms-logo.png";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import "./style.css";

function NavBar() {

    return (
        <Navbar bg="light" variant="light" className="pt-0 pb-0 pr-0 pl-0 navbar">
          <Container className="d-flex justify-content-center" fluid>
                <Nav.Link className="d-none">
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                    />
                </Nav.Link>
                <Nav.Link className="nav">Portfolio</Nav.Link>
                <Nav.Link className="nav">About</Nav.Link>
                <Nav.Link className="nav">Contact</Nav.Link>
          </Container>
        </Navbar>

    );

}

export default NavBar