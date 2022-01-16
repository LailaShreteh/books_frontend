import React from "react";
import Tilty from "react-tilty";
import LogoImage from "./LogoBook.png";

import "./LogoBook.css";

class LogoBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onChooseBooks = () => {
    this.props.onRouteChange('booksPage');
  }

  // componentDidMount() {
  //   fetch("http://localhost:3001/books")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       this.setState({ books: users });
  //     });
  // }

  //const filteredBooks = books.filter((book) => {
  //  return book.name.toLowerCase().includes(searchfield.toLowerCase());});

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="ma4 mt0">
        <Tilty
          className="Tilt shadow-2"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <button className="btn" onClick={this.onChooseBooks}>
            <img
              style={{ height: 150, width: 150 }}
              alt="logo"
              src={LogoImage}
            ></img>
          </button>
        </Tilty>
      </div>
    );
  }
}

export default LogoBook;
