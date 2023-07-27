import { Contact } from "./ProfileInfo";
import { Formik, Form } from "formik";
import { createField } from "../../common/FormsControls/FormsControls.js";
import col from "./ProfileInfo.module.css";

const ProfileDataForm = ({ profile, onSubmit}) => {
  return (
    <Formik
      initialValues={{
        fullName: null,
      }}
      onSubmit={onSubmit}
    >
      <Form >
        <div>
          <button type="onSubmit">save</button>
        </div>
        <div>
          <b>Full Name:</b>: {createField("Enter name", "fullName", [])}
        </div>
        <div>
          <b>Looking for a job:</b>
          {createField("lookingForAJob", "", [], "","","checkbox")}
        </div>
        {profile.lookingForAJob && (
          <div>
            <b>My professional skills:</b>
            {createField("added skills","lookingForAJobDescription",[],"","", "textarea")}
          </div>
        )}
        <div>
          <b>About me:</b> {createField("About me","aboutMe", "", "", "", "textarea" )}
        </div>
        <div>
          <b>Contacts:</b>
          {Object.keys(profile.contacts).map((key) => {
            return (
<div key={key} className={col.contact}>
  <b>{key}:{createField(key ,"contacts." + key, "", "","", "" )}</b>
</div>
            )
          })}
        </div>
      </Form>
    </Formik>
  );
};

export default ProfileDataForm;
