import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div id="footer">
      <div className="container footer-container py-4">
        <div>
          <h2 className="mr-auto" href="/">
            <span className="fa fa-stethoscope"></span> Swasthya
          </h2>
          <p>
            Welcome to Swasthya, our mission here is to connect with the people
            of India and provide them with best medical information.
          </p>
        </div>

        <div>
          <h2>Site Links</h2>
          <ul className="list list-unstyled">
            <li>
              <Link className="nav-link col" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link col" to="/aboutus">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link col" to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className="nav-link col" to="/contactus">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Address</h2>
          <p>
            <i className="fa fa-home"></i> Shri Mata Vaishno Devi University
          </p>
          <p>
            <i className="fa fa-envelope"></i> myswasthya@gmail.com
          </p>
          <p>
            <i className="fa fa-phone"></i> 0120-420-0420
          </p>
        </div>
        <div id="e">
          <p>@ Copyright 2020 - Swasthya. All rights reserved</p>
          <div className="text-center">
            <a href="http://instagram.com" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="http://www.facebook.com/profile.php?id=" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="http://www.linkedin.com/in/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
            {/* <a href="http://twitter.com/ target="_blank"">
              <i className="fa fa-twitter"></i>
            </a> */}
            <a href="mailto:">
              <i className="fa fa-envelope-o"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
