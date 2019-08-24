import React, { Component } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Nav, Navbar } from 'react-bootstrap';


function NavBar(props) {

    return (
        <Navbar 
          fixed="top" 
          className={props.navClassName}
        >
            <Nav className="d-none d-sm-inline-flex">
              <Nav.Item
                className={props.itemClassName}
              >
                 <Link 
                    activeClass="active" 
                    style={props.style}
                    className="landing nav-link" 
                    to="landing" 
                    spy={true} 
                    smooth={true}  
                    duraton={500}
                    onSetActive={props.handleSetActive}
                  >
                  <img
                      alt="logo"
                      src={props.src}
                      width="30"
                  />
                 </Link>
               </Nav.Item>
             </Nav>
             <Nav className="d-sm-inline-flex ml-sm-auto">
              <Nav.Item
                className={props.itemClassName}
              >
                    <Link 
                      activeClass="active" 
                      className="portfolio nav-link" 
                      style={props.style}
                      to="portfolio" spy={true} 
                      smooth={true}
                      duraton={500}
                      onSetActive={props.handleSetActive}
                    >
                        Portfolio
                    </Link>
                </Nav.Item>
                <Nav.Item
                  className={props.itemClassName}              
                >
                     <Link 
                      activeClass="active" 
                      style={props.style}
                      className="about nav-link" 
                      to="about" 
                      spy={true} 
                      smooth={true} 
                      duraton={500}
                      onSetActive={props.handleSetActive}
                    >
                      About
                    </Link>
                </Nav.Item>
                <Nav.Item
                  className={props.itemClassName}
                >
                  <Link 
                    activeClass="active" 
                    style={props.style}
                    className="contact nav-link" 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duraton={500}
                    offset={50}
                    onSetActive={props.handleSetActive}
                   >
                    Contact
                   </Link>
                </Nav.Item>
              </Nav>
       </Navbar>

    );

}

export default NavBar