import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavbarStyles.css";


function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      variant="light"
      expand="lg"
      expanded={expanded}
      className="navbar-custom"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="./" className="navbar-color">
          <img className="d-block logo-img"
            src={Logo}
            alt="LogoImg"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="navbar-toggler-white"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link className="navbar-color" href="./Playground">
              What's Playground
            </Nav.Link>
            <Nav.Link className="navbar-color" href="./About">
              Developers
            </Nav.Link>
            <Nav.Link className="navbar-color" href="./Contact">
              Highlights
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;