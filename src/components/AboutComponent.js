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
import Testimonial from "./TestimonialComponent";

function About() {
  return(
    <div >
        <img src="/assets/images/HealthQuote.jpg"  className="health-quote"/>
        <div className="container about-container">
        <h1>About us</h1>
        <hr  className="hr-style"/>

        <p>
          Welcome to Swasthya, our mission here is to connect with the people of India and
          provide them with best medical information. Users can check for symptoms for the
          diseases and find the best suitable medicines and drugs. This platform will also
          help doctors to publish articles and blogs related to their research field.
         <br/><br/>
          So join with us on our mission to make India healthy.
          </p>

        <p>Sincerely,<br/> Swasthya team</p>

        <br />
        <h4 className="h4-style">Our Team</h4>
        <hr className="hr-style" />
        <p>We are a group of technology enthuisasts, developers and designers
          who want to help with problems faced by the healthcare system in India.
          We want to use technology to help others and diminish the gap between people and their health.
        </p>

        <div className="row">
          <div className="col-lg-6">
            <img className="circular" src="/assets/images/aditya.png" />Aditya Raina
                      </div>
          <div className="col-lg-6">
            <img className="circular" src="/assets/images/archit.png" />Archit Dubey
                      </div>
          <div className="col-lg-6">
            <img className="circular" src="/assets/images/ayush.png" /> Ayush Pradhan
                      </div>
          <div className="col-lg-6">
            <img className="circular" src="/assets/images/bhanu.jpg" />Bhanu Pratap Singh
                      </div>
          <div className="col-lg-6">
            <img className="circular" src="/assets/images/puneet.png" />Puneet Sharma
                      </div>
        </div>








        <hr className="hr-style" />
        <p>Here is a Tedex talk about Improving healthcare</p>
        <iframe  src="https://www.youtube.com/embed/U3MtvvNjUR4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="row">
          <div className="col-12">
              <Testimonial />
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
