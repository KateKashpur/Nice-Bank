import React from "react";
import col from "./Post.module.css";

const Post = () => {
  return (
    <div className={col.item}>
      <img src="https://th.bing.com/th/id/OIP.sGaO2yMD4e8GUvoUX2pVigHaLH?pid=ImgDet&rs=1" />
      post1
      <div>
      <span>like</span>
      </div>

    </div>
  );
};

export default Post;
