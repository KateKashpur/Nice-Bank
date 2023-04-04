import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <h2>
        {props.userName} {props.age}
      </h2>
    </div>
  );
};

export default UserInfo;
