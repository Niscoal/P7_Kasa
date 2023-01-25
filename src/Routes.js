import React from "react";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/logement" element={<Logement />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/notFound" element={<NotFound />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
