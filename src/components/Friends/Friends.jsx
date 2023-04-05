import React from "react";
import Friend from "./Friend";

const Friends = (props) => {
  let friends = [
    <Friend name="Nikitosik" />,
    <Friend name="Ruslan" />,
    <Friend name="Ira" />,
    <Friend name="Sergey" />,
    <Friend name="Lena" />,
    <Friend name="Dimon" />,
    <Friend name="Alla" />,
  ];
  return <div>{friends}</div>;
};

export default Friends;
