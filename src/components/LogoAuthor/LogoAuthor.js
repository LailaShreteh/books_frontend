import React from "react";
import Tilty from "react-tilty";
import LogoImage from "./LogoAuthor.png";

import "./LogoAuthor.css";

class LogoAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onChooseAuthors = () => {
    this.props.onRouteChange("authorsPage");
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <div className="ma4 mt0">
        <Tilty
          className="Tilt shadow-2"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <button className="btn" onClick={this.onChooseAuthors}>
            <img alt="logo" src={LogoImage}></img>
          </button>
        </Tilty>
      </div>
    );
  }
}
export default LogoAuthor;
