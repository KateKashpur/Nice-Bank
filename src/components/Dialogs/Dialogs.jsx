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
  let dialogs = [
    { id: 1, name: "Nikitosik" },
    { id: 2, name: "Dimon" },
    { id: 3, name: "Ira" },
    { id: 4, name: "Sergey" },
    { id: 5, name: "Alla" },
    { id: 6, name: "Lena" },
    { id: 7, name: "Ruslan" },
  ];

  let messages = [
    { id: 1, message: "Hi! ^_^itosik" },
    { id: 2, message: "How are yoy?" },
    { id: 3, message: "YO" },
    { id: 4, message: "YO" },
    { id: 5, message: "YO" },
    { id: 6, message: "YO" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={col.dialogs}>
      <div className={col.dialogsItems}>{dialogsElements}</div>
      <div className={col.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
