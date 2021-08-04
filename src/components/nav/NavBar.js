import React, { useState} from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

export const NavBar = (props) => {

  const history = useHistory()

  let [isActive, setIsActive] = useState("home");
  
  const checkNavState = (navLocation) => {
      let activeClass = "";
      if (isActive === navLocation) {
        activeClass = "is-active"
      };

      return activeClass;
  };

  const handleLogout = (clickEvent) => {
      clickEvent.preventDefault()
      sessionStorage.removeItem("GoFigure_user")
      history.push("/login")
  };
  return (
  <>
<nav class="navbar is-info is-large" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <Link to="/">
      <img class="image is-64x64" src="./images/Logo.png"/>
      </Link>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <div class="navbar-item is-spaced has-dropdown is-hoverable">
        <a class="navbar-link">
          Build
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
          <Link to="/search">
          Search for Pieces
          </Link>
          </a>
          <a class="navbar-item">
            <Link to="/sketch">
            Sketch a Fig
            </Link>
          </a>
        </div>
      </div>

      <div class="navbar-item is-spaced has-dropdown is-hoverable">
        <a class="navbar-link">
          My Collection
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
          <Link to="/bricks">
          My Pieces
          </Link>
          </a>
          <a class="navbar-item">
            <Link to="/profile">
            My Minifigs
            </Link>
          </a>
        </div>
      </div>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <button class="button is-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>
  </>
  )
};
