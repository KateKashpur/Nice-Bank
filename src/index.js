import "./index.css";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
} from "./redux/State";

const root = ReactDOM.createRoot(document.getElementById("root"));

//addPost('atata')
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMessage={addMessage}
          updateNewMessageText={updateNewMessageText}
        />
      </React.StrictMode>
    </BrowserRouter>
  );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
