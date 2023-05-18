import React from "react";
import col from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={col.header}>
      <img src="Logo.png" alt="logo" width={10}/>
      <div className={col.loginBlock}>
        {props.isAuth ? props.login  :
<NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};
export default Header;
