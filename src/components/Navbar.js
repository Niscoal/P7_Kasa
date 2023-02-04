import React from "react";
import logo from "../assets/header_logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <Link to="/Home">
                <img src={logo} alt="logo Kasa" className="logo"></img>
            </Link>
            <nav>
                <Link to="/Home">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </header>
    );
};

export default Navbar;
