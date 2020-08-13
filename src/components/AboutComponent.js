import React, { Component } from "react";
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
        <h2>About us</h2>
        <hr className="hr-style" />

        <p>
          Welcome to Swasthya, our mission here is to connect with the people of
          India and provide them with best medical information. Users can check
          for symptoms for the diseases and find the best suitable medicines and
          drugs. This platform will also help doctors to publish articles and
          blogs related to their research field.
          <br />
          <br />
          So join with us on our mission to make India healthy.
        </p>

        <p>
          Sincerely,
          <br /> Swasthya team
        </p>
        <hr className="hr-style" />
      </div>
    </div>
  );
}

export default About;
