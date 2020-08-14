import React, {Component}  from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './HeaderComponent';
import Carousel from './Carousel';
import Home from './Home';
import Contact from './Contact';
import About from './AboutComponent';
import Signup from './UsersignupComponent';
import Services from './Services';
import Health from './Health';

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
          <Route exact path="/contact" component={Contact} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/health" component={Health} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;

