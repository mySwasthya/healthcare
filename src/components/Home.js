import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderCard = () => {
    return (
      <Card>
        <CardImg top width="100%" src="/assets/images/card.jpg" alt="Card Img" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <hr />
          <div className="card-footer-align">
            <CardSubtitle>Mat Vogels</CardSubtitle>
            <Button>
                <Link to="/">Read More</Link>
            </Button>
          </div>
        </CardBody>
      </Card>
    );
}

function Home() {
    return (
      <div className="vert-align">
        <div className="img-fluid img-home">
          <div id="landing-header">
            <h1>Let's do it together</h1>
            <p>We Believe Everyone Should Have Easy Access To Health Care</p>
            <Button size="lg" className="button1">
              <Link to="/">Healthy Lifestyle</Link>
            </Button>
          </div>
        </div>

        <div className="row card-space">
          <div className="col-12 col-sm-3 p-0">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-3 p-0">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-3 p-0">
            <RenderCard />
          </div>
        </div>
        <div className="row card-space">
          <div className="col-12 col-sm-3 p-0">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-3 p-0">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-3 p-0">
            <RenderCard />
          </div>
        </div>

        <div className="home-bottom">
            <div className="container">
                <div className="home-bottom-content">
                    Stay in Touch
                    <hr />
                    <div className="form-wrapper">
                        <form className="form-inline text-center">
                            <div className="form-group">
                                <label for="email" class="sr-only">Password</label>
                                <input type="email" class="form-control email-field" id="email" placeholder="Enter your email address"></input>
                            </div>
                            <button type="submit" class="btn btn-primary email-button">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Home;