import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import './NavbarComp.css';


export default class NavbarComponents extends Component {
    render() {
        return (
            <div>
                <Navbar className="whole-navbar">
                <Container>
                <Navbar.Brand href="#home">Shamita Hattangady</Navbar.Brand>
                <Nav className="nav-opts">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#resume">Resume</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Container>
                </Navbar>
            </div>
        )
    }
}

