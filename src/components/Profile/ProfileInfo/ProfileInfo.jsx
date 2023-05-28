import React from "react";
import col from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img
          src="https://th.bing.com/th/id/R.593e9d7a356ba8b86562474b1fabf7db?rik=eXlRoRpFx7I39Q&pid=ImgRaw&r=0"
          width={900}
          height={300}
        />
      </div>
      <div>
        <img src={props.profile.photos.large} width={300} height={300} />
        Mekachefuka
      
      </div>
    </div>
  );
};

export default ProfileInfo;
