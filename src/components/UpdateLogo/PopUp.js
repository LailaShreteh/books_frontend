import React, { useState } from "react";
import UpdateWindowBook from "../UpdateWindowBook/UpdateWindowBook";
import UpdateWindowAuthor from "../UpdateWindowAuthor/UpdateWindowAuthor";
function PopUp(data) {
  const [choose, setChoose] = useState(data.choose_);
  console.log(choose)
  const handleClick = () => {
    data.toggle();
  };

  return (
    <div className="modal">
      <div className="modal_content">
        {choose === "book" ? <UpdateWindowBook /> : <UpdateWindowAuthor />}
        <span className="close" onClick={handleClick}>
          &times;{" "}
        </span>
      </div>
    </div>
  );
}
export default PopUp;
