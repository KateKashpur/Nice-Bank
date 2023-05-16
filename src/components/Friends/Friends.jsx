import React from "react";
import FriendsInfo from "./FriendsInfo";
import { NavLink } from "react-router-dom";

const Friends = (props) => {
  let path = "/friend/" + props.id;
  return (
    <div>
      <NavLink to={path}>{props.friendPage.name}</NavLink>
      <FriendsInfo friendPage={props.friendPage} />
    </div>
  );
};

export default Friends;
