import React from "react";
import col from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={col.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={col.posts}>
        <Post message="Hi, how are you?" likesCount="11" />
        <Post message="I'ts my first post" likesCount="20" />
      </div>
    </div>
  );
};

export default MyPosts;
