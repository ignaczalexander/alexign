import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
