import React from "react";
import col from "./Post.module.css";

const Post = (props) => {
 
  return (
    <div className={col.item}>
      <img src="https://th.bing.com/th/id/OIP.sGaO2yMD4e8GUvoUX2pVigHaLH?pid=ImgDet&rs=1" />
     {props.message}
      <div>

     {props.like}
      <span>like</span>
      </div>

    </div>
  );
};

export default Post;
