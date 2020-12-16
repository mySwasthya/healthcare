import React, { Component } from "react";
import Footer from "./FooterComponent";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const user =
      localStorage.getItem("user") || localStorage.getItem("doctor") || null;
    await this.setState({ currentUser: JSON.parse(user) });
    console.log(this.state.currentUser);
    if (this.state.currentUser == null) {
      window.location.href = "http://localhost:3000/";
    }
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="vert-align">
          <div className="loader">Loading...</div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="vert-align">
            <div className="centre-align-dashboard">
              <div className="user-img">
                <img
                  src="/assets/images/DefaultUser.jpg"
                  alt="User"
                  className="rounded-circle"
                  width="150px"
                  height="150px"
                />
              </div>
              <div className="user-info">
                <div className="user-details">
                  <strong>First Name: </strong>
                  {this.state.currentUser.firstname}
                </div>
                <div className="user-details">
                  <strong>Last Name: </strong>
                  {this.state.currentUser.lastname}
                </div>
                <div className="user-details">
                  <strong>Full Name: </strong>
                  {this.state.currentUser.firstname +
                    this.state.currentUser.lastname}
                </div>
                <div className="user-details">
                  <strong>Username: </strong>
                  {this.state.currentUser.username}
                </div>
                <div className="user-details">
                  <strong>Email: </strong>
                  {this.state.currentUser.email}
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
