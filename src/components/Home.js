import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Footer from "./FooterComponent";

const RenderCard = () => {
    return (
      <Card>
        <CardImg top width="100%" src="/assets/images/Card.jpg" alt="Card Img" />
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
              <Link to="/health">Stay Healthy</Link>
            </Button>
          </div>
        </div>

        <div className="home-section">
          <div>
            <div className="home-head">
              <i className="fa fa-globe fa-4x" aria-hidden="true"></i>
              <span className="home-header"> Our Work</span>
              <hr />
            </div>
            <div className="home-content">
              <div className="row">
                <div className="col-12 col-md-7 order-2 order-md-1">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio laboriosam, laudantium cupiditate rem
                    eveniet at quae officiis ut accusantium animi nihil! Expedita iure autem ipsam impedit non culpa obcaecati enim.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, accusamus cum! Dolorum iure
                    obcaecati laborum sit ullam illo sed et iste, eligendi corporis placeat repellendus, aliquam porro ratione expedita omnis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eum natus optio quia expedita tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, natus esse quam eveniet dolorem
                    deleniti repellat nostrum at? Deserunt ratione culpa modi accusantium magnam cumque quod eligendi eos nihil neque.</p>
                </div>
                <div className="col-12 col-md-5 order-1 order-md-2">
                  <img src="/assets/images/work.jpg" alt="Medicines Image" className="img-fluid img-height rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-section">
          <div>
            <div className="home-head">
              <i className="fa fa-heartbeat fa-4x" aria-hidden="true"></i>
              <span className="home-header"> Speciality</span>
              <hr />
            </div>
            <div className="home-content">
              <div className="row">
                <div className="col-12 col-md-5">
                  <img src="/assets/images/main1.jpg" alt="Medicines Image" className="img-fluid img-height rounded" />
                </div>
                <div className="col-12 col-md-7">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio laboriosam, laudantium cupiditate rem
                    eveniet at quae officiis ut accusantium animi nihil! Expedita iure autem ipsam impedit non culpa obcaecati enim.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, accusamus cum! Dolorum iure
                    obcaecati laborum sit ullam illo sed et iste, eligendi corporis placeat repellendus, aliquam porro ratione expedita omnis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eum natus optio quia expedita tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, natus esse quam eveniet dolorem
                    deleniti repellat nostrum at? Deserunt ratione culpa modi accusantium magnam cumque quod eligendi eos nihil neque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="home-section home-section-back">
          <div>
            <div className="home-head">
              <i className="fa fa-briefcase fa-4x" aria-hidden="true"></i>
              <span className="home-header"> Services</span>
              <hr />
            </div>
            <div className="home-content">
              <div className="row">
                <div className="col-12 col-md-6 order-2 order-md-1">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio laboriosam, laudantium cupiditate rem
                    eveniet at quae officiis ut accusantium animi nihil! Expedita iure autem ipsam impedit non culpa obcaecati enim.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, accusamus cum! Dolorum iure
                    obcaecati laborum sit ullam illo sed et iste, eligendi corporis placeat repellendus, aliquam porro ratione expedita omnis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam eum natus optio quia expedita tempore.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, natus esse quam eveniet dolorem
                    deleniti repellat nostrum at? Deserunt ratione culpa modi accusantium magnam cumque quod eligendi eos nihil neque.</p>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2">
                  <div className="row icons">
                    <div className="col-4">
                      <i className="fas fa-laptop-medical fa-3x"></i>
                      <div>Online Healthcare</div>
                    </div>
                    <div className="col-4">
                      <i className="fas fa-hand-holding-medical fa-3x"></i>
                      <div>Contactless Guidance</div>
                    </div>
                    <div className="col-4">
                      <i className="fas fa-hospital-user fa-3x"></i>
                      <div>Hospital Facility</div>
                    </div>
                    <div className="col-4">
                      <i className="fas fa-diagnoses fa-3x"></i>
                      <div>Proper Diagnose</div>
                    </div>
                    <div className="col-4">
                      <i className="fas fa-head-side-virus fa-3x"></i>
                      <div>Symptoms Checker</div>
                    </div>
                    <div className="col-4">
                      <i className="fas fa-ambulance fa-3x"></i>
                      <div>Ambulance Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row card-space">
          <div className="col-12 col-sm-6 col-lg-4">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
            <RenderCard />
          </div>
          <div className="col-12 col-sm-6 col-lg-4">
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
                    <label htmlFor="email" className="sr-only">
                      Password
                    </label>
                    <input
                      type="email"
                      className="form-control email-field"
                      id="email"
                      placeholder="Enter your email address"
                    ></input>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary email-button"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default Home;