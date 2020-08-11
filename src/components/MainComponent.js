import React, {Component}  from 'react';
import Header from './HeaderComponent';
import Carousel from './Carousel';

class Main extends Component {
  render() {
    return(
      <div>
        <Header />
        <Carousel />
      </div>
    );
  }
}

export default Main;

