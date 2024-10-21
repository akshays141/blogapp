import React from "react";
import "./NavBar.css";
import blog_logo from "../Assets/blog_logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <img src={blog_logo} alt="" />
        <div className="links">
          <ul className="nav-list">
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/about"> ABOUT</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
            <li><NavLink to="/write">WRITE</NavLink></li>
            <li><NavLink to="/logout">LOGOUT</NavLink></li>
          </ul>
        </div>
        <div className="search">
          <input type="text" />
          <span class="material-symbols-outlined">search</span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
