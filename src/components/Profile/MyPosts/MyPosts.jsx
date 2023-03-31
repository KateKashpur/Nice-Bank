import React from "react";
import col from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, message: "Hi, how are you?", likesKount: 11 },
    { id: 2, message: "I`ts my first post", likesKount: 20 },
  ];

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
        <Post
          message={postsData[0].message}
          likesCount={postsData[0].likesKount}
        />
        <Post
          message={postsData[1].message}
          likesCount={postsData[1].likesKount}
        />
      </div>
    </div>
  );
};

export default MyPosts;
