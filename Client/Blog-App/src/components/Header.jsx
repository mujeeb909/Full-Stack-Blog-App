import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <a href="" className="logo">
          <NavLink to="/"> Blog App </NavLink>
        </a>
        <nav>
          <a href="">
            <NavLink to="/login">Login</NavLink>
          </a>
          <a href="">
            <NavLink to="/register">Register</NavLink>
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
