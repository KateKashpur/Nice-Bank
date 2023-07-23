import React from "react";
import { Field } from "formik";

export const createField = (name, type, placeholder, props) => (
  <div>
    <Field name={name} type={type} placeholder={placeholder} props={props}/>
  </div>
);
