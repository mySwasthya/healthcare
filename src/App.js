import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import history from './history';



class App extends Component {
   render() {
    return (
      <BrowserRouter history={history}>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
   }

}

export default App;
