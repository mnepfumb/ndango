import React from 'react';
import '../App.css';
// import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';


function NavPage() {

  return (
  <div>
    <Navbar fixed="top"className="nav-color" variant="dark">
      <Navbar.Brand href="/ndango/">
        {/* <Image src="../public/logo.png"/> */}
        <img
          alt="Ndango Trading Enterprise"
          src={logo}
          width="220"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Toggle />
      <Nav className="justify-content-end mx-auto my-3" style={{ width: "80%" }}>
        {/* <Nav activeKey={location.pathname}> */}
        {/* <Nav.Link href="/" >HOME</Nav.Link>
        <Nav.Link href="/about" >ABOUT US</Nav.Link>
        <Nav.Link href="/" >PROJECTS</Nav.Link>
        <Nav.Link href="/contact" >CONTACTS</Nav.Link> */}
        <Nav.Item><NavLink className="nav-link" exact strict to="/ndango/">HOME</NavLink></Nav.Item>
        <Nav.Item><NavLink className="nav-link" exact strict to="/ndango/about">ABOUT US</NavLink></Nav.Item>
        <Nav.Item><NavLink className="nav-link" exact strict to="/ndango/projects">PROJECTS</NavLink></Nav.Item>
        <Nav.Item><NavLink className="nav-link" exact strict to="/ndango/contact">CONTACTS</NavLink></Nav.Item>
      </Nav>
    </Navbar>
  </div>
  );
}

export default NavPage;
