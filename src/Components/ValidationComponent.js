import React from "react";

const validation = (props) => {
  let validationMessage = "Text Long Enough";

  if (props.inputLength <= 5) {
    validationMessage = "Text Too Short";
  }
  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );

  //   return (
  //     // <div>
  //     //   {props.inputLength < 5 ? <p>Text too Short</p> : <p>Text Long Enough</p>}
  //     // </div>
  //   );
};

export default validation;
