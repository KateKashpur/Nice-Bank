import React from "react";
import col from "./Friends.module.css";

const FriendsInfo = (props) => {
  return (
    <div>
      <div className={col.friends}>
    <img src={props.friendPage.photo} width={50} height={50} border-radius={30}/>
    {props.friendPage.name}
      </div>
    </div>
  );
};

export default FriendsInfo;
