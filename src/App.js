import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter,Route } from 'react-router-dom';
import Signup from "./components/UsersignupComponent";

class App extends Component {
   render() {
    return (
      <BrowserRouter>
      <div>
      <Route>
      <Route exact path="/" component={Main} />
      <Route path="/home" component={Main} />
      <Route path="/signup" component={Signup} />
      </Route>
      </div>
      </BrowserRouter>
    );
   }

}

export default App;
