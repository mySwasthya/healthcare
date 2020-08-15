import React from "react";
import { Carousel } from "reactstrap";

function Testimonial(){
  return(
    <div className = "testcontainer">
      <Carousel controls = {false} indicators = {false} interval={4000}>
        <Carousel.Item>
          <div className="d-block w-100 carousel-background" />
        <Carousel.Caption>
          <img className="circular-image" src="/assets/images/userprofile.jpg" alt="First slide" />
          <div className = "carousel-detail">
            <p className = "description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p className = "name"><em>- Unknown</em></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
      <div className="d-block w-100 carousel-background" />
        <Carousel.Caption>
          <img className="circular-image" src="/assets/images/userprofile.jpg" alt="First slide" />
          <div className = "carousel-detail">
            <p className = "description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p className = "name"><em>- Unknown</em></p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    <Carousel.Item>
      <div className="d-block w-100 carousel-background" />
        <Carousel.Caption>
          <img className="circular-image" src="/assets/images/userprofile.jpg" alt="First slide" />
          <div className = "carousel-detail">
            <p className = "description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p className = "name"><em>- Unknown</em></p>
          </div>
        </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
  )
}

export default Testimonial;
