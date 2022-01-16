import React, { useState } from "react";
import AuthorLogo from "./Author.png";

import "./Author.css";

function Author({ first_name, last_name }) {
  return (
    <div className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5">
      <img
        style={{ paddingTop: "5px", height: 150, width: 150 }}
        alt="books"
        src={AuthorLogo}
      />
      <div>
        <h2>{first_name}</h2>
        <h2>{last_name}</h2>
      </div>
    </div>
  );
}

export default Author;
