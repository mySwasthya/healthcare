import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import history from '../history';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDoctorClicked: false,
      isUserClicked: false,
      isStarted: true,
      activeDoctor: "",
      activeUser: "",
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      fetchError: "",
      currentUser: null,
      touched: {
        firstname: false,
        lastname: false,
        username: false,
        email: false,
        password: false,
        confirmpassword: false,
      }
    };

    this.displayDoctorText = this.displayDoctorText.bind(this);
    this.displayUserText = this.displayUserText.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  displayDoctorText() {
    this.setState((state) => ({
      isDoctorClicked: true,
      isUserClicked: false,
      isStarted: false,
      activeDoctor: "active-form",
      activeUser: "",
      fetchError: ""
    }));
  }

  displayUserText() {
    this.setState((state) => ({
      isUserClicked: true,
      isDoctorClicked: false,
      isStarted: false,
      activeDoctor: "",
      activeUser: "active-form",
      fetchError: ""
    }));
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  validate(firstname, lastname, username, email, password, confirmpassword) {
    const errors = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    };

    const namePattern = /^[A-Za-z]+$/;
    const usernamePattern = /^[A-z0-9À-ž\s]+$/;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (this.state.touched.firstname && firstname === "")
      errors.firstname = "Required";
    else if (this.state.touched.firstname && (firstname.length < 2 || firstname.length > 16))
      errors.firstname = "First Name should be 2-16 characters";
    else if (this.state.touched.firstname && !namePattern.test(firstname))
      errors.firstname = "First Name should only contain letters";

    if (this.state.touched.lastname && lastname === "")
      errors.lastname = "Required";
    else if ( this.state.touched.lastname && (lastname.length < 2 || lastname.length > 16))
      errors.lastname = "Last Name should be 2-16 characters";
    else if (this.state.touched.lastname && !namePattern.test(lastname))
      errors.lastname = "Last Name should only contain letters";

    if (this.state.touched.username && username === "")
      errors.username = "Required";
    else if (this.state.touched.username && (username.length < 2 || username.length > 24))
      errors.username = "Username should be 2-24 characters";
    else if (this.state.touched.username && !usernamePattern.test(username))
      errors.username = "Username should be alphanumeric";

    if (this.state.touched.email && email === "")
      errors.email = "Required";
    else if (this.state.touched.email && !emailPattern.test(email))
      errors.email = "Invalid Email Address";

    if (this.state.touched.password && password === "")
      errors.password = "Required";
    else if (this.state.touched.password && (password.length < 8 || password.length > 32))
      errors.password = "Password should be 8-32 characters";
    else if (this.state.touched.password && !passwordPattern.test(password))
      errors.password =
        "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character";

    if (this.state.touched.confirmpassword && confirmpassword === "")
      errors.confirmpassword = "Required";
    else if (this.state.touched.confirmpassword && (confirmpassword.length < 8 || confirmpassword.length > 32))
      errors.confirmpassword = "Password should be 8-32 characters";
    else if (this.state.touched.confirmpassword && !passwordPattern.test(confirmpassword))
      errors.confirmpassword =
        "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character";
    else if (this.state.touched.password && this.state.touched.confirmpassword && password != confirmpassword)
      errors.confirmpassword = "Password and Confirm Password should match";

    return errors;
  }

  handleSubmit(event) {
    let url = "";
    if(this.state.isDoctorClicked === false && this.state.isUserClicked === false) {
      this.setState({fetchError: "Please select Doctor/User"});
      event.preventDefault();
      return;
    }
    else if(this.state.isDoctorClicked === true) {
      url = "register_doctor";
    }
    else {
      url = "register_user";
    }
    const registerUser = {firstname: this.state.firstname, lastname: this.state.lastname, username: this.state.username, email: this.state.email, password: this.state.password};
    fetch("http://localhost:3001/" + url, {
      method: "POST",
      body: JSON.stringify(registerUser),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin"
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
        if(data.error) {
          this.setState({fetchError: data.error})
        }
        else if(data.user) {
          this.setState({currentUser: data.user});
          localStorage.setItem("user", JSON.stringify(this.state.currentUser));
          alert("Successfully Signed in as User");
          this.props.history.push("/home");
        }
        else if(data.doctor) {
          this.setState({ currentUser: data.doctor });
          localStorage.setItem("doctor", JSON.stringify(this.state.currentUser));
          alert("Successfully Signed in as Doctor");
          this.props.history.push("/home");
        }
      })
      .catch((error) => {
        this.setState({fetchError: "Sign Up Failed! Please try again in a moment"});
      });
      event.preventDefault();
  }

  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.confirmpassword
    );
    return (
      <div>
        <Header />
        <div className="signuppage">
          <div className="signupicon">
            <h3>
              <span className="fa fa-user-plus"></span>
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
                    ? "Welcome doctor! Sign up below to continue."
                    : this.state.isUserClicked
                    ? "Hi user! Sign up below to continue."
                    : null}{" "}
                </strong>
              </div>
              <hr className="signuprule" />
              <div className="error">{this.state.fetchError}</div>
              <form onSubmit={this.handleSubmit}>
                <div className="namefield">
                  <div className="firstname">
                    <label htmlFor="firstname">
                      <span href="#" className="fa fa-user"></span> First Name{" "}
                    </label>
                    <br />
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={this.state.firstname}
                      valid={errors.firstname === ""}
                      invalid={errors.firstname !== ""}
                      onBlur={this.handleBlur("firstname")}
                      onChange={this.handleInputChange}
                    />
                    <div className="errors">{errors.firstname}</div>
                    <br />
                  </div>
                  <span className="emptyspace"></span>
                  <div className="lastname">
                    <label htmlFor="lastname"> Last Name </label>
                    <br />
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={this.state.lastname}
                      valid={errors.lastname === ""}
                      invalid={errors.lastname !== ""}
                      onBlur={this.handleBlur("lastname")}
                      onChange={this.handleInputChange}
                    />
                    <div className="errors">{errors.lastname}</div>
                    <br />
                  </div>
                </div>
                <div className="username">
                  <label htmlFor="username">
                    <span href="#" className="fa fa-user-circle"></span>{" "}
                    Username{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={this.state.username}
                    valid={errors.username === ""}
                    invalid={errors.username !== ""}
                    onBlur={this.handleBlur("username")}
                    onChange={this.handleInputChange}
                  />
                  <div className="errors">{errors.username}</div>
                  <br />
                </div>
                <div className="email">
                  <label htmlFor="email">
                    <span href="#" className="fa fa-envelope"></span> Email{" "}
                  </label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <div className="errors">{errors.email}</div>
                  <br />
                </div>
                <div className="password">
                  <label htmlFor="password">
                    <span href="#" className="fa fa-lock"></span> Password{" "}
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    valid={errors.password === ""}
                    invalid={errors.password !== ""}
                    onBlur={this.handleBlur("password")}
                    onChange={this.handleInputChange}
                  />
                  <div className="errors">{errors.password}</div>
                  <br />
                </div>
                <div className="confirmpassword">
                  <label htmlFor="confirmpassword">
                    <span href="#" className="fa fa-lock"></span> Confirm
                    Password{" "}
                  </label>
                  <br />
                  <input
                    type="password"
                    id="confirmpassword"
                    name="confirmpassword"
                    value={this.state.confirmpassword}
                    valid={errors.confirmpassword === ""}
                    invalid={errors.confirmpassword !== ""}
                    onBlur={this.handleBlur("confirmpassword")}
                    onChange={this.handleInputChange}
                  />
                  <div className="errors">{errors.confirmpassword}</div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary createaccount mt-4"
                >
                  <span className="create">Create</span> Account
                </button>
              </form>
              <div className="openauthentication">
                <h2 className="hrule">
                  <span>
                    <em>or Sign Up using </em>
                  </span>
                </h2>
                <a href="#" className="fa fa-google fag"></a>
                <a href="#" className="fa fa-facebook fab"></a>
              </div>
              <div className="haveanaccount">
                <p>
                  <span>Already have an account?</span>
                  <strong>
                    <a href="/login">Login</a>
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
