import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Carousel extends Component {
    render() {
        return (
          <div className="container">
            <div id="landing-header">
              <h1>We are here to take care of you</h1>
              <p>
                As a leading industry innovator, Dento is opening up exciting
                new opportunities for dental professionals, investors, employees
                &amp; suppliers. Contact us to find out what we have to offer
                you.
              </p>
              <Button size="lg" className="button1">
                <Link to="/home">Get Started</Link>
              </Button>
              <Button size="lg" className="button2">
                <Link to="">Visit Pharmacy Store</Link>
              </Button>
            </div>
            <ul class="slideshow">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        );
    }
}

export default Carousel;