import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';


function Nabvar() {

    return (
      <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>GarageWale</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto liu active">
                <NavLink to="">Home</NavLink> &nbsp;&nbsp;&nbsp;
                <NavLink to="/garagewale">GarageWale</NavLink> &nbsp;&nbsp;&nbsp;
                <NavLink to="/enduser">End User</NavLink> &nbsp;&nbsp;&nbsp;
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export default Nabvar;