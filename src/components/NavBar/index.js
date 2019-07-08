import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/page-images/ms-logo.png";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import "./style.css";

function NavBar() {

    return (
        <div class="nav-bg d-sm-flex">
            <Nav className="d-none d-sm-inline-flex">
              <Nav.Item>
                <Nav.Link>
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                    />
                    </Nav.Link>
                </Nav.Item>
              </Nav>
              <Nav className="d-sm-inline-flex ml-sm-auto">
                <Nav.Item>
                  <Nav.Link className="nav">Portfolio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
      </div>

    );

}

export default NavBar