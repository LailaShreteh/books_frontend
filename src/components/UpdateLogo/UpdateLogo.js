import React, { useState } from "react";
import LogoImage from "./UpdateLogo.png";
import PopUp from "./PopUp.js";

import "./UpdateLogo.css";

function UpdateLogo(data) {
  const [seen, setSeen] = useState(false);
  const togglePop = () => {
    setSeen(!seen);
  };
  return (
    <div>
      <div className="ma4 mt0" onClick={togglePop}>
        <button style={{ height: 50, width: 50 }} className="btn">
          <img style={{ paddingTop: "5px" }} alt="logo" src={LogoImage}></img>
        </button>
      </div>
      {seen ? <PopUp choose_={data.choose_} toggle={togglePop} /> : null}
    </div>
  );
}
export default UpdateLogo;
