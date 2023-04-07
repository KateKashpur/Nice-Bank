import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { addPost, updateNewPostText, addMessage, updateNewMessageText } from "./redux/State";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

//addPost('atata')
export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
      </React.StrictMode>
    </BrowserRouter>
  );
};
