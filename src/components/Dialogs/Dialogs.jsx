import React from "react";
import col from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Friends from "../Friends/Friends";


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sandMessage();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body)
  };

  return (
    <div className={col.dialogs}>
      <div className={col.dialogsItems}>{dialogsElements}</div>
      <div className={col.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
