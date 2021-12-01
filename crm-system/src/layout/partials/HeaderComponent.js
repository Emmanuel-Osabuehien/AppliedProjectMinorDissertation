import React from 'react';

import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import crmlogo from '../../assets/images/crmlogo.png'


export const Header = () => {
  return (
    <Navbar
      collapseOnSelect 
      bg="info"
      variant="dark" 
      expand="md">
    <Navbar.Brand>
      <img src={crmlogo} alt="logo" height="50px" width="50px"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/home">Tickets</Nav.Link>
        <Nav.Link href="/home">Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};