import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/page-images/ms-logo.png";
import { Nav } from 'react-bootstrap';
import "./style.css";

function NavBar() {

    return (
        <div class="nav-bg d-sm-flex">
            <Nav className="d-none d-sm-inline-flex">
              <Nav.Item>
                <Link to={"/"} className="nav-link">
                    <img
                        alt="logo"
                        src={logo}
                        width="30"
                    />
                    </Link>
                </Nav.Item>
              </Nav>
              <Nav className="d-sm-inline-flex ml-sm-auto">
                <Nav.Item>
                  <Link to={"/portfolio"} className="nav-link">
                    Portfolio
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to={"/about"} className="nav-link">
                      About
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to={"/contact"} className="nav-link">
                    Contact
                  </Link>
                </Nav.Item>
            </Nav>
      </div>

    );

}

export default NavBar