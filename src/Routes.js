import React from "react";

import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/Logement" element={<Logement />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/NotFound" element={<NotFound />}></Route>
        </Routes>
    );
};

export default App;
