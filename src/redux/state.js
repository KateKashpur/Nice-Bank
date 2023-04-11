import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 11 },
        { id: 2, message: "I`ts my first post", likesCount: 20 },
        { id: 3, message: "YO", likesCount: 80 },
        { id: 4, message: "YO", likesCount: 80 },
        { id: 5, message: "YO", likesCount: 80 },
      ],
      newPostText: "YO",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi! ^_^itosik" },
        { id: 2, message: "How are yoy?" },
        { id: 3, message: "YO" },
        { id: 4, message: "YO" },
        { id: 5, message: "YO" },
        { id: 6, message: "YO" },
      ],

      dialogs: [
        { id: 1, name: "Nikitosik" },
        { id: 2, name: "Dimon" },
        { id: 3, name: "Ira" },
        { id: 4, name: "Sergey" },
        { id: 5, name: "Alla" },
        { id: 6, name: "Lena" },
        { id: 7, name: "Ruslan" },
      ],

      newMessageBody: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Nikitosik" },
        { id: 2, name: "Dimon" },
        { id: 3, name: "Ira" },
        { id: 4, name: "Sergey" },
        { id: 5, name: "Alla" },
        { id: 6, name: "Lena" },
        { id: 7, name: "Ruslan" },
      ],
    },
  },

  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
