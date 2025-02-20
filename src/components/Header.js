import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import NucampLogo from "../app/assets/img/logo.png";

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={NucampLogo} alt="nucamp logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
