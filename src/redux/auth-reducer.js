import { authAPI } from "../api/api";

const SET_USER_DATA = "S-n/auth/SET_USER_DATA";
//const GET_CAPTCHA_URL_SUCCES = "S-n/auth/GET_CAPTCHA_URL_SUCCES";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
 // captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
 //   case GET_CAPTCHA_URL_SUCCES:

      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

//const getCaptchaUrlSucces = (captchaUrl) => ({
 // type: GET_CAPTCHA_URL_SUCCES,
 // payload: { captchaUrl },
//});

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  if (response.data.resultCode === 0) {
    let { userId, email, login } = response.data.data;
    dispatch(setAuthUserData(userId, email, login, true));
  }
};
export const login =
  (email, password, rememberMe, setStatus, setFieldValue, setSubmitting) =>
    async (dispatch) => {
      let response = await authAPI.login(email, password, rememberMe);
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

/*export const login =
  (email, password, rememberMe, captcha) =>
    async (dispatch) => {
      let response = await authAPI.login(email, password, rememberMe, captcha);
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
        let textError = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      }
    };

export const getCaptchaUrl =
  () =>
    async (dispatch) => {
      const response = await securityAPI.getCaptchaUrl();
      const captchaUrl = response.data.url;
      dispatch(getCaptchaUrlSucces(captchaUrl));

    };
*/

export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};


export default authReducer;
