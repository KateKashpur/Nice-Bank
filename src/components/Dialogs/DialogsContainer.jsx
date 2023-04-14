import React from "react";
import {
  updateNewMessageBodyCreator,
  sandMessageCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import MyContext from "../../storeContext";

const DialogsContainer = () => {
  return (
    <MyContext.Consumer>
      {(store) => {
        let onSendMessageClick = () => {
          store.dispatch(sandMessageCreator());
        };
      
        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sandMessage={onSendMessageClick}
            dialogsPage={store.getState().dialogsPage}
          />
        );
      }}
    </MyContext.Consumer>
  );
};

export default DialogsContainer;
