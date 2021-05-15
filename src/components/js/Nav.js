import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <Link className="nav__link" to="/istage">
          <li>I stopnia</li>
        </Link>
        <Link className="nav__link" to="/iistage">
          <li>II stopnia</li>
        </Link>
        <Link className="nav__link" to="/postgraduate">
          <li>Podyplomowe</li>
        </Link>
        <Link className="nav__link" to="/trainings">
          <li>Szkolenia</li>
        </Link>
        <Link className="nav__link" to="/services">
          <li>Usługi</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
