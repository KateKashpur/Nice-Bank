let rerenderEntireTree = () => {
 console.log('state changed');
}
let state = {
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
};

window.state = state;


export const addPost = () => {
  let newPost = {
    id: 6,
    message: state.profilePage.newPostText,
    LikesCount: 0,
  };
  state.profilePage.posts.unshift(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.messages.unshift(newMessage);
  state.dialogsPage.newMessageText = "";
  rerenderEntireTree(state);
};

export let updateNewMessageText = (newTextMessage) => {
  state.profilePage.newPostText = newTextMessage;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree =observer;
}

export default state;
