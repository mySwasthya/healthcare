import React from "react";
import Footer from "./FooterComponent";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <div className="container service-container">
        <section id="bg-blue" className="row tm-section">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
            <div
              className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h "
              id="img-service-1"
            ></div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="tm-flex-center p-5">
              <q className="tm-quote tm-text-color-gray">
                Maintain your personal health and medicinal records efficiently
                and securely
              </q>
            </div>
            {/* <Button className="btn">
              <a href="/">Read More</a>
            </Button> */}
            {/* <Button size="lg" className="button1">
              <Link to="/Appointment.js">Book Appointment</Link>
            </Button> */}
          </div>
        </section>
        <section id="bg-blue" className="row tm-section tm-col-md-reverse">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="tm-flex-center p-5">
              <div className="tm-md-flex-center">
                <h2 className="tm-text-color-primary mb-4">
                  Online consultation
                </h2>
                <p className="mb-4">
                  Pellentesque sagittis feugiat massa, vitae blandit elit dictum
                  in. Nam eleifend nunc dui, sed cusus justo molestie id.
                  Vestibulum vel sagittis justo.
                </p>
                {/* <Button className="btn">
                  <a href="/">Read More</a>
                </Button> */}
                <Button className="mr-3">Book Appointment</Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
            <div
              className="tm-flex-center p-5 tm-bg-color-primary"
              id="img-service-2"
            ></div>
          </div>
        </section>
        <section id="bg-blue" className="row tm-section">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
            <div
              className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h"
              id="img-service-3"
            ></div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="tm-flex-center p-5">
              {/* <h2 className="tm-text-color-primary mb-4">
                Online consultation
              </h2> */}
              <p className="tm-quote tm-text-color-gray">
                Keep youself updated of the latest health discoveries to how to
                prevent some diseaser with
                <a href="\home"> blogs and articles</a> from Physicians and
                Specialists
              </p>
            </div>
            {/* <Button className="btn">
              <a href="/">Read More</a>
            </Button> */}
          </div>
        </section>
        <section id="bg-blue" className="row tm-section tm-col-md-reverse">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="tm-flex-center p-5">
              <div className="tm-md-flex-center">
                <h2 className="tm-text-color-primary mb-4">
                  E-pharmacy and Health Supplements
                </h2>
                <p className="mb-4">
                  Order medicines and Health supplements from your local
                  authorised pharmacy and get it in 1 hour.
                </p>
                {/* <Button className="btn">
                  <a href="/">Read More</a>
                </Button> */}
                <Button className="mr-3">E-pharmacy</Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
            <div
              className="tm-flex-center p-5 tm-bg-color-primary"
              id="img-service-4"
            ></div>
          </div>
        </section>
        <section id="bg-blue" className="row tm-section">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
            <div
              className="tm-flex-center p-5 tm-bg-color-primary tm-section-min-h"
              id="img-service-5"
            ></div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="tm-flex-center p-5">
              <q className="tm-quote tm-text-color-gray">
                We have contacted with local cabs for pick & drop from Clinics
                and Hospitals......
              </q>
            </div>
            {/* <Button className="btn">
              <a href="/">Read More</a>
            </Button> */}
          </div>
        </section>
        <section id="bg-blue" className="row tm-section tm-col-md-reverse">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div className="tm-flex-center p-5">
              <div className="tm-md-flex-center">
                <h2 className="tm-text-color-primary mb-4">Symptom checker</h2>
                <p className="mb-4">
                  Check if you have symptoms of any disease !
                </p>
                {/* <Button className="btn">
                  <a href="/">Read More</a>
                </Button> */}
                <Button className="mr-3">Let's check</Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 p-0">
            <div
              className="tm-flex-center p-5 tm-bg-color-primary"
              id="img-service-6"
            ></div>
          </div>
        </section>

        <section id="bg-blue" className="row tm-section tm-mb-30">
          <div
            className="col-sm-12 col-md-12 col-lg-4 col-xl-4 text-xl-right text-md-center text-center mt-5 mt-lg-0 pr-lg-0"
            id="img-service-7"
          ></div>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <div className="tm-flex-center pl-5 pr-5 pt-5 pb-5">
              <div className="tm-md-flex-center">
                <h2 className="mb-4 tm-text-color-primary">
                  Nullam auctor ornare finibus
                </h2>
                <p>
                  Cras eu dolor lorem. Cras justo mauris, rhoncus in mauris ac,
                  pellentesque pulvinar metus. Suspendisse consectetur consequat
                  diam, ac dignissim mauris gravida vitae. Vestibulum blandit
                  vestibulum mi a viverra.
                </p>
                <p className="mb-4">
                  Fusce porta lectus vel elit condimentum porttitor. Maecenas at
                  quam congue, sollicitudin risus quis, ultricies enim. Vivamus
                  sodales, tellus ac quismod dignissim, metus ligula porttitor
                  enim.
                </p>
                <p className="mb-4">
                  Sed fermentum odio mollis libero iaculis ultrices. Mauris et
                  nibh mi. Nullam vel sapien dolor. Vestibulum ipsum quam,
                  aliquet ac pharetra in, suscipit eu risus. Etiam rutrum eros
                  ultrices, consectetur felis ultrices, vehicula purus.
                </p>
                {/* <Button size="lg" className="button1">
                  <Link to="/appointment">Book Appointment</Link>
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
