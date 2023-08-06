import React, { useState } from "react";
import col from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/User.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />;
  }
  let alt_descriptionBlock = `photo_${profile.userId}`;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      ()=>{    setEditMode(false)
      }
    )
  }

  return (
    <div>
      <div className={col.photoBlock}>
        <img
          className={col.wallpapper}
          src="https://th.bing.com/th/id/R.593e9d7a356ba8b86562474b1fabf7db?rik=eXlRoRpFx7I39Q&pid=ImgRaw&r=0"
          alt="wallpapper"
        />
      </div>
      <div className={col.descriptionBlock}>
        <img
          className={col.avatar}
          src={profile.photos.small || userPhoto}
          alt={alt_descriptionBlock}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        {editMode ? (
          <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
        ) : (
          <ProfileData goToEditMode={()=>{setEditMode(true)}} profile={profile} isOwner={isOwner}/>
        )}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
     {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div>
        <b>Full Name:</b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me:</b> {profile.aboutMe}
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
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={col.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};
export default ProfileInfo;
