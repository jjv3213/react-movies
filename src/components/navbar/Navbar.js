import React from "react";
import { Link } from "@reach/router";

import { NavWrapper } from "./NavbarStyle";

const Navbar = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <h1>React Movies</h1>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;
