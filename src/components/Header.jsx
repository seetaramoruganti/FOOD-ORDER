import React from "react";

import logoImg from "../assets/logo.jpg";
import Button from "../components/UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A Restaurant Logo" />
        <h1>Mama' s Restaurant</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
