import React, { useState } from 'react';
import { Container, Dropdown } from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';
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
          <img
            className="d-block logo-img"
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
            <Dropdown as={Nav.Item} className="navbar-dropdown">
              <Dropdown.Toggle as={Nav.Link} className="navbar-color">
                Developers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="./Andrew">Andrew</Dropdown.Item>
                <Dropdown.Item href="./Alex">Alex</Dropdown.Item>
                <Dropdown.Item href="./Marc">Marc</Dropdown.Item>
                <Dropdown.Item href="./Simon">Simon</Dropdown.Item>
                <Dropdown.Item href="./Matthew">Matthew</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link className="navbar-color" href="./Highlights">
              Highlights
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
