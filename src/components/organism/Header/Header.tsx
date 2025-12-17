import React from "react";
import NavBar from "./NavBar";
import Container from "../../common/Container";

const Header = () => {
  return (
    <header className="absolute w-full pt-4 z-50">
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
