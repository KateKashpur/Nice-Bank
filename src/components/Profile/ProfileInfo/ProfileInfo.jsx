import React from "react";

import col from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.timIjBFdAVRmBHxvXndHpQHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7" />
      </div>
      <div className={col.descriptionBlock}>ava+desc</div>
    </div>
  );
};

export default ProfileInfo;
