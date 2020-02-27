import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ReactComponent as Logo } from "../remote_oasis_icon.svg";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Navbar
        expanded={isExpanded}
        onToggle={setIsExpanded}
        onSelect={() => setIsExpanded(false)}
        expand="md"
        fixed="top"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand as={Link} to="/">
          <Logo className="mr-3" />
          Navbar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link eventKey="home" as={NavLink} to="/" exact>
              Home
            </Nav.Link>
            <Nav.Link eventKey="explore" as={NavLink} to="/explore/cafes">
              Explore
            </Nav.Link>
            <Nav.Link eventKey="favorites" as={NavLink} to="/favorites">
              Favorites
            </Nav.Link>
            <Nav.Link eventKey="about" as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
