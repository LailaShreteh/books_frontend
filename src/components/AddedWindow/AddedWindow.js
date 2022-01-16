import React, { useState, useEffect } from "react";
function AddedWindow() {
  const [title, setTitle] = useState("");
  const [isbn, setISBN] = useState("");
  const [author_id, setAuthorID] = useState("");
 
  const onISBNChange = () => {
    setISBN(event.target.value);
  };

  const onTitleChange = () => {
    setTitle(event.target.value);
  };

  const onAuthorIDChange = () => {
    setAuthorID(event.target.value);
  };

  const onSubmitAdd = () => {
    fetch("http://localhost:3001/books/new", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        isbn: isbn,
        title: title,
        author_id: author_id,
      }),
    })
      .then((response) => response.json())
  };

  return (
    <article className="">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="NewBook" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">New Book</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                ISBN:{" "}
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="isbn"
                name="isbn"
                id="isbn"
                onChange={onISBNChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Title:{" "}
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="Title"
                name="Title"
                id="Title"
                onChange={onTitleChange}
              />
            </div>
            <div className="mo3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                author_id:{" "}
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="author"
                name="author"
                id="author"
                onChange={onAuthorIDChange}
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

export default AddedWindow;
