import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default class navbar extends React.Component {

    render() {
        return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img alt="#" src="edu.png" width={200}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav ms-auto d-flex gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Kelas" id="basic-nav-dropdown">
              <NavDropdown.Item href="Private Mentoring">Private Mentoring</NavDropdown.Item>
              <NavDropdown.Item href="#Bootcamp">Bootcamp</NavDropdown.Item>
              <NavDropdown.Item href="#Webinar">Webinar</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Hubungi Admin</Nav.Link>
            <Nav.Link href="#link">Masuk</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        )
    }
}