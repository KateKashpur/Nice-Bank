import {
  combineReducers,
  legacy_createStore,
  applyMiddleware,
  compose,
} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducers";
import friendsReducer from "./friends-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  friendPage: friendsReducer,
  auth: authReducer,
  app: appReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
// динамічно виділили з наявної функції те що вона повертає
//глобальний стейт
// @ts-ignore

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never

export type InferActionsTypes<T extends  {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesTypes<T>> 

const composeEnhancers = /*window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||*/
compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// @ts-ignore
window.___store___ = store;
// store.getState()

export default store;
