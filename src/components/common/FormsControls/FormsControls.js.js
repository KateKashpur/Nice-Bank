import React from "react";
import { Field } from "formik";

export const createField = (name, type, placeholder, id, props) => (
  <div>
    <Field name={name} type={type} placeholder={placeholder} id={id} props={props}/>
  </div>
);
