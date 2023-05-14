import React from "react";
import col from "./ProfileInfo.module.css";
import UserInfo from "../../UserInfo/UserInfo"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://th.bing.com/th/id/R.593e9d7a356ba8b86562474b1fabf7db?rik=eXlRoRpFx7I39Q&pid=ImgRaw&r=0" width={900} height={300}/>
      </div>
      <div className={col.descriptionBlock}>
     <div className={col.userAvatar}>
      <img src="https://th.bing.com/th/id/R.619f2e7a7524e84c811dc01214dcd145?rik=MFLvremgN1j5MA&pid=ImgRaw&r=0" width={100} height={100}/>
     </div>
        Mekachefuka
      </div>
    </div>
  );
};

export default ProfileInfo;
