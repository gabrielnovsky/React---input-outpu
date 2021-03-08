import React from "react";

const userInput = (props) => {
  const inputStyle = {
    border: "2px solid blue",
  };

  return (
    <input
      type="text"
      style={inputStyle}
      onChange={props.userChange}
      value={props.currentUserName}
    />
  );
};

export default userInput;
