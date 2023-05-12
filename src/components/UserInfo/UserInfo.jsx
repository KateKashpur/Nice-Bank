import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <h2>
        {props.userName} {props.img}
      </h2>
    </div>
  );
};

export default UserInfo;
