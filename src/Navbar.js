import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

function Navar() {

    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <NavLink to="/"><img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt="" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navlinks justify-content-end">
                            <HashLink to="/#latest">Latest Builds</HashLink>
                            <HashLink to="/#process">Process</HashLink>
                            <HashLink to="/#service">Services</HashLink>
                            <HashLink to="/#contact">Contact Us</HashLink>
                            <NavLink to="/Projects">Projects</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            {/* end navbar  */}
        </>
    )
}

export default Navar
