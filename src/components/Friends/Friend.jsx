import React from "react";

const Friend = (props) => {
  return (
    <div>
      <img
        src="https://th.bing.com/th/id/R.86a2056fc602703342b1ec619c9d752b?rik=YKzVjRQH9xgPIw&pid=ImgRaw&r=0"
        width="30"
        alt="foto"
      />
      {props.name}
    </div>
  );
};

export default Friend;
