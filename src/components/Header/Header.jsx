import React from "react";
import col from "./Header.module.css";

const Header = () => {
  return (
    <header className={col.header}>
      <img src="Logo.png" alt="logo" width={10}/>
    </header>
  );
};
export default Header;
