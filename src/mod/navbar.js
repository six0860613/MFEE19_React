import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="react-router-breadcrumb"
            width="30"
            height="30"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/HW">
                HW
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cartCount">
                cartCount
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/appExample">
                appExample
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Form">
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Refs">
                Refs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Lifecycle">
                Lifecycle
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
