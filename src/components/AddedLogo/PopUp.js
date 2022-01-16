import React, { useState } from "react";
import AddedWindow from "../AddedWindow/AddedWindow";
import AddedWindowAuthor from "../AddedWindowAuthor/AddedWindowAuthor";

function PopUp(data) {
  const [choose, setChoose] = useState(data.choose_);

  console.log(choose);
  const handleClick = () => {
    data.toggle();
  };

  return (
    <div className="modal">
      <div className="modal_content">
        {choose === "book" ? <AddedWindow /> : <AddedWindowAuthor />}
        <span className="close" onClick={handleClick}>
          &times;{" "}
        </span>
      </div>
    </div>
  );
}
export default PopUp;
