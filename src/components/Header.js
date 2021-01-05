import React from "react";
import "../styles/style.css";
import rts_logo from "../assets/rts_logo.png";
import { Link } from "react-router-dom";

function Header() {
  const openTab = (evt) => {
    var tablinks;
    tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" current", "");
    }
    evt.currentTarget.className += " current";
  };

  return (
    <header>
      <nav id="navbar">
        <img src={rts_logo} alt="logo" height="67px" />
        <div className="container">
          <h1 className="logo">
            <a href="index.html">Rider Tracking System</a>
          </h1>
          <ul>
            <Link to="/">
              <li>
                <a className="tablink" href="/" onClick={openTab}>
                  Home
                </a>
              </li>
            </Link>

            <Link to="/covid_updates">
              <li>
                <a className="tablink" href="/" onClick={openTab}>
                  COVID-19 Updates
                </a>
              </li>
            </Link>
            <Link to="/riders">
              <li>
                <a className="tablink" href="/" onClick={openTab}>
                  Riders
                </a>
              </li>
            </Link>
            <Link to="/interactive_map">
              <li>
                <a className="tablink" href="/" onClick={openTab}>
                  COVID-19 Interactive Map
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li>
                <a className="tablink" href="/" onClick={openTab}>
                  Login
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
