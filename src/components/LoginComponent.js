import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoctorClicked: false,
      isUserClicked: false,
      isStarted: true,
      activeDoctor: "",
      activeUser: "",
      email: "",
      password: "",
      fetchError: "",
      currentUser: null,
    };
    this.displayDoctorText = this.displayDoctorText.bind(this);
    this.displayUserText = this.displayUserText.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayDoctorText() {
    this.setState((state) => ({
      isDoctorClicked: true,
      isUserClicked: false,
      isStarted: false,
      activeDoctor: "active-form",
      activeUser: "",
      fetchError: "",
    }));
  }
  displayUserText() {
    this.setState((state) => ({
      isUserClicked: true,
      isDoctorClicked: false,
      isStarted: false,
      activeDoctor: "",
      activeUser: "active-form",
      fetchError: "",
    }));
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    let url = "";
    if (
      this.state.isDoctorClicked === false &&
      this.state.isUserClicked === false
    ) {
      this.setState({ fetchError: "Please select Doctor/User" });
      event.preventDefault();
      return;
    } else if (this.state.isDoctorClicked === true) {
      url = "login_doctor";
    } else {
      url = "login_user";
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (this.state.email === "" || !emailPattern.test(this.state.email)) {
      this.setState({ fetchError: "No User Exists" });
      event.preventDefault();
      return;
    } else if (
      this.state.password === "" ||
      this.state.password.length < 8 ||
      this.state.password.length > 32 ||
      !passwordPattern.test(this.state.password)
    ) {
      this.setState({ fetchError: "Incorrect Password" });
      event.preventDefault();
      return;
    }

    const loginUser = {
      email: this.state.email,
      password: this.state.password,
    };
    fetch("http://localhost:3001/" + url, {
      method: "POST",
      body: JSON.stringify(loginUser),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          var errMess = new Error(error.message);
          throw errMess;
        }
      )
      .then((data) => {
        if (data.error) {
          this.setState({ fetchError: data.error });
        } else if (data.user) {
          this.setState({ currentUser: data.user });
          localStorage.setItem("user", JSON.stringify(this.state.currentUser));
          alert("Successfully Logged in as User");
          window.location.href = "http://localhost:3000/home";
        } else if (data.doctor) {
          this.setState({ currentUser: data.doctor });
          localStorage.setItem(
            "doctor",
            JSON.stringify(this.state.currentUser)
          );
          alert("Successfully Logged in as Doctor");
          window.location.href = "http://localhost:3000/home";
        }
      })
      .catch((error) => {
        this.setState({
          fetchError: "Login Failed! Please try again in a moment",
        });
      });

    // fetch("http://localhost:3001/user")
    //   .then(
    //     (response) => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         var error = new Error(
    //           "Error " + response.status + ": " + response.statusText
    //         );
    //         error.response = response;
    //         throw error;
    //       }
    //     },
    //     (error) => {
    //       var errMess = new Error(error.message);
    //       throw errMess;
    //     }
    //   )
    //   .then((data) => {
    //     console.log(data);
    //     if (data.error) {
    //       this.setState({ currentUser: data.success });
    //       localStorage.setItem("user", JSON.parse(this.state.currentUser));
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("Error: " + error);
    //   });

    event.preventDefault();
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
              <h3>
                <strong>
                  <p>
                    <h2>
                      <strong>Welcome back!</strong>
                    </h2>
                  </p>
                  <p>Choose Account Type</p>
                </strong>
              </h3>
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
              <div className="error">{this.state.fetchError}</div>
              <form onSubmit={this.handleSubmit}>
                <div className="emaillogin">
                  <label htmlFor="email">
                    <span href="#" className="fa fa-envelope"></span> Email{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  <br />
                </div>
                <div className="passwordlogin">
                  <label htmlFor="password">
                    <span href="#" className="fa fa-lock"></span> Password{" "}
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
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

export default Login;
