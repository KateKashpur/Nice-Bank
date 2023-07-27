import React from "react";
import { Field } from "formik";

export const createField = (placeholder, name, validators, component, props = {}, type) => (
  //export const createField = (name, type, props, placeholder) => (

  <div>
    <Field placeholder={placeholder} name={name} validators={validators} component={component} props={props} type={type}/>
  </div>
);
