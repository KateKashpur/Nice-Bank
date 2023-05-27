import { usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 11 },
    { id: 2, message: "I`ts my first post", likesCount: 20 },
    { id: 3, message: "YO", likesCount: 80 },
    { id: 4, message: "YO", likesCount: 80 },
    { id: 5, message: "YO", likesCount: 80 },
  ],
  newPostText: "YO",
  profile: null,
  profile: {
    aboutMe: "Goog girl",
    contacts: {
      facebook: "facebook.com",
      website: null,
      instagram: "instagram.com",
      github: "github.com",
      mainLink: null
    },
    lookingForAJob: "✔",
    lookingForAJobDescription : "wery true",
    fullName: "Kate Kashpur",
    userId:2,
    photos: {
      small: "https://th.bing.com/th/id/R.619f2e7a7524e84c811dc01214dcd145?rik=MFLvremgN1j5MA&pid=ImgRaw&r=0" ,
      large: "https://th.bing.com/th/id/R.619f2e7a7524e84c811dc01214dcd145?rik=MFLvremgN1j5MA&pid=ImgRaw&r=0"
    }
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        LikesCount: 0,
      };
      return { ...state, posts: [newPost, ...state.posts], newPostText: "" };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
case SET_USER_PROFILE: {
  return{...state, profile: action.profile}
}

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

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then((response) => {
    dispatch (setUserProfile(response.data))
  });
}

export default profileReducer;
