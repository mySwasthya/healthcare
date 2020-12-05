import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Carousel from "./Carousel";
import Home from "./Home";
import Contact from "./Contact";
import About from "./AboutComponent";
import Signup from "./SignupCpnt";
import Services from "./Services";
import Health from "./Health";
import Login from "./LoginComponent";
import Appointment from "./Appointment";
import Dashboard from "./Dashboard";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Carousel} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;
