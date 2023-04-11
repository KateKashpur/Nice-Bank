const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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

      newMessageText: "Hi sunshine!",
    },
    sideBar: {
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

  _callSubsciber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubsciber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        LikesCount: 0,
      };
      this._state.profilePage.posts.unshift(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubsciber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubsciber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.unshift(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubsciber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newTextMess;
      this._callSubsciber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});


export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newTextMess: text,
});


export default store;

window.store = store;
