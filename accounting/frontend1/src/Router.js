import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./scenes/Home/Home";
import About from "./scenes/About/About";
import Users from "./scenes/Users/Users";
import Header from "./components/Header"


const AppRouter = () => (
    <Router
        basename='/accounting/'
    >
        <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </div>
    </Router>
);

export default AppRouter;