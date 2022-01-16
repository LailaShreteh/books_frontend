import React, { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import AuthorList from "../AuthorList/AuthorList";
import AddedLogo from "../AddedLogo/AddedLogo";
import UpdateLogo from "../UpdateLogo/UpdateLogo";

function AuthorsPage() {
  const [authors, setAuthors] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/authors/")
      .then((response) => response.json())
      .then((res) => {
        setAuthors(res.authors);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredAuthors = authors.filter((author) => {
    return author.first_name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !authors.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">AUTHORS</h1>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <SearchBox
            className="f4 pa2 w-50 center"
            searchfield={"Search Author"}
            searchChange={onSearchChange}
          />
          <AddedLogo
            choose_="author"
            className="w-25 grow f4 link ph3 pv2 dib white bg-light-purple"
          />
          <UpdateLogo
            choose_="author"
            className="w-25 grow f4 link ph3 pv2 dib white bg-light-purple"
          />
        </div>
      </div>
      <Scroll>
        <AuthorList authors={filteredAuthors} />
      </Scroll>
    </div>
  );
}

export default AuthorsPage;
