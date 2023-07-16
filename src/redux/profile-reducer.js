import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 11 },
    { id: 2, message: "I`ts my first post", likesCount: 20 },
    { id: 3, message: "YO", likesCount: 80 },
    // { id: 4, message: "YO", likesCount: 80 },
    // { id: 5, message: "YO", likesCount: 80 },
  ],
  newPostText: "YO",
  profile: null,
  status: "...OLOLO...",
  profile: {
    photos: {
      small:
        "https://th.bing.com/th/id/R.619f2e7a7524e84c811dc01214dcd145?rik=MFLvremgN1j5MA&pid=ImgRaw&r=0",
      large:
        "https://th.bing.com/th/id/R.619f2e7a7524e84c811dc01214dcd145?rik=MFLvremgN1j5MA&pid=ImgRaw&r=0",
    },
  },
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case ADD_POST: {
      let nextIdMessages = state.posts.lenght + 1;
      let newPosts = {
        id: nextIdMessages + action.newPostText,
        message: action.newPostText,
        likesCount: 100,
      };
      return {
        ...state,
        posts: [...state.posts, newPosts],
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.postId !== action.postId),
      };
    }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export default profileReducer;
