import React from "react";

import col from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={col.content}>
      <div>
        <img src="https://th.bing.com/th/id/OIP.timIjBFdAVRmBHxvXndHpQHaFj?w=235&h=180&c=7&r=0&o=5&pid=1.7" />
      </div>
      <div>ava+desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
