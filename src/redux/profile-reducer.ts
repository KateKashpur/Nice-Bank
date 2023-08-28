import { PhotosType, PostType, ProfileType } from "../Types/Types";
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
    { id: 4, message: "YO", likesCount: 80 },
    { id: 5, message: "YO", likesCount: 80 },
  ] as Array<PostType>,
  newPostText: "YO",
  profile: null as ProfileType | null,
  status: "",
  /*profile: {
    photos: {
      small:
        "https://th.bing.com/th/id/R.619f2e7a7524e84c811dc01214dcd145?rik=MFLvremgN1j5MA&pid=ImgRaw&r=0",
      large:
        "https://th.bing.com/th/id/R.619f2e7a7524e84c811dc01214dcd145?rik=MFLvremgN1j5MA&pid=ImgRaw&r=0",
    },
    fullName: "Kate Kashpur",
    lookingForAJob: true,
    lookingForAJobDescription: "JS, React, Redux",
    aboutMe: "The samurai has no goal - only the path",
    contacts: {
      github: "github.com",
      facebook: "facebook.com",
      insta: "insta.com",
      telegram: "telegram.com",
      viber: "viber.com",
    },
  },*/
};

export type InitialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case ADD_POST: {
      let nextIdMessages = state.posts; //.lenght + 1;
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
        posts: state.posts, //.filter((p) => p.postId !== action.postId),
      };
    }

    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };

    default:
      return state;
  }
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  newPostText: string;
};

export const addPostActionCreator = (
  newPostText: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};

export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile,
});

type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number;
};

export const deletePost = (postId: number): DeletePostActionType => ({
  type: DELETE_POST,
  postId,
});

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};

export const savePhotoSuccess = (
  photos: PhotosType
): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getUserProfile = (userId: number) => async (dispatch: any) => {
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const saveProfile =
  (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
    }
  };

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.photos));
  }
};

export default profileReducer;
