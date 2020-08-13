import React, { Component } from "react";
import Footer from "./FooterComponent";
class Contact extends Component {
  render() {
    return (
      <div>
        <div className="vert-align">
          <section id="contact-a" class="text-center py-3">
            <div className="container">
              <div id="contact-slide">
                <h2 class="section-title">Contact Us</h2>
                <div class="bottom-line"></div>
                <p class="lead">Please fill out the form below to contact us</p>

                <form>
                  <div class="text-fields">
                    <input
                      type="text"
                      class="text-input name-input"
                      placeholder="Name"
                      name="name"
                    />
                    <input
                      type="text"
                      class="text-input subject-input"
                      placeholder="Subject"
                      name="subject"
                    />
                    <input
                      type="email"
                      class="text-input email-input"
                      placeholder="Email Address"
                      name="email"
                    />
                    <input
                      type="text"
                      class="text-input phone-input"
                      placeholder="Phone Number"
                      name="phone"
                    />
                    <textarea
                      class="text-input message-input"
                      placeholder="Enter Message"
                      name="message"
                    ></textarea>
                  </div>
                  <button type="submit" class="bord py-2">
                    Submit
                  </button>
                </form>
              </div>
              <ul class="slideshow">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            {/* </div> */}
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
