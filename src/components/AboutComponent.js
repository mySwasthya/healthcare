import React, { Component } from "react";
import Footer from "./FooterComponent";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <img src="/assets/images/HealthQuote.jpg" className="health-quote" />
      <div className="container about-container">
        <h1 className="section-title ">About us</h1>
        <div className="bottom-line"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="about-tab">
              <ul
                className="nav nav-pills nav-justified"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="#tab_a"
                    data-toggle="tab"
                  >
                    Our Mission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tab_b" data-toggle="tab">
                    Why Us?
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tab_c" data-toggle="tab">
                    About Us
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab_a">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Morbi scelerisque tortor mi, eget mattis velit sagittis id.
                    Duis ornare mauris eu eros interdum, vitae finibus arcu
                    ultricies. Donec vitae felis eleifend, dignissim erat a,
                    pretium diam. Donec eu massa odio. Suspendisse et ornare
                    lacus, pharetra imperdiet ligula.
                  </p>
                  <p>
                    Vestibulum ac quam id lorem semper condimentum. Nulla vel
                    ligula turpis. Nullam luctus, mi nec rhoncus gravida, tortor
                    est semper purus, a feugiat sapien odio non urna. Fusce
                    pellentesque neque ut nisi rhoncus imperdiet. Sed eu purus
                    vel turpis consectetur convallis. Donec a dolor tellus.
                    Phasellus dignissim erat nec ipsum condimentum sollicitudin.{" "}
                  </p>
                </div>
                <div className="tab-pane fade" id="tab_b">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-circle-o" aria-hidden="true"></i>User
                      Experince
                    </li>
                    <li>
                      <i className="fa fa-circle-o" aria-hidden="true"></i>Full
                      Devices
                    </li>
                    <li>
                      <i className="fa fa-circle-o" aria-hidden="true"></i>
                      Awesome Design
                    </li>
                    <li>
                      <i className="fa fa-circle-o" aria-hidden="true"></i>
                      Visual Impact
                    </li>
                    <li>
                      <i className="fa fa-circle-o" aria-hidden="true"></i>100%
                      Sincronized
                    </li>
                    <li>
                      <i className="fa fa-circle-o" aria-hidden="true"></i>
                      Custom Support
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade" id="tab_c">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="para">
          Welcome to Swasthya, our mission here is to connect with the people of
          India and provide them with best medical information. Users can check
          for symptoms for the diseases and find the best suitable medicines and
          drugs. This platform will also help doctors to publish articles and
          blogs related to their research field.
          <br />
          <br />
          So join with us on our mission to make India healthy.
        </p>

        <p className="para">
          Sincerely,
          <br /> Swasthya team
        </p>

        <br /> */}

        <section id="team">
          <div className="vert-align container">
            <div className="section-header wow fadeInUp">
              <h3 className="section-title ">Our Team</h3>
              <div className="bottom-line"></div>
              <p>
                We are a group of technology enthuisasts, developers and
                designers who want to help with problems faced by the healthcare
                system in India. We want to use technology to help others and
                diminish the gap between people and their health.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="member">
                  <img
                    id="team-img4"
                    className="img-fluid"
                    alt="Team member"
                    src="/assets/images/ayush.png"
                    width="500"
                    height="600"
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Ayush Pradhan</h4>
                      <span>Frontend, UI/UX Designer </span>
                      <div className="social">
                        <a
                          href="https://www.instagram.com/_ayush_pradhan_/"
                          target="_blank"
                        >
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a
                          href="https://github.com/ayush-pradhan"
                          target="_blank"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/ayush-pradhan-782aa5149/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="member">
                  <img
                    id="team-img4"
                    className="img-fluid"
                    alt="Team member"
                    src="/assets/images/aditya.png"
                    width="500"
                    height="600"
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Aditya Raina</h4>
                      <span>Full Stack Developer</span>
                      <div className="social">
                        <a href="" target="_blank">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a
                          href="https://github.com/Aditya-060199"
                          target="_blank"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="member">
                  <img
                    id="team-img4"
                    className="img-fluid"
                    alt="Team member"
                    src="/assets/images/puneet.png"
                    width="500"
                    height="600"
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Puneet Sharma</h4>
                      <span>Full Stack Developer</span>
                      <div className="social">
                        <a href="" target="_blank">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://github.com/Puneet112" target="_blank">
                          <i className="fa fa-github"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/puneet-sharma-6b41b6182/"
                          target="_blank"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              ></div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="member">
                  <img
                    id="team-img4"
                    className="img-fluid"
                    alt="Team member"
                    src="/assets/images/bhanu.jpg"
                    width="500"
                    height="600"
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Bhanu Pratap Singh</h4>
                      <span>Full Stack Developer</span>
                      <div className="social">
                        <a href="" target="_blank">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://github.com/bhanu4444" target="_blank">
                          <i className="fa fa-github"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="member">
                  <img
                    id="team-img4"
                    className="img-fluid"
                    alt="Team member"
                    src="/assets/images/archit.png"
                    width="500"
                    height="600"
                  />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Archit Dubey</h4>
                      <span>ML Expert</span>
                      <div className="social">
                        <a href="" target="_blank">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a
                          href="https://github.com/orgs/mySwasthya/people/ArcD7"
                          target="_blank"
                        >
                          <i className="fa fa-github"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="" target="_blank">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              ></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
