import React from 'react'
import "../estilos/NavBar.css"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {Link} from "react-router-dom"
import { NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="bgNav">
                <Container>
                <Link to ="/"><img src="https://res.cloudinary.com/dkthmexrc/image/upload/v1649708472/CAMARON%20BRUJO/cb_1_ub6xq1.png" alt="logo" width="100" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to ="/" className="nav-link" activeClassName="active">Inicio</Link>
                            <NavDropdown title="Surfboards" id="collasible-nav-dropdown">
                                <Link to ="/categoria/shortboard" className="dropdown-item">shortboard</Link>
                                <Link to ="/categoria/longboard" className="dropdown-item">longboard</Link>
                                <Link to ="/categoria/retro" className="dropdown-item">retro</Link>
                                <Link to ="/categoria/funboard" className="dropdown-item">funboard</Link>
                            </NavDropdown>
                        </Nav>
                                               
                    </Navbar.Collapse>
                    <Link to="/cart"><CartWidget /></Link>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default NavBar
