import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container">

        <NavLink className="navbar-brand" to="/">
          Personal Website
        </NavLink>

        <div className="navbar-nav">

          <NavLink
            className="nav-link"
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className="nav-link"
            to="/contact"
          >
            Contact
          </NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;