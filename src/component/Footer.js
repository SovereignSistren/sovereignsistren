import React, { Component } from "react";

// import Chatbot from "../component/Chatbot";
export default class Footer extends Component {
  render() {
    return (
      <>
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-info ">
                  <div className="d-flex gap-2">
                    <img
                      src="/WhatsApp Image 2024-01-17 at 6.37.12 PM.jpeg"
                      className="rounded-full"
                      width="65px"
                      height="60px"
                      style={{
                        "border-radius": "55%",
                      }}
                    />
                    <h3
                      className="text-light m-0"
                      style={{ "align-items": "center", display: "flex" }}
                    >
                      SovereignSistren
                    </h3>
                  </div>
                  <br />
                  <p>
                    Goverment Engineering College <br />
                    Sejbahar,India
                    <br />
                    <br />
                    <strong>Phone:</strong> +91XXXXXXXX
                    <br />
                    <strong>Email:</strong> sovereignsistren@gmail.com
                    <br />
                  </p>
                  <div className="social-links mt-3">
                    <a
                      href="https://x.com/SSistren29510?t=5-IThTEQZKx0RLW-e3juAg&s=08"
                      className="twitter"
                    >
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a
                      href="https://www.instagram.com/sovereignsistren"
                      className="instagram"
                    >
                      <i className="bx bxl-instagram" />
                    </a>
                    <a
                      href="https://join.skype.com/invite/ylxsiflVguvV"
                      className="google-plus"
                    >
                      <i className="bx bxl-skype" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sovereign-sistren-8834722a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="linkedin"
                    >
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Services</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li>
                      <i className="bx bx-chevron-right"></i>{" "}
                      <a href="#">Healthcare</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />
                      <a href="#">Education</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />
                      <a href="#">Womens Safety</a>
                    </li>
                    <li>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Livelihood</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>For our daily information</h4>
                  <p></p>
                  <form action="" method="post">
                    <input type="email" className="form-control" name="email" />
                    <input
                      type="submit"
                      className="btn btn-danger border-0"
                      defaultValue="Subscribe"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>SovereignSistren</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>
        <div
          style={{ bottom: "34px", right: "3px", padding: "20px" }}
          className="back-to-top"
        >
          <button
            type="button"
            className="btn btn-danger text-white donate"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            <div className="d-flex gap-1 pt-1">
              <i className="bi bi-balloon-heart"></i>
              DONATE
            </div>
          </button>
        </div>
        {/* <!-- Modal --> */}
        {/* <Chatbot className="d-none" /> */}

        {/* End Footer */}
      </>
    );
  }
}
