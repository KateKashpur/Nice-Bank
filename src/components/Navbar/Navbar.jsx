import React from "react";
import col from './Navbar.module.css';

const Navbar = () => {
  return   <nav className={col.nav}>
  <div className={col.item}>
    <a href="/profile">Profile</a>
  </div>
  <div className={`${col.item} ${col.active}`}>
    <a href="/dialogs">Message</a>
  </div>
  <div className={col.item}>
    <a href="/news">News</a>
  </div>
  <div className={col.item}>
    <a href="/music">Music</a>
  </div>
  <div className={col.item}>
    <a href="/settings">Settings</a>
  </div>
</nav>
}
export default Navbar;