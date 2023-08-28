import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "S-n/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCES = "S-n/auth/GET_CAPTCHA_URL_SUCCES";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCES:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

type SetAuthUserDataActionPayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataActionPayloadType;
};

const setAuthUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

//type GetCaptchaUrlSuccesPayloadType = {
// captchaUrl: string | null
//}

type GetCaptchaUrlActionSuccesType = {
  type: typeof GET_CAPTCHA_URL_SUCCES;
  payload: { captchaUrl: string }; //GetCaptchaUrlSuccesPayloadType
};

const getCaptchaUrlSucces = (
  captchaUrl: string
): GetCaptchaUrlActionSuccesType => ({
  type: GET_CAPTCHA_URL_SUCCES,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { userId, email, login } = response.data.data;
    dispatch(setAuthUserData(userId, email, login, true));
  }
};
/*export const login =
  (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string,
    setStatus: any,
    setFieldValue: any,
    setSubmitting: any
  ) =>
  async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    let resultCode = response.data.resultCode;
    if (resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      let textError = `resultCode: ${resultCode} - ${response.data.messages.join()}`;

      setStatus(textError);
      setFieldValue("general", textError);
      setSubmitting(false);
    }
  };
*/
export const login =
  (
    email: string | null,
    password: string | null,
    rememberMe: boolean,
    captcha: string | null
  ) =>
  async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      //     let textError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
    }
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSucces(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
