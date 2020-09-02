import React from "react";
import { Switch, Route } from "react-router-dom";

import Properties from "./Properties";
import AddProperty from "./AddProperty";
import NavBar from "./NavBar";
import Home from "./Home";

import "../styles/App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
