import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Carousel extends Component {
  render() {
    return (
      <div className="container">
        <div id="landing-header">
          <h1>We are here to take care of you</h1>
          <p className="tm-quote mah-white">
            “It is health that is the real wealth, and not pieces of gold and
            silver.” <br></br>– Mahatma Gandhi
          </p>
          <Button size="lg" className="button1">
            <Link to="/home">Get Started</Link>
            
          </Button>
          <Button size="lg" className="button2">
            <Link to="../https://localhost:3000">Pharmacy Store</Link>
          </Button>
        </div>
        <ul className="slideshow">
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
