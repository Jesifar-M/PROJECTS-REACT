import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/register">
          User System
        </Link>

        <div className="d-flex">

          <Link
            className="nav-link text-white mx-2"
            to="/register"
          >
            Register
          </Link>

          <Link
            className="nav-link text-white mx-2"
            to="/login"
          >
            Login
          </Link>

        </div>

      </div>

      <style>
        {`
          .nav-link:hover {
            color: yellow !important;
          }
        `}
      </style>

    </nav>
  );
}

export default Navbar;