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
        <div className="loginpage">
          <div className="loginicon">
            <h3>
              <span className="fas fa-sign-in-alt"></span>
            </h3>
          </div>
          <div className="loginimages">
            <div className="loginheading">
              <h3><strong><p><h2><strong>Welcome back!</strong></h2></p><p>Choose Account Type</p></strong></h3>
            </div>
            <div className="doctorlogin">
              <div
                className={"doctoptionlogin " + this.state.activeDoctor}
                onClick={this.displayDoctorText}
              >
                <span>Doctor</span>
              </div>
            </div>
            <div className="userlogin">
              <div
                className={"useroptionlogin " + this.state.activeUser}
                onClick={this.displayUserText}
              >
                <span>User</span>
              </div>
            </div>
            <div className="loginform">
              <div className="login">
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
              <hr className="loginrule" />
              <form action="" method="POST">
                <div className="emaillogin">
                  <label>
                    <span href="#" className="fa fa-envelope"></span> Email{" "}
                  </label>
                  <br />
                  <input type="text" required />
                  <br />
                </div>
                <div className="passwordlogin">
                  <label>
                    <span href="#" className="fa fa-lock"></span> Password{" "}
                  </label>
                  <br />
                  <input type="password" required />
                </div>
                <div className="forgotpassword">
                  Forgot{" "}
                  <strong>
                    <a href="#">Password?</a>
                  </strong>
                </div>
                <button type="submit" class="btn btn-primary loginaccount">
                  <span className="create">Login</span>
                </button>
              </form>
              <div className="openauthenticationlogin">
                <h2 className="hrulelogin">
                  <span>
                    <em>or Login using </em>
                  </span>
                </h2>
                <a href="#" className="fa fa-google faglogin"></a>
                <a href="#" className="fa fa-facebook fablogin"></a>
              </div>
              <div className="donthaveanaccount">
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
