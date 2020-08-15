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
      active1: "",
      active2: "",
      active3: "",
      active4: ""
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleActive(num) {
    if(num === 1)
      this.setState({ active1: "active", active2: "", active3: "", active4: ""});
    else if (num === 2)
      this.setState({ active1: "", active2: "active", active3: "", active4: ""});
    else if (num === 3)
      this.setState({ active1: "", active2: "", active3: "active", active4: ""});
    else if (num === 4)
      this.setState({ active1: "", active2: "", active3: "", active4: "active"});
    else
      this.setState({ active1: "", active2: "", active3: "", active4: "" });
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
                    <span className={this.state.active1} onClick={() => this.toggleActive(1)}>Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className={this.state.active2} onClick={() => this.toggleActive(2)}>About us</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/services">
                    <span className={this.state.active3} onClick={() => this.toggleActive(3)}>Services</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span className={this.state.active4} onClick={() => this.toggleActive(4)}>Contact</span>
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button className="mr-3">
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                  <NavLink to="/signup">
                    <Button>
                      <span className="fa fa-user-plus fa-lg"></span> Sign Up
                    </Button>
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
