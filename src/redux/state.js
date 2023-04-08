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

getState(){

  return this._state
},

  _callSubsciber() {
    console.log("state changed");
  },

  addPost() {

    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      LikesCount: 0,
    };
    this._state.profilePage.posts.unshift(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubsciber(this._state);
  },

  updateNewPostText(newText) {
   
    this._state.profilePage.newPostText = newText;
    this._callSubsciber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.unshift(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubsciber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubsciber(this._state);
  },

  subscribe(observer) {
    this._callSubsciber = observer;
  },
};

export default store;

window.store = store;
