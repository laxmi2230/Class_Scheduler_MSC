import React from 'react'
//import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Container, Offcanvas,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
 <div>
 <Navbar bg="info" expand={false}>
  <Container fluid>
    <Navbar.Brand><h3><b><i>SCHEDULER(CSE DEPARTMENT)</i></b></h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"><h1><u>Pages Routing</u></h1></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link><Link to = "/"><h4>Home</h4></Link></Nav.Link>
          <Nav.Link><Link to = "/About"><h4>About</h4></Link></Nav.Link>
          <Nav.Link><Link to = "/Information"><h4>Class Information</h4></Link></Nav.Link>
          <Nav.Link><Link to = "/Signup"><h4>SignUp For Teachers</h4></Link></Nav.Link>
          <Nav.Link><Link to = "/Registration"><h4>Registration For Students</h4></Link></Nav.Link>   
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar> 
        </div>
    )
}

export default NavBar
