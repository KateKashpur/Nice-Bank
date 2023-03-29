import React from "react";
import col from './Navbar.module.css';

//let c1 = "item";
//let c2 = "active";
// "item active"
//let classes = c1 + " " c2 ;
//let classesNew = `${col.item} ${col.active}`;
 
const Navbar = () => {
  return   <nav className={col.nav}>
  <div className={col.item}>
    <a>Profile</a>
  </div>
  <div className={`${col.item} ${col.active}`}>
    <a>Message</a>
  </div>
  <div className={col.item}>
    <a>News</a>
  </div>
  <div className={col.item}>
    <a>Musik</a>
  </div>
  <div className={col.item}>
    <a>Settings</a>
  </div>
</nav>
}
export default Navbar;