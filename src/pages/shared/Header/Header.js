import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from '../../../images/logo-black.png';


const Header = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const handleSignOut = () =>{
    signOut(auth);
    navigate("/login")
  }
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to="/">
      <img width={150} src={logo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="home#services">Services</Nav.Link>
        <Nav.Link href="home#expert">Experts</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
      {
          user&&  <>
          <Nav.Link as={Link}  to="/addservice">addservice</Nav.Link>
          <Nav.Link as={Link}  to="/mannageservice">manage</Nav.Link>
          <Nav.Link as={Link}  to="/orders">Orders</Nav.Link>
          </>
        }
        <Nav.Link as={Link}  to="/about">About</Nav.Link>
       {user ?<button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>logout</button> :
        <Nav.Link eventKey={2} as={Link} to="/login">
          Login
        </Nav.Link>}
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
