import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
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
          <Button>
            <Link to="/">Link</Link>
          </Button>
        </CardBody>
      </Card>
    );
}

function Home() {
    return (
        <div className="vert-align">
            <img src="/assets/images/home.jpg" className="img-fluid img-home" />
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
        </div>
    );
}

export default Home;