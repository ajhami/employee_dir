import React from "react";
import logo from "./../../logo.svg";
import "./style.css";

function Footer() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="col navLogoDiv">
                <p className="footerText">
                    Powered by React.js
                    <img className="navLogo" src={logo} alt="App Logo" />
                </p>
            </div>
        </nav>
    )
}





export default Footer;