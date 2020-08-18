import React, { Component } from "react";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";

class Appointment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="vert-align">
          <div id="appoint">
            <div id="appoint-container">
              <div class="form-wrap">
                <h1>Patient's personal detail</h1>
                <p>
                  It only takes few minutes. We will get back soon to you for
                  more updates.
                </p>
                <form>
                  <div class="form-group">
                    <div>
                      <label for="name">Full Name</label>
                    </div>
                    <input type="text" name="Name" id="full-name" />
                  </div>
                  <div class="form-group">
                    <div>
                      <label for="gender">Gender</label>
                    </div>
                    <input type="text" name="gender" id="gender" />
                  </div>
                  <div class="form-group">
                    <div>
                      <label for="DOB">Date of birth</label>
                    </div>
                    <input type="date" name="Number" id="DOB" />
                  </div>
                  <div class="form-group">
                    <div>
                      <label for="email">Email</label>
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="myname@example.com"
                    />
                  </div>
                  <div class="form-group">
                    <div>
                      <label for="number">Mobile Number</label>
                    </div>
                    <input type="number" name="Number" id="number" />
                  </div>

                  <div class="form-group">
                    <div>
                      <label for="address">Address</label>
                    </div>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Street Address"
                    />

                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="State/UT"
                    />
                    <input
                      type="number"
                      name="address"
                      id="address"
                      placeholder="PIN Code"
                    />
                  </div>
                  <div class="form-group">
                    <div>
                      <h6>Appointment type:</h6>
                      <label>Which appointment type(s) you require</label>
                    </div>
                    <input
                      type="message"
                      name="appoinment-type"
                      id="appoinment-type"
                      placeholder="Example: Eye, Neurology, Psychiatrist"
                    />
                  </div>

                  <button type="submit" class="btn">
                    Submit
                  </button>
                  <p class="button-text">
                    By clicking the Submit button, you agree to our
                    <a href="#"> Terms & Conditions </a> and
                    <a href="#"> Privacy Policy </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Appointment;
