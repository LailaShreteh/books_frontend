import React from "react";

import "./PopUp.js";
const PopUp = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}></span>
        {props.content}
      </div>
    </div>
  );
};

export default PopUp;
