import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../logo.svg';

function MyNavbar(props) {
  const { cartCount } = props;
  return (
    <>
      <Navbar bg="light" expand="md">
        <Navbar.Brand as={NavLink} to="/" exact>
          {' '}
          <img
            src={logo}
            alt="react-router-breadcrumb"
            width="30"
            height="30"
          />
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={NavLink}
              to="/Home"
              activeClassName="navSelected"
              exact
            >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/HW" activeClassName="navSelected">
              HW
            </Nav.Link>
            <Nav.Link as={NavLink} to="/User" activeClassName="navSelected">
              User
            </Nav.Link>
            <NavDropdown title="上課範例" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/AppExample"
                activeClassName="navSelected"
              >
                appExample
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Form"
                activeClassName="navSelected"
              >
                Form
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Refs"
                activeClassName="navSelected"
              >
                Refs
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/Lifecycle"
                activeClassName="navSelected"
              >
                Lifecycle
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/JQ"
                activeClassName="navSelected"
              >
                JQ
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="實作" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/CartCount"
                activeClassName="navSelected"
              >
                CartCount
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/ProductFilter"
                activeClassName="navSelected"
              >
                ProductFilter
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="加入購物車實作" id="basic-nav-dropdown">
              <NavDropdown.Item
                as={NavLink}
                to="/product"
                activeClassName="navSelected"
              >
                Product
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/cart"
                activeClassName="navSelected"
              >
                Cart ({cartCount})
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;
