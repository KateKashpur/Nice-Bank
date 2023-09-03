import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { validateEmailField } from "../../Utils/Validators/Validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import { createField } from "../common/FormsControls/FormsControls.js";
import { AppStateType } from "../../redux/redux-Store";

const LoginPage: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({
  isAuth,
  login,
}) => {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, "Must be longer than 2 characters")
      .max(100, "Must be shorter than 100 characters")
      .required("Required 2"),
  });
  if (isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div>
      <h3>LOGIN PAGE</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
          general: "",
        }}
        validate={validateEmailField}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          login(
            values.email,
            values.password,
            values.rememberMe,
            values.general
          );
        }} //captchaUrl = {props.captchaUrl}
      >
        {(props) => {
          let { status, values, isSubmitting } = props;

          //console.log( status );
          //console.log( values.general );
          console.log(props.isSubmitting);

          return (
            <Form>
              <div>
                {values.general && (
                  <div>_.{values.general} - with setFieldValue</div>
                )}

                {status && <div>..{status} - with setStatus</div>}
                {createField("e-mail", "email", [], "", "", "text")}
                {createField("password", "password", [], "", "", "password")}
                {createField(
                  "rememberMe",
                  "",
                  [],
                  "",
                  "rememberMe",
                  "checkbox"
                )}
                <label htmlFor={"rememberMe"}> remember me </label>
                <button type={"submit"} disabled={isSubmitting}>
                  {isSubmitting ? "Please wait..." : "LOGIN"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

type MapDispatchToPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

type MapStateToPropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
const LoginPageConnect = connect(mapStateToProps, { login })(LoginPage);

export default LoginPageConnect;
