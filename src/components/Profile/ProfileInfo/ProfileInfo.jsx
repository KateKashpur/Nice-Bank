import React from "react";
import col from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/User.png";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  let alt_descriptionBlock = `photo_${profile.userId}`;

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

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
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
