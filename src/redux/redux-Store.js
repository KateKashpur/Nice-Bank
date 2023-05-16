import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducers.";
import friendsReducer from "./friends-reducer";

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  friendPage: friendsReducer,
});

let store = legacy_createStore(redusers);

window.store = store;

export default store;
