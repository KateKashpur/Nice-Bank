import React from "react";
import { Formik, Form, ErrorMessage  } from "formik";
import col from "./../../App.css"
const LoginForm = (props) => {
  return (
<Formik
       initialValues={{ login: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.login) {
           errors.login = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)
         ) {
           errors.login = 'Invalid login';
         }
         return errors
       }}
       onSubmit={(values) => {
        console.log(values);
      }}
     >
       {({ isSubmitting }) => (
         <Form className={col.form}>
        <div>
          <input placeholder={"Login"} className={col.input}/>
        </div>
        <div>
          <input placeholder={"Password"} />
        </div>
        <div>
          <input type={"checkbox"} />
          remember me
        </div>
        <div>
          <button>login</button>
          <ErrorMessage name="login" component="div" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </div>
         </Form>
       )}
     </Formik>

       /* <Formik
      initialValues={{ login: "", password: "" }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <div>
          <div>
            <input placeholder={"Login"} />
          </div>
          <div>
            <input placeholder={"Password"} />
          </div>
          <div>
            <input type={"checkbox"} />
            remember me
          </div>
          <div>
            <button>login</button>
          </div>
        </div>
      )}
    </Formik>*/
    /*     <form>
        <div>
          <input placeholder={"Login"} />
        </div>
        <div>
          <input placeholder={"Password"} />
        </div>
        <div>
          <input type={"checkbox"} />
          remember me
        </div>
        <div>
          <button>login</button>
        </div>
      </form>*/
  );
};
const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
