import React from "react";
import Home from "./pages/Home";
import { Redirect } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
        </Routes>
    );
};

export default App;
