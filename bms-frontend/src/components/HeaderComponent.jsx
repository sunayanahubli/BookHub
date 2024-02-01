import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using React Router

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="fw-bold text-primary" style={{ fontSize: "2.5rem" }}>
            Book
          </span>
          <span className="fw-bold text-success" style={{ fontSize: "2.5rem" }}>
            Hub
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
