import React from "react";
// import { Link } from "react-router-dom";
import logo from "./../../logo.svg";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="col navLogoDiv">
                <img className="navLogo" src={logo} alt="App Logo" />
            </div>
        </nav>
    )
}





export default Navbar;