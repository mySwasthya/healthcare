import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoctorClicked: true,
      isUserClicked: false,
      isStarted: true,
      activeDoctor: "",
      activeUser: "",
    };
    this.displayDoctorText = this.displayDoctorText.bind(this);
    this.displayUserText = this.displayUserText.bind(this);
  }
  displayDoctorText() {
    this.setState((state) => ({
      isDoctorClicked: true,
      isUserClicked: false,
      isStarted: false,
      activeDoctor: "active-form",
      activeUser: "",
    }));
  }
  displayUserText() {
    this.setState((state) => ({
      isUserClicked: true,
      isDoctorClicked: false,
      isStarted: false,
      activeDoctor: "",
      activeUser: "active-form",
    }));
  }
  render() {
    return (
      <div>
        <Header />
        <div className="signuppage">
          <div className="signupicon">
            <h3>
              <span className="fa fa-sigin-in"></span>
            </h3>
          </div>
          <div className="signupimages">
            <div className="signupheading">
              <h3>
                <strong>Choose Account Type</strong>
              </h3>
            </div>
            <div className="doctor">
              <div
                className={"doctoption " + this.state.activeDoctor}
                onClick={this.displayDoctorText}
              >
                <span>Doctor</span>
              </div>
            </div>
            <div className="user">
              <div
                className={"useroption " + this.state.activeUser}
                onClick={this.displayUserText}
              >
                <span>User</span>
              </div>
            </div>
            <div className="signupform">
              <div className="signup">
                <strong>
                  {" "}
                  {this.state.isStarted
                    ? null
                    : this.state.isDoctorClicked
                    ? "Welcome doctor! Login below to continue."
                    : this.state.isUserClicked
                    ? "Hi user! Login below to continue."
                    : null}{" "}
                </strong>
              </div>
              <hr className="signuprule" />
              <form action="" method="POST">
                <div className="email">
                  <label>
                    <span href="#" className="fa fa-envelope"></span> Email{" "}
                  </label>
                  <br />
                  <input type="text" required />
                  <br />
                </div>
                <div className="password">
                  <label>
                    <span href="#" className="fa fa-lock"></span> Password{" "}
                  </label>
                  <br />
                  <input type="password" required />
                  <br />
                </div>
                <div className="forgotpassword">
                  Forgot{" "}
                  <strong>
                    <a href="#">Password?</a>
                  </strong>
                </div>
                <button type="submit" class="btn btn-primary createaccount">
                  <span className="create">Login</span>
                </button>
              </form>
              <div className="openauthentication">
                <h2 className="hrule">
                  <span>
                    <em>or Login using </em>
                  </span>
                </h2>
                <a href="#" className="fa fa-google fag"></a>
                <a href="#" className="fa fa-facebook fab"></a>
                <a href="#" className="fa fa-twitter fat"></a>
              </div>
              <div className="haveanaccount">
                <p>
                  <span>Dont't have an account?</span>
                  <strong>
                    <a href="/signup">Sign Up</a>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Signup;
