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
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="/notFound" element={<NotFound />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
