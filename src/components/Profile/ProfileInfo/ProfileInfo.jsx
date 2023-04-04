import React from "react";

import col from "./ProfileInfo.module.css";
import UserInfo from "../../UserInfo/UserInfo";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.timIjBFdAVRmBHxvXndHpQHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7" />
      </div>
      <div className={col.descriptionBlock}>
        {" "}
        <UserInfo userName="Kate" age="31" />
      </div>
    </div>
  );
};

export default ProfileInfo;
