import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Carousel extends Component {
    render() {
        return(
            <div className="container">
                <div id="landing-header">               
                    <h1>We are here to take care of you</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uconsequat.</p>
                    <Button size="lg" className="button1">Get Started</Button>
                    <Button size="lg" className="button2">Visit Pharmacy Store</Button>
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