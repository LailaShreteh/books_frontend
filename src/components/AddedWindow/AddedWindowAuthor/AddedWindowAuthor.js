import React, { useState, useEffect } from "react";
function AddedWindowAuthor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
 
  const onFirstChange = () => {
    setFirstName(event.target.value);
  };

  const onLastChange = () => {
    setLastName(event.target.value);
  };

  const onSubmitAdd = () => {
    fetch("http://localhost:3001/authors/new", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
      }),
    })
      .then((response) => response.json())
  };

  return (
    <article className="">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="NewBook" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">New Author</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                first_name:{" "}
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="firstName"
                name="firstName"
                id="firstName"
                onChange={onFirstChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="name">
                last_name:{" "}
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="lastName"
                name="lastName"
                id="lastName"
                onChange={onLastChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={onSubmitAdd}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Added"
            />
          </div>
        </div>
      </main>
    </article>
  );
}

export default AddedWindowAuthor;
