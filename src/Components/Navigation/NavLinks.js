import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/About">ABOUT ME</NavLink>
      </li>
      <li>
        <NavLink to="/Portfolio">PORTFOLIO</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">CONTACT</NavLink>
      </li>
      <li>
        <NavLink to="/auth">LOGIN</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
