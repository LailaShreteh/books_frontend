import React, { Component } from "react";
import Particles from "react-tsparticles";
import Navigation from "../components/Navigation/Navigation";
import LogoBook from "../components/LogoBook/LogoBook";
import BooksPage from "../components/BooksPage/BooksPage";
import AuthorsPage from "../components/AuthorsPage/AuthorsPage";
import LogoAuthor from "../components/LogoAuthor/LogoAuthor";
import Register from "../components/Register/Register";
import Signin from "../components/Signin/Signin";

import "./App.css";

const particlesOptions = {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "signin" /*"signin",*/,
      isSignedIn: false,
      isBooksPage: false,
      isAuthorsPage: false,
      user: {
        id: "",
        name: "",
        email: "",
      },
    };
  }

  loadUser = (data) => {
    this.setState({
      user: {
        // id: data.id,
        name: data.name,
        email: data.email,
      },
    });
  };

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState({ isSignedIn: false });
      this.setState({ isBooksPage: false });
      this.setState({ isAuthorsPage: false });
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
      this.setState({ isBooksPage: false });
      this.setState({ isAuthorsPage: false });
    } else if (route === "booksPage") {
      this.setState({ isBooksPage: true });
    } else if (route === "authorsPage") {
      this.setState({ isAuthorsPage: true });
    }
    this.setState({ route: route });
  };

  render() {
    const {
      isSignedIn,
      isBooksPage,
      isAuthorsPage,
      route,
    } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
          isBooksPage={isBooksPage}
          isAuthorsPage={isAuthorsPage}
        />
        {route === "home" ? (
          <div>
            <p className="center f3">{"Are you Writer or Reader ?!"}</p>
            <div className="center">
              <LogoBook onRouteChange={this.onRouteChange} />
              <LogoAuthor onRouteChange={this.onRouteChange} />
            </div>
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : route === "booksPage" ? (
          <BooksPage onRouteChange={this.onRouteChange} />
        ) : route === "authorsPage" ? (
          <AuthorsPage onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
