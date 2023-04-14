import React from "react";
import col from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import Friends from "../Friends/Friends";
import {
  updateNewMessageBodyCreator,
  sandMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sandMessageCreator());
  };

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return <Dialogs updateNewMessageBody={onNewMessageChange} sandMessage={onSendMessageClick} dialogsPage={state}/>;
};

export default DialogsContainer;
