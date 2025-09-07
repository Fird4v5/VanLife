import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.png"

const HamburgerMenu = ({ links }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="hamburger-menu-wrapper">
      <img
        src={menu}
        alt="menu"
        className="nav-menu-icon"
        onClick={toggleMenu}
      />

      <ul className={`hamburger-menu ${open ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
