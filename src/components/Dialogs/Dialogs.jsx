import React from "react";
import col from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Friends from "../Friends/Friends";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/State"


const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} img={d.img} />
  ));
  
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    let action= updateNewMessageActionCreator(text)
    props.dispatch(action)
  };

  return (
    <div className={col.dialogs}>
      <div className={col.dialogsItems}>{dialogsElements}</div>
      <div className={col.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.NewMessageText}
        
          />
        </div>
        <div>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
