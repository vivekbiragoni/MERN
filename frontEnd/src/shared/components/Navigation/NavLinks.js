import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
// import reactRouterDom from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>All Users</NavLink>
      </li>
      <li>
        <NavLink to="/u1/places">My places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add places</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
