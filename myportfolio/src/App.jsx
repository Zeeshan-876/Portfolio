import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Mynavbar from "./MyNavbar";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Mynavbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/services" component={Services} exact />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
