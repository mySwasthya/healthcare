import React, {Component}  from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './HeaderComponent';
import Carousel from './Carousel';
import Contact from './Contact';

class Main extends Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
            <Route exact path="/" component={Carousel} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;

