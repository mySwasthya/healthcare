import React, {Component}  from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Jumbotron} from 'reactstrap';

class Main extends Component {
  render() {
    return(
      <div>
        <Header />
        <Jumbotron >
          <div className="container">
            <div className="row row-header">
                
                <h1 className="">We are here to take care of you</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>

            </div>
          </div>
        </Jumbotron>

        <Footer />
      </div>
    );
  }
}

export default Main;

