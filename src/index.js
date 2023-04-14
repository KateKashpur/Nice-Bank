import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-Store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Provider store ={store}>
        <App />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
};
rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

reportWebVitals();
