import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import col from "./../../App.css";
import * as Yup from "yup";

const validateLoginForm = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required *";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }
  return errors;
};
const validationSchemaLoginForm = Yup.object().shape({
  password: Yup.string()
    .min(2, "Must be longer than 2 characters")
    .max(5, "Must be shorter than 5 characters")
    .required("Required 2"),
});
const Login = (props) => {
  return (
    <div>
      <h3>LOGIN</h3>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validate={validateLoginForm}
        validationSchema={validationSchemaLoginForm}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className={col.form}>
            <div>
              <Field
                name="email"
                type="text"
                placeholder={"e-mail"}
                className={col.input}
              />
            </div>
            <ErrorMessage name="email" component="div" />
            <div>
              <Field name="password" type="password" placeholder={"password"} />
            </div>
            <ErrorMessage name="password" component="div" />
            <div>
              <Field type={"checkbox"} name={"rememberMe"} id="rememberMe" />
              <label htmlFor={"rememberMe"}> remember me </label>
            </div>
            <button type={"submit"}>Login</button>
          </Form>
        )}
      </Formik>
      <div>...</div>
    </div>
  );
};

export default Login;
