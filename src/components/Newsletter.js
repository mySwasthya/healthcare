import React from 'react';

function Newsletter() {
    return (
      <div className="home-bottom">
        <div className="container">
          <div className="home-bottom-content">
            Stay in Touch
            <hr />
            <div className="form-wrapper">
              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="email" className="sr-only">
                    Password
                  </label>
                  <input
                    type="email"
                    className="form-control email-field"
                    id="email"
                    placeholder="Enter your email address"
                  ></input>
                </div>
                <button type="submit" className="btn btn-primary email-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Newsletter;