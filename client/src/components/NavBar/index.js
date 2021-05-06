import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

import axios from "axios";

//CSS Styling for this component

const stylesNav = {
  backgroundColor: "#0a928e",
};

const navLink = {
  color: "white",
  fontSize: " 20px",
  backgroundColor: "#0a928e",
};

function NavBar() {
  //Define State
  const location = useLocation();
  let history = useHistory();

  //Handle functions
  return (
    <div className="full-width">
      <div className="row" style={{ backgroundColor: "white" }}>
        <div className="col">
          <nav className="navbar navbar-expand-lg" style={stylesNav}>
            <Link to="/" className="navbar-brand" style={navLink}>
              MINDSET
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  style={navLink}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className={
                    location.pathname === "/dashboard"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={navLink}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  style={navLink}
                  onClick={(event) => {
                    event.preventDefault();
                    axios.get("/logout").then(() => {
                      history.push("/");
                    });
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
