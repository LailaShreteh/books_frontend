import React, { useState } from "react";
import BookLogo from "./Book.png";
import PopUp from "../PopUp/PopUp";
import "./Book.css";

function Book({ isbn, title, authorNames }) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="tc grow bg-light-blue br3 pa3 ma2 dib bw2 shadow-5"
      onClick={togglePopup}
    >
      <img
        style={{ paddingTop: "5px", height: 150, width: 150 }}
        alt="books"
        src={BookLogo}
      />
      <div>
        <h2>{title}</h2>
        {isOpen && (
          <PopUp
            content={
              <>
              <h2> ISBN: {isbn}</h2>
              <h2>authors: {authorNames}</h2>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}

export default Book;
