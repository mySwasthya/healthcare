import React,{Component} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDoctorClicked: true, 
      isUserClicked: false, 
      isStarted: true, 
      activeDoctor: "", 
      activeUser: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
    this.displayDoctorText = this.displayDoctorText.bind(this);
    this.displayUserText = this.displayUserText.bind(this);
  }

  displayDoctorText(){
    this.setState(state => ({
      isDoctorClicked: true,
      isUserClicked: false,
      isStarted: false,
      activeDoctor: "active-form",
      activeUser: ""
    }));
  }

  displayUserText(){
    this.setState((state) => ({
      isUserClicked: true,
      isDoctorClicked: false,
      isStarted: false,
      activeDoctor: "",
      activeUser: "active-form",
    }));
  }

  handleInputChange(event) {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
  }

  render(){
  return(
        <div>
        <Header />
        <div className = "signuppage">
          <div className = "signupicon">
              <h3><span className="fa fa-user-plus"></span></h3>
          </div>
          <div className = "signupimages">
              <div className = "signupheading">
                  <h3><strong>Choose Account Type</strong></h3>
              </div>
              <div className = "doctor">
                  <div className = {"doctoption " + this.state.activeDoctor}  onClick = {this.displayDoctorText}>
                      <span>Doctor</span>
                  </div>
              </div>
              <div className = "user">
                  <div className = {"useroption " + this.state.activeUser} onClick = {this.displayUserText}>
                    <span>User</span>
                  </div>
              </div>
              <div className = "signupform">
                  <div className = "signup"><strong> {this.state.isStarted? null : this.state.isDoctorClicked ? "Welcome doctor! Sign up below to continue.": this.state.isUserClicked ? "Hi user! Sign up below to continue.":null} </strong></div>
                    <hr className="signuprule" />
                    <form action = "/register" method = "POST">
                      <div className = "namefield">
                        <div className = "firstname">
                          <label htmlFor="firstname"><span href="#" className="fa fa-user"></span> First Name </label><br/>
                          <input type = "text" id="firstname" name="firstname"  required/>
                        </div>
                      <span className = "emptyspace"></span>
                        <div className = "lastname">
                          <label htmlFor="lastname"> Last Name </label><br/>
                          <input type = "text" id="lastname" name="lastname" required/>
                        </div>
                      </div>
                      <div className = "email">
                        <label htmlFor="email"><span href="#" className="fa fa-envelope"></span> Email </label><br/>
                        <input type = "text" id="email" name="email" required/><br/>
                      </div>
                      <div className = "password">
                        <label htmlFor="password"><span href="#" className="fa fa-lock"></span>  Password </label><br/>
                        <input type = "password" id="password" name="password" required/><br/>
                      </div>
                      <div className = "confirmpassword">
                        <label htmlFor="confirmpassword"><span href="#" className="fa fa-lock"></span>  Confirm Password </label><br/>
                        <input type = "password" id="confirmpassword" name="conformpassword" required/>
                      </div>
                      <button type = "submit" className="btn btn-primary createaccount mt-4"><span className="create">Create</span> Account</button>
                  </form>
                  <div className = "openauthentication">
                    <h2 className="hrule"><span><em>or Sign Up using </em></span></h2>
                    <a href="#" className="fa fa-google fag"></a>
                    <a href="#" className="fa fa-facebook fab"></a>
                    <a href="#" className="fa fa-twitter fat"></a>
                  </div>
                  <div className = "haveanaccount">
                    <p><span>Already have an account?</span><strong><a href="/login">Login</a></strong></p>
                  </div>
                  </div>
                  </div>
                  </div>
        <Footer />
        </div>
  )
}
}

export default Signup;
