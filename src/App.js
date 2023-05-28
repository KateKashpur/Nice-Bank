import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path={"/profile/:userId"}
            element={<ProfileContainer />}
          />
           <Route
            path="/profile/"
            element={<ProfileContainer />}
          />
          <Route
            exact
            path="/dialogs/"
            element={<DialogsContainer />}
          />
             <Route
            exact
            path="/users"
            element={<UsersContainer />}
          />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/music" element={<Music />} />
          <Route exact path="/settings" element={<Settings />} />
          <Route exact path="/friends" element={<Friends />} />
          <Route
            path="/login/"
            element={<Login />}
          />
        </Routes>
      </div>
    </div>
  );
};
export default App;
