import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Properties from "./Properties";
import AddProperty from "./AddProperty";
import NavBar from "./NavBar";
const App = () => {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
