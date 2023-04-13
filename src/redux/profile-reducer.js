const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 11 },
      { id: 2, message: "I`ts my first post", likesCount: 20 },
      { id: 3, message: "YO", likesCount: 80 },
      { id: 4, message: "YO", likesCount: 80 },
      { id: 5, message: "YO", likesCount: 80 },
    ],
    newPostText: "YO",
  }


const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        LikesCount: 0,
      };
      state.posts.unshift(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
