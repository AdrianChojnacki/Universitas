import React from "react";
import "./App.scss";
import Nav from "./Nav";
import Home from "./Home";
import Istage from "./Istage";
import IIstage from "./IIstage";
import Postgraduate from "./Postgraduate";
import Trainings from "./Trainings";
import Services from "./Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/istage" component={Istage} />
          <Route path="/iistage" component={IIstage} />
          <Route path="/postgraduate" component={Postgraduate} />
          <Route path="/trainings" component={Trainings} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
