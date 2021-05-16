import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import Nav from "./Nav";

class Header extends Component {
  state = {
    scrolled: false,
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
          <Nav />
        </div>
      </header>
    );
  }
}

export default Header;
