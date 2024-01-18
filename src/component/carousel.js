// Import React and necessary dependencies
import React from "react";

// Define a functional component for the home page
function carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide1">
      <div className="carousel-inner">
        <div className="carousel-item active img1">
          <video autoPlay muted className="video" loop>
            <source
              className="content"
              src="../WhatsApp Video 2024-01-17 at 12.13.32.mp4"
              type="video/mp4"
            />
          </video>

          <div className="carousel-caption d-md-block text-dark content ">
            <br />
            <p className="text-light text-center position-absolute top-50 ">
              <h3>
                {" "}
                <b className="text-light">INTRODUCING SOVEREIGNSISTREN</b>
              </h3>
              <b>
                Empowering rural women would include: safe spaces, skills
                development, involvement in self income generating activities,
                networking and access to healthcare.
              </b>
              <br />
              <br />
              <a
                href="#about"
                className="btn btn-outline-danger"
                style={{ "max-height": "40px", "max-width": "130px" }}
              >
                Get Started
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default carousel;
