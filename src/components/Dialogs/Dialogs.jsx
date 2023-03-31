import React from "react";
import col from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "dialogs/" + props.id;
  return (
    <div className={col.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={col.dialogs}>
      <div className={col.dialogsItems}>
        <DialogItem name="Nikitosik" id="1" />
        <DialogItem name="Dimon" id="2" />
        <DialogItem name="Ira" id="3" />
        <DialogItem name="Sergey" id="4" />
        <DialogItem name="Alla" id="5" />
        <DialogItem name="Lena" id="6" />
        <DialogItem name="Ruslan" id="7" />
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