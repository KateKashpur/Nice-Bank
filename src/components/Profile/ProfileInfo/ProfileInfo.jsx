import React,{useState}from "react";
import col from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  let alt_descriptionBlock = `photo_${props.profile.userId}`;


  return (
    <div>
      <div className={col.photoBlock}>
        <img className={col.wallpapper}
          src="https://th.bing.com/th/id/R.593e9d7a356ba8b86562474b1fabf7db?rik=eXlRoRpFx7I39Q&pid=ImgRaw&r=0"
          alt = "wallpapper" />
  </div>
      <div className={col.descriptionBlock}>
        <img className={col.avatar} src={props.profile.photos.small} alt={alt_descriptionBlock} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
