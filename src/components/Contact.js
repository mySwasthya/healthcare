import React, { Component } from "react";
import Footer from "./FooterComponent";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="vert-align">
          <section id="contact-a" className="text-center py-3">
            <div className="container">
              <div id="contact-slide">
                <h2 className="section-title">Contact Us</h2>
                <div className="bottom-line"></div>
                <p className="lead">
                  Please fill out the form below to contact us
                </p>

                <form>
                  <div className="text-fields">
                    <input
                      type="text"
                      className="text-input name-input"
                      placeholder="Name"
                      name="name"
                    />
                    <input
                      type="text"
                      className="text-input subject-input"
                      placeholder="Subject"
                      name="subject"
                    />
                    <input
                      type="email"
                      className="text-input email-input"
                      placeholder="Email Address"
                      name="email"
                    />
                    <input
                      type="text"
                      className="text-input phone-input"
                      placeholder="Phone Number"
                      name="phone"
                    />
                    <textarea
                      className="text-input message-input"
                      placeholder="Enter Message"
                      name="message"
                    ></textarea>
                  </div>
                  <button type="submit" className="bord py-2">
                    Submit
                  </button>
                </form>
              </div>
              <ul className="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact;
