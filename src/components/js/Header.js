import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import hamburger from "../img/hamburger.png";
import close from "../img/close.png";

class Header extends Component {
  state = {
    scrolled: false,
    mobileActive: false,
  };

  handleScroll = () => {
    if (window.pageYOffset > 1) {
      this.setState({
        scrolled: true,
      });
    } else {
      this.setState({
        scrolled: false,
      });
    }
  };

  handleHamburgerClick = () => {
    this.setState({
      mobileActive: true,
    });
  };

  handleCloseClick = () => {
    this.setState({
      mobileActive: false,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <header className={`header ${this.state.scrolled ? "header--scroll" : ""}`}>
        <div className="header__container container">
          <Link to="/">
            <img src={logo} className="header__logo" alt="logo" />
          </Link>
          <nav className={`nav ${this.state.mobileActive ? "nav--active" : ""}`}>
            <ul className="nav__list">
              <Link className="nav__link" onClick={this.handleCloseClick} to="/istage">
                <li>I stopnia</li>
              </Link>
              <Link className="nav__link" onClick={this.handleCloseClick} to="/iistage">
                <li>II stopnia</li>
              </Link>
              <Link className="nav__link" onClick={this.handleCloseClick} to="/postgraduate">
                <li>Podyplomowe</li>
              </Link>
              <Link className="nav__link" onClick={this.handleCloseClick} to="/trainings">
                <li>Szkolenia</li>
              </Link>
              <Link className="nav__link" onClick={this.handleCloseClick} to="/services">
                <li>Usługi</li>
              </Link>
            </ul>
            <img src={close} className="nav__close" onClick={this.handleCloseClick} alt="close" />
          </nav>
          <img
            src={hamburger}
            className="header__hamburger"
            onClick={this.handleHamburgerClick}
            alt="hamburger"
          />
        </div>
      </header>
    );
  }
}

export default Header;
