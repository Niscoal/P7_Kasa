import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div className="body">
            <div className="container">
                <Navbar />
                <Outlet />
                {/* display child elements */}
            </div>
            <div className="footerDiv">
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
