import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              exact
              path="/profile"
              element={<Profile posts={props.posts} />}
            />
            <Route
              exact
              path="/dialogs/"
              element={
                <Dialogs dialogs={props.dialogs} messages={props.messages} />
              }
            />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
