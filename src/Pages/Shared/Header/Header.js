import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={60} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services" className="fs-5">
                Services
              </Nav.Link>
              <Nav.Link href="home#experts" className="fs-5">
                Experts
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about" className="fs-5">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="blogs" className="fs-5">
                Blogs
              </Nav.Link>
              {user ? (
                <button className="btn btn-link text-white text-decoration-none fs-5" onClick={handleSignOut}>
                  Sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="login" className="fs-5">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
