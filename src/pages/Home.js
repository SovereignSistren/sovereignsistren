// Home.js
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Carousel from "../component/carousel";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aqeg30u",
        "template_is0h3ap",
        form.current,
        "IcISkkK8uI0PxgFnv",
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            alert("successfully send message");
          }
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div>
      <Carousel />
      <Navbar />
      <main id="main">
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2 className="text-center">About Us</h2>
            </div>

            <div className="row m-2">
              <div className="col-lg-6 mb-2">
                <iframe
                  width="100%"
                  style={{ "justify-content": "center" }}
                  height="315"
                  src="https://www.youtube.com/embed/1e8xgF0JtVg?si=jefd5TkCymrNMHz5"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="col-lg-6 ">
                <div className="info-box ">
                  <div className="accordion-list">
                    <ul>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          className="collapsed"
                          data-bs-target="#accordion-list-1"
                        >
                          <span>01</span> Why to choose SovereignSistren?{" "}
                          <i className="bx bx-chevron-down icon-show"></i>
                          <i className="bx bx-chevron-up icon-close"></i>
                        </a>
                        <div
                          id="accordion-list-1"
                          className="collapse"
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            SovereignSistren is a platform which provides
                            essential stuffs for women in one place, whenever a
                            women is in need .It will understand your problems
                            and will find out feasible ways to solve it. In
                            addition it also encourages women to take up their
                            roles in societies and to create difference in the
                            world.
                          </p>
                        </div>
                      </li>

                      <li>
                        <a
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-list-2"
                          className="collapsed"
                        >
                          <span>02</span> Which areas does SovereignSistren work
                          in?
                          <i className="bx bx-chevron-down icon-show"></i>
                          <i className="bx bx-chevron-up icon-close"></i>
                        </a>
                        <div
                          id="accordion-list-2"
                          className="collapse"
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            There are four primary areas in which we run
                            programmes, namely education, healthcare, livelihood
                            and Womens safety. Our work includes bringing about
                            gender transformative change, building resilience
                            and inclusive governance.
                          </p>
                        </div>
                      </li>

                      <li>
                        <a
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-list-3"
                          className="collapsed"
                        >
                          <span>03</span>What SovereignSistren do with the
                          donation?{" "}
                          <i className="bx bx-chevron-down icon-show"></i>
                          <i className="bx bx-chevron-up icon-close"></i>
                        </a>
                        <div
                          id="accordion-list-3"
                          className="collapse"
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            SovereignSistren use the donations to help women and
                            girls in need. We also use the donations to help the
                            NGOs and the government policy and schemes.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mb-5 mt-5">
            <div className="row" style={{ "justify-content": "center" }}>
              <div className="col-md-3 col-sm-6">
                <div className="counter">
                  <div className="counter-icon">
                    <i className="fa fa-globe"></i>
                  </div>
                  <h3>
                    Our <br />
                    Users
                  </h3>
                  <span className="counter-value">14</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter pink">
                  <div className="counter-icon">
                    <i className="fa fa-inr"></i>
                  </div>
                  <h3>Upcoming projects</h3>
                  <span className="counter-value">13</span>
                </div>
              </div>

              <div className="col-md-3 col-sm-6">
                <div className="counter third">
                  <div className="counter-icon">
                    <i className="fa fa-smile-o"></i>
                  </div>
                  <h3>Hours of Supports</h3>
                  <span className="counter-value">146</span>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="counter four">
                  <div className="counter-icon">
                    <i className="fa fa-handshake"></i>
                  </div>
                  <h3>Our Volunteers</h3>
                  <span className="counter-value">12</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Counts Section ======= */}

        <hr />
        <section id="portfolio" className="portfolio ">
          <div className="container">
            <div className="section-title">
              <h2 className="text-center">Our Services</h2>
              <p>
                Our aim is to provide with the various interventions including
                womens health, enhancing womenss and children opportunities in
                education through capacity building, digital
                literacy,employment,skill development and sustainable
                development.
              </p>
            </div>
            <center>
              <div className="warpper">
                <input className="radio" id="one" name="group" type="radio" />
                <input className="radio" id="two" name="group" type="radio" />
                <input className="radio" id="three" name="group" type="radio" />
                <input className="radio" id="four" name="group" type="radio" />
                <input className="radio" id="five" name="group" type="radio" />
                <div className="tabs">
                  <label className="tab" id="one-tab" htmlFor="one">
                    Healthcare <i className="bi bi-hospital"></i>
                  </label>
                  <label className="tab" id="two-tab" htmlFor="two">
                    Education <i className="bi bi-bank"></i>
                  </label>
                  <label className="tab" id="three-tab" htmlFor="three">
                    Livelihood <i className="bi bi-emoji-smile"></i>
                  </label>
                  <label className="tab" id="four-tab" htmlFor="four">
                    Womens safety <i className="fas fa-shield-alt"></i>
                  </label>
                </div>
                <div className="panels">
                  <div className="panel" id="one-panel">
                    <div className="panel-title"></div>
                    <ul
                      style={{
                        "text-decoration": "underline",
                        "text-align": " justify",
                        "font-size": "18px",
                      }}
                    >
                      <li>
                        <a href="Health" className="text-dark">
                          Major women disease
                        </a>
                      </li>

                      <li>
                        <a href="Health/#healthtip" className="text-dark">
                          Health tips and awareness session for women
                        </a>
                      </li>
                      <li>
                        <a href="Health" className="text-dark">
                          Talk to an expert & periods tracker
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="panel" id="two-panel">
                    <div className="panel-title"></div>
                    <ul
                      style={{
                        "text-decoration": "underline",
                        "text-align": " justify",
                        "font-size": "18px",
                      }}
                    >
                      <li>
                        <a href="/cat" className="text-dark">
                          Primary and secondary education for children & Women
                          along with Scholarships
                        </a>
                      </li>

                      <li>
                        <a href="/cat" className="text-dark">
                          Vocational educational and skill training
                        </a>
                      </li>
                      <li>
                        <a href="/cat" className="text-dark">
                          Music, sports, life skills education
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="panel" id="three-panel">
                    <div className="panel-title"></div>
                    <ul
                      style={{
                        "text-decoration": "underline",
                        "text-align": " justify",
                        "font-size": "18px",
                      }}
                    >
                      <li>
                        <a href="/Live" className="text-dark">
                          Empowering smallholder women farmers
                        </a>
                      </li>

                      <li>
                        <a href="/Live" className="text-dark">
                          Women entrepreneurship development
                        </a>
                      </li>
                      <li>
                        <a href="/Live" className="text-dark">
                          Women led-clean energy solutions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="panel" id="four-panel">
                    <div className="panel-title"></div>
                    <ul
                      style={{
                        "text-decoration": "underline",
                        "text-align": " justify",
                        "font-size": "18px",
                      }}
                    >
                      <li>
                        <a href="/Safe" className="text-dark">
                          Womens safety measures
                        </a>
                      </li>
                      <li>
                        <a href="/Safe" className="text-dark">
                          Womens self defence techniques
                        </a>
                      </li>
                      <li>
                        <a href="/Safe" className="text-dark">
                          24/7 Helpline and Safety Apps with speedy response
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </center>
          </div>
        </section>
        <section className="cta">
          <div className="container">
            <div className="text-center">
              <h3 className="text-dark">
                Chasing dreams: A Tale that inspires the Soul
              </h3>
              <p className="text-dark">
                Read to some of the inspiring stories of the women who made
                themselves known in the world.
              </p>
            </div>
          </div>
        </section>
        {/* Carousel wrapper */}

        <div
          id="carouselExample"
          className="carousel slide mt-5 container"
          style={{ "margin-top": "30px" }}
        >
          <div className="section-title">
            <h2 className="text-center">Some inspiring stories</h2>
          </div>
          <div className="carousel-inner text-center">
            <div className="carousel-item active ">
              <img
                className="rounded-circle shadow-1-strong mb-4 image"
                src="https://data1.ibtimes.co.in/en/full/697329/hima-das.jpg"
                alt="avatar"
              />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">
                    <b>Hima Das</b>
                  </h5>
                  <p>
                    <b>Dhing Express</b>
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2" />
                    Hima Das is the first Indian athlete (sprint runner) to win
                    gold at the IAAF World Under-20 Athletics Championship in
                    2018, held at Tampere, Finland. Later, she went on to win
                    gold and silver medals at the Asian Games held in Jakarta.
                    She currently holds the Indian national record in 400
                    meters, with a timing of 50.79s. The daughter of a humble
                    rice farmer near the town of Dhing in Assam, Hima Das became
                    a national phenomenon at the young age of 18.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="rounded-circle shadow-1-strong mb-4 image"
                src="https://www.indianaviationnews.net/careers/wp-content/uploads/2021/06/Captain-Zoya-Agarwal.jpeg"
                alt="avatar"
                style={{ width: 150 }}
              />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">
                    <b>Zoya Agrawal</b>
                  </h5>
                  <p>
                    <b>Air India Caption</b>
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2" />
                    Zoya Agarwal is an Indian commercial pilot who has flown for
                    Air India. She is known for her achievements in aviation,
                    such as being the youngest woman pilot in India to fly a
                    Boeing-777 in 20131, co-piloting the first repatriation
                    flight under the Vande Bharat Mission in 20202, and
                    captaining an all-woman crew on the longest non-stop
                    commercial flight to India in 20213. She has also been
                    chosen by the United Nations as its spokesperson for
                    Generation Equality4 and has been commemorated by the San
                    Francisco International Airport aviation museum for her
                    career and empowerment of women. She is an inspiration to
                    many aspiring pilots and women around the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="rounded-circle shadow-1-strong mb-4 image"
                src="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Kiran_Mazumdar-Shaw_1024x1024.jpg?v=1689940154"
                alt="avatar"
                style={{ width: 150 }}
              />
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h5 className="mb-3">
                    <b>Kiran Mazumdar-Shaw</b>
                  </h5>
                  <p>
                    <b>Founder</b>
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-quote-left pe-2" />
                    Kiran Mazumdar-Shaw, the founder of Biocon, is a
                    trailblazing entrepreneur and businesswoman. With her vision
                    and perseverance, she transformed Biocon into a leading
                    global biopharmaceutical company. Her journey is a testament
                    to the power of innovation, resilience, and the ability to
                    create a positive impact on society.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="text-dark carousel-control-prev-icon "
              aria-hidden="true"
            />
            <i className="fas fa-arrow-left text-dark pe-2" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <i className="fas fa-arrow-right text-dark pe-2" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Carousel wrapper */}

        <section id="contact" className="container">
          <div className="section-title">
            <h2 className="text-center">Contact Us</h2>
          </div>
          <div className="contact-container row">
            <div className="col d-sm-none d-lg-block d-none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.727606974106!2d81.65652887494608!3d21.163235880519938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28db654fdf4aa9%3A0x3ac2ad9bd20088ab!2sGovernment%20Engineering%20College%20Raipur!5e0!3m2!1sen!2sin!4v1704734897988!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="col">
              <form className="container" ref={form} onSubmit={sendEmail}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="your-name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="your-name"
                      name="user_name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="your-surname" className="form-label">
                      Your Surname
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="your-surname"
                      name="your-surname"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="your-email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="your-email"
                      name="user-email"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="your-subject" className="form-label">
                      Your Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="your-subject"
                      name="your-subject"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="your-message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="your-message"
                      name="message"
                      rows={5}
                      required=""
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <div className="row">
                      <div className="col-md-6">
                        <button type="submit" className="btn btn-dark fw-bold">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* End Contact Us Section */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
