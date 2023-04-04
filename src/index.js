import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, message: "Hi, how are you?", likesCount: 11 },
  { id: 2, message: "I`ts my first post", likesCount: 20 },
  { id: 3, message: "YO", likesCount: 80 },
  { id: 4, message: "YO", likesCount: 80 },
  { id: 5, message: "YO", likesCount: 80 },
];

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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
