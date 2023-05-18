import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducers.";
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer"


let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  friendPage: friendsReducer,
  auth: authReducer
});

let store = legacy_createStore(redusers);

window.store = store;

export default store;
