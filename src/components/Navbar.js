import React from "react";
import logo from "../assets/header_logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <Link to="/Home">
                <img src={logo} alt="logo Kasa" className="logo"></img>
            </Link>
            <nav>
                <NavLink
                    to="/Home"
                    className={({ isActive }) =>
                        isActive ? "linkHome current" : "linkHome"
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/About"
                    className={({ isActive }) =>
                        isActive ? "linkAbout current" : "linkAbout"
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
