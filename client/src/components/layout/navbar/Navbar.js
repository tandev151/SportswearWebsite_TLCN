import React from "react";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <NavbarTop />
        <NavbarBottom />
      </div>
    </div>
  );
};

export default Navbar;
