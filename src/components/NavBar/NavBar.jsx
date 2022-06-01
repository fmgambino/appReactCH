import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import '/src/components/NavBar/NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import LogoNavBar from '../logoNavBar/logoNavBar'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <LogoNavBar/>

  {/* <Navbar.Brand href="#home">CryptoPlus+</Navbar.Brand> */}
  <Navbar.Toggle id="botonNavBar" aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Servicios" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Desarrollo Hardware</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Desarrollo Software</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
   <CartWidget/>
   </Container>
    
</Navbar>
  )
}
 export default NavBar