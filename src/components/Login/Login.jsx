import React from "react";
import { Formik, Form, Field, ErrorMessage  } from "formik";
import col from "./../../App.css"
import LoginForm from "../../Form";

/*const LoginForm = (props) => {
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
   return errors;
 }}
 onSubmit={(values, { setSubmitting }) => {
   setTimeout(() => {
     alert(JSON.stringify(values, null, 2));
     setSubmitting(false);
   }, 400);
 }}
     >
       {({ isSubmitting }) => (
         <Form className={col.form}>
           <Field type="email" name="email" placeholder={"Login"} className={col.input}/>
           <ErrorMessage name="email" component="div" />
           <Field type="password" name="password" placeholder={"Password"}/>
           <ErrorMessage name="password" component="div" />
           <div>
          <input type={"checkbox"} />
          remember me
        </div>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
  );
};*/
const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
