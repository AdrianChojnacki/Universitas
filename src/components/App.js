import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./js/Header";
import Home from "./js/Home";
import Istage from "./dummy-pages/Istage";
import IIstage from "./dummy-pages/IIstage";
import Postgraduate from "./dummy-pages/Postgraduate";
import Trainings from "./dummy-pages/Trainings";
import Services from "./dummy-pages/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
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
