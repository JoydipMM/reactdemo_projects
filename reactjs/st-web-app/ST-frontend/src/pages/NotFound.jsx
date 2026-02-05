import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="not_found_page">
      <div className="container">
        <div className="not_found_inner">
          <div className="not_found_card">

            <div className="not_found_icon">
              <span>!</span>
            </div>

            <div className="not_found_code">404</div>

            <h1 className="not_found_title">
              Page <span>Not Found</span>
            </h1>

            <p className="not_found_text">
              Sorry, the page you are looking for doesn’t exist or has been moved.
              Please go back to the homepage or contact support.
            </p>

            <div className="not_found_action_row">
              <Link to="/" className="common_button">
                Back To Home
              </Link>

              <Link to="/contact" className="common_button invert">
                Contact Us
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
