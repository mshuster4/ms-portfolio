import React from "react";
import logo from "../../assets/page-images/ms-logo.png";
import { Nav, Navbar } from 'react-bootstrap';
import "./style.css";

function NavBar() {

    return (
        <Navbar fixed="top" className="nav-bg d-sm-flex">
            <Nav className="d-none d-sm-inline-flex">
              <Nav.Item>
                <Nav.Link className="nav-link">
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
                  <Nav.Link className="nav-link">
                    Portfolio
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link">
                      About
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link">
                    Contact
                  </Nav.Link>
                </Nav.Item>
            </Nav>
      </Navbar>

    );

}

export default NavBar