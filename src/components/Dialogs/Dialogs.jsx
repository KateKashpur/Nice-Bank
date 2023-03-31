import React from "react";
import col from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={col.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={col.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Nikitosik" },
    { id: 2, name: "Dimon" },
    { id: 3, name: "Ira" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Alla" },
    { id: 6, name: "Lena" },
    { id: 7, name: "Ruslan" },
  ];

  let messagesData = [
    { id: 1, message: "Hi! ^_^itosik" },
    { id: 2, message: "How are yoy?" },
    { id: 3, message: "YO" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
    { id: 6, message: "YO" },
  ];

  return (
    <div className={col.dialogs}>
      <div className={col.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name="Dimon" id="2" />
        <DialogItem name="Ira" id="3" />
        <DialogItem name="Sergey" id="4" />
        <DialogItem name="Alla" id="5" />
        <DialogItem name="Lena" id="6" />
        <DialogItem name="Ruslan" id="7" />
      </div>
      <div className={col.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
      </div>
    </div>
  );
};
export default Dialogs;
