import { Contact } from "./ProfileInfo";
import { Formik, Form } from "formik";
import { createField } from "../../common/FormsControls/FormsControls.js";

const ProfileDataForm = ({ profile, onSubmit}) => {
  return (
    <Formik
      initialValues={{
        fullName: "Kate",
      }}
      onSubmit={onSubmit}
    >
      <Form >
        <div>
          <button type="onSubmit">save</button>
        </div>
        <div>
          <b>Full Name:</b>: {createField("Full name", "fullName", [])}
        </div>
        <div>
          <b>Looking for a job:</b>
          {createField("lookingForAJob", "checkbox", [])}
        </div>
        {profile.lookingForAJob && (
          <div>
            <b>My professional skills:</b>{" "}
            {createField("lookingForAJobDescription  ", "textarea")}
          </div>
        )}
        <div>
          <b>About me:</b> {createField("About me","textarea", "", "aboutMe" )}
        </div>
        <div>
          <b>Contacts:</b>{" "}
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </Form>
    </Formik>
  );
};

export default ProfileDataForm;
