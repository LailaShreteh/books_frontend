import React, { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import BookList from "../BookList/BookList";
import AddedLogo from "../AddedLogo/AddedLogo";
import UpdateLogo from "../UpdateLogo/UpdateLogo";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/books/")
      .then((response) => response.json())
      .then((res) => {
        setBooks(res.books);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !books.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">BOOKS</h1>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <SearchBox
            className="f4 pa2 w-50 center"
            searchfield={"Search Book"}
            searchChange={onSearchChange}
          />
          <AddedLogo
            choose_="book"
            className="w-25 grow f4 link ph3 pv2 dib white bg-light-purple"
          />
          <UpdateLogo
            choose_="book"
            className="w-25 grow f4 link ph3 pv2 dib white bg-light-purple"
          />
        </div>
      </div>
      <Scroll>
        <BookList books={filteredBooks} />
      </Scroll>
    </div>
  );
}

export default BooksPage;
