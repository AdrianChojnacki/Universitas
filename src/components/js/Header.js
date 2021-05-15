import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/">
          <img src={logo} className="header__logo" alt="logo" />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
