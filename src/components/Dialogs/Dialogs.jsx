import React from "react";
import col from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={col.dialogs}>
      <div className={col.dialogsItems}>
        <div className={col.active}>
          <NavLink to="dialog/1">Nikitosik</NavLink>
        </div>
        <div className={col.dialog}>
          <NavLink to="dialog/2">Dimon</NavLink>
        </div>
        <div className={col.dialog}>
          <NavLink to="dialog/3">Ira</NavLink>
        </div>
        <div className={col.dialog}>
          <NavLink to="dialog/4">Sergey</NavLink>
        </div>
        <div className={col.dialog}>
          <NavLink to="dialog/5">Alla</NavLink>
        </div>
        <div className={col.dialog}>
          <NavLink to="dialog/6">Lena</NavLink>
        </div>
        <div className={col.dialog}>
          <NavLink to="dialog/7">Ruslan</NavLink>
        </div>
      </div>
      <div className={col.messages}>
        <div className={col.message}>Hi! ^_^</div>
        <div className={col.message}>How are you?</div>
        <div className={col.message}>That nice!</div>
      </div>
    </div>
  );
};
export default Dialogs;
