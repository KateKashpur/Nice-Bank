import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducers.";
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"

let redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  friendPage: friendsReducer,
  auth: authReducer
});

let store = legacy_createStore(redusers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
