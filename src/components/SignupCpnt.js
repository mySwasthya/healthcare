import React,{Component} from "react";
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
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      touched: {
        firstname: false,
        lastname: false,
        username: false,
        email: false,
        password: false,
        confirmpassword: false,
      },
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

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  validate(firstname, lastname, username, email, password, confirmpassword) {
    const errors = {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: ""
    };

    const namePattern = /^[A-Za-z]+$/;
    const usernamePattern = /^[A-z0-9À-ž\s]+$/;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    if (this.state.touched.firstname && firstname==="")
        errors.firstname = "First Name is required";
    else if (this.state.touched.firstname && (firstname.length < 3 || firstname.length > 12))
        errors.firstname = "First Name should be 3-12 characters";
    else if (this.state.touched.firstname && !namePattern.test(firstname))
        errors.firstname = "First Name should only contain letters";

    if (this.state.touched.lastname && lastname==="")
        errors.lastname = "Last Name is required";
    else if (this.state.touched.lastname && (lastname.length < 3 || lastname.length > 12))
        errors.lastname = "Last Name should be 3-12 characters";
    else if (this.state.touched.lastname && !namePattern.test(lastname))
        errors.lastname = "Last Name should only contain letters";
    
    if (this.state.touched.username && username==="")
        errors.username = "Username is required";
    else if (this.state.touched.username && (username.length < 3 || username.length > 12))
        errors.username = "Username should be 3-12 characters";
    else if (this.state.touched.username && !usernamePattern.test(username))
        errors.username = "Username should be alphanumeric";

    if (this.state.touched.email && email==="")
        errors.email = "Email is required";
    else if (this.state.touched.email && !emailPattern.test(email))
        errors.email = "Invalid Email Address";
    
    if (this.state.touched.password && password==="")
        errors.password = "Password is required";
    else if (this.state.touched.password && (password.length < 8 || password.length > 24))
        errors.password = "Password should be 8-24 characters";
    else if (this.state.touched.password && !passwordPattern.test(password))
        errors.password = "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character";
    
    if (this.state.touched.confirmpassword && confirmpassword==="")
        errors.confirmpassword = "Confirm Password is required";
    else if (this.state.touched.confirmpassword && (confirmpassword.length < 8 || confirmpassword.length > 24))
        errors.confirmpassword = "Password should be 8-24 characters";
    else if (this.state.touched.confirmpassword && !passwordPattern.test(confirmpassword))
        errors.confirmpassword = "Password should contain at least one uppercase letter, one lowercase letter, one number and one special character";
    else if (this.state.touched.password && this.state.touched.confirmpassword && (password != confirmpassword))
        errors.confirmpassword = "Password and Confirm Password should match";

    return errors;
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
                      required
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
                      required
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
                    required
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
                    required
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
                    required
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
                    required
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
