import React from "react";
import logoFooter from "../assets/footer_logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
