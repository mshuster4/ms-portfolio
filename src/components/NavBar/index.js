import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/page-images/ms-logo.png";
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import "./style.css";

function NavBar(props) {

    return (
        <div class="nav-bg d-sm-flex">
            <Nav className="d-none d-sm-inline-flex">
              <Nav.Item>
                <Nav.Link
                  href="#landing"
                  onClick={() => props.handlePageChange("Landing")}
                  className={props.currentPage === "Landing" ? "nav-link active" : "nav-link"}
                >
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
                  <Nav.Link 
                     href="#portfolio"
                     onClick={() => props.handlePageChange("Portfolio")}
                     className={props.currentPage === "Landing" ? "nav-link active" : "nav-link"}
                  >
                    Portfolio
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  
                    href="#about"
                    onClick={() => props.handlePageChange("About")}
                    className={props.currentPage === "Landing" ? "nav-link active" : "nav-link"}
                    >
                      About
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link  
                    href="#contact"
                    onClick={() => props.handlePageChange("Contact")}
                    className={props.currentPage === "Landing" ? "nav-link active" : "nav-link"}
                  >
                    Contact
                  </Nav.Link>
                </Nav.Item>
            </Nav>
      </div>

    );

}

export default NavBar