import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

function Signup(){
  return(
        <div>
        <Header />
          <div id = "userbackground">
            <div className = "section1">
            <div className = "image">
            </div>
            <div className = "userform">
            <div id = "usersignupicon">
              <h3><span className="fa fa-user-plus"></span></h3>
            </div>
              <div id = "socialbuttons">
                <div id = "facebookbtn">
                  <button className = "btn btn-lg fbbutton"><a href="#" className="fa fa-facebook"><span id = "fb">Sign In with <strong>Facebook</strong></span></a></button>
                </div>
                <div id = "googlebutton">
                  <button className="btn btn-lg googlebtn"><a href="#" className="fa fa-google"><span id = "ge">Sign In with <strong>Google</strong></span></a></button>
                </div>
              <h2 className="hrule"><span><em>or</em></span></h2>
              </div>
              <form action = "" method = "POST">
                <label>Email</label><br />
                <input type="email" name="email" required /><br />
                <label>Password</label><br />
                <input type="password" name="password" required /><br />
                <button type="submit" class="btn btn-lg btn-primary createbutton">Create Account</button>
                <div id = "haveaccount">
                  <label>Already have an account?<strong><a href = "#">Log In</a></strong></label>
                </div>
              </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
  )
}

export default Signup;
