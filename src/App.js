import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
   render() {
    return (
      <BrowserRouter> 
            <Main />
      </BrowserRouter>
    );
   } 
   
}

export default App;
