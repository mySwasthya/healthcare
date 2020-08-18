import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      currentUser: null
    };

    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  componentDidMount() {
    fetch("http://localhost:3001/user")
      .then(
        (response) => {
          if (response.ok) {
            return response;
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
      .then((res) => {
        this.setState({currentUser: res});
      })
      .catch((error) => {
        alert("Error: "+ error);
      });
  }

  render() {
    return (
      <>
        <Navbar fixed="top" light expand="lg">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <span className="fa fa-stethoscope"></span> Swasthya
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-auto nav-1" navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span
                      className={
                        document.location.pathname == "/home" ? "active" : ""
                      }
                    >
                      Home
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span
                      className={
                        document.location.pathname == "/aboutus" ? "active" : ""
                      }
                    >
                      About us
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/services">
                    <span
                      className={
                        document.location.pathname == "/services" ? "active" :""
                      }
                    >
                      Services
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/health">
                    <span
                      className={
                        document.location.pathname == "/health" ? "active" :""
                      }
                    >
                      Health
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span
                      className={
                        document.location.pathname == "/contact" ? "active" :""
                      }
                    >
                      Contact
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/login">
                    <Button className="mr-3">Login</Button>
                  </NavLink>
                  <NavLink to="/signup">
                    <Button>Sign Up</Button>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
