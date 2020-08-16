import React,{Component} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

class Signup extends Component{
  constructor(props){
    super(props);
    this.state = {isDoctorClicked: true, isUserClicked: false, isStarted: true};
    this.displayDoctorText = this.displayDoctorText.bind(this);
    this.displayUserText = this.displayUserText.bind(this);
  }
  displayDoctorText(){
    this.setState(state => ({
      isDoctorClicked: true,
      isUserClicked: false,
      isStarted: false
    }));
  }
  displayUserText(){
    this.setState(state => ({
      isUserClicked: true,
      isDoctorClicked: false,
      isStarted: false
    }));
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
                  <div className = "doctoption" onClick = {this.displayDoctorText}>
                      <span>Doctor</span>
                  </div>
              </div>
              <div className = "user">
                  <div className = "useroption" onClick = {this.displayUserText}>
                    <span>Patient</span>
                  </div>
              </div>
              <div className = "signupform">
                  <div className = "signup"><strong> {this.state.isStarted? null : this.state.isDoctorClicked ? "Welcome doctor! Sign up below to continue.": this.state.isUserClicked ? "Hi user! Sign up below to continue.":null} </strong></div>
                    <hr className="signuprule" />
                    <form action = "" method = "POST">
                      <div className = "namefield">
                        <div className = "firstname">
                          <label><span href="#" class="fa fa-user"></span> First Name </label><br/>
                          <input type = "text" required/>
                        </div>
                      <span className = "emptyspace"></span>
                        <div className = "lastname">
                          <label> Last Name </label><br/>
                          <input type = "text" required/>
                        </div>
                      </div>
                      <div className = "email">
                        <label><span href="#" class="fa fa-envelope"></span> Email </label><br/>
                        <input type = "text" required/><br/>
                      </div>
                      <div className = "password">
                        <label><span href="#" class="fa fa-lock"></span>  Password </label><br/>
                        <input type = "password" required/><br/>
                      </div>
                      <div className = "confirmpassword">
                        <label><span href="#" class="fa fa-lock"></span>  Confirm Password </label><br/>
                        <input type = "password" required/>
                      </div>
                      <div className="forgotpassword">Forgot <strong><a href="#">Password?</a></strong></div>
                        <button type = "submit" class = "btn btn-primary createaccount"><span className="create">Create</span> Account</button>
                  </form>
                  <div class = "openauthentication">
                    <h2 className="hrule"><span><em>or Sign Up using </em></span></h2>
                    <a href="#" class="fa fa-google fag"></a>
                    <a href="#" class="fa fa-facebook fab"></a>
                    <a href="#" class="fa fa-twitter fat"></a>
                  </div>
                  <div className = "haveanaccount">
                    <p><span>Already have an account?</span><strong><a href="#">Login</a></strong></p>
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
