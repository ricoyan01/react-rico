import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';

export class Navigationbar extends Component {
  render() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">News App</Navbar.Brand>
            </Container>
        </Navbar>
    )
  }
}

export default Navigationbar;