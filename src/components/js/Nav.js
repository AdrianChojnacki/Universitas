import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileActive: this.props.active,
    };
  }

  render() {
    const { active } = this.props;

    return (
      <nav className={`nav ${active ? "nav--active" : ""}`}>
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
        <div className="nav__close"></div>
      </nav>
    );
  }
}

export default Nav;
