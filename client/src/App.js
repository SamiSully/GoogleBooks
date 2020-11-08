import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route path="/" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
