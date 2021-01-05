import React from 'react'
import '../styles/style.css';
import rts_logo from "../assets/rts_logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav id="navbar">
                <img src={rts_logo} alt="logo" height="67px" />
                <div className="container">
                    <h1 className="logo"><a href="index.html">Rider Tracking System</a></h1>
                    <ul>
                        <Link to="/">
                            <li><a className="current" href="index.html">Home</a></li>
                        </Link>

                        <Link to="/covid_updates">
                            <li><a href="covid19_updates.html">COVID-19 Updates</a></li>
                        </Link>
                        <li><a href="riders.html">Riders</a></li>
                        <Link to="/interactive_map">
                            <li><a href="interactive_map.html">COVID-19 Interactive Map</a></li>
                        </Link>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
