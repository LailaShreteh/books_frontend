import React from "react";

const Navigation = ({
  onRouteChange,
  isSignedIn,
  isBooksPage,
  isAuthorsPage,
}) => {
  if (isSignedIn) {
    if (isBooksPage || isAuthorsPage) {
      return (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signout")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign Out
          </p>
          <p
            onClick={() => onRouteChange("home")}
            className="f3 link dim black underline pa3 pointer"
          >
            Go Back
          </p>
        </nav>
      );
    } else {
      return (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            onClick={() => onRouteChange("signout")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign Out
          </p>
        </nav>
      );
    }
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa3 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
