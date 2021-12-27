import React, { Component } from "react";
import "./footer/footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="text-center">
          <span className="social">
            <a
              className="btn btn-social-icon btn-facebook media"
              href="https://www.facebook.com/kanika.mehrotra.54/"
            >
              <i className="fa fa-facebook "></i>
            </a>
          </span>
          <span className="social">
            <a
              className="btn btn-social-icon btn-twitter media"
              href="https://twitter.com/mehrotra_10"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </span>
          <span className="social">
            <a
              className="btn btn-social-icon btn-instagram media insta"
              href="https://www.instagram.com/kanika._.10/"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </span>
          <span className="social">
            <a
              className="btn btn-social-icon btn-linkedin media"
              href="https://www.linkedin.com/in/kanika-mehrotra-51a7211a1/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </span>
          <span className="social">
            <a
              className="btn btn-social-icon btn-github media"
              href="https://github.com/kanika-10"
            >
              <i className="fa fa-github"></i>
            </a>
          </span>
          <span className="social">
            <a
              className="quora media"
              href="https://www.quora.com/profile/Kanika-Mehrotra-7"
            >
              <i className="fa fa-quora "></i>
            </a>
          </span>
        </div>

        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="copyright">© Designed by Kanika Mehrotra</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
