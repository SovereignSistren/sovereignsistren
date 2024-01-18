import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  function handleSubmit(e) {
    e.preventDefault();
    alert("Donation Successfully 🌹");
  }

  return (
    <>
      <header className="sticky-top " style={{ "z-index": "999" }}>
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

        <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/#about">About Us</a>
          <li className="dropdown">
            <a
              style={{ "font-size": "1.rem" }}
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Articles
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="/article#Ngos">
                  Ngos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/article#wmenEmp">
                  Women stats in India
                </a>
              </li>
            </ul>
          </li>
          <a href="/#contact">Contact Us</a>
          <a href="/Cycle">Cycle Tracker</a>
          <button
            className="d-block nav-btn nav-close-btn"
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <div className="d-flex">
          <button
            className="nav-btn d-flex"
            onClick={showNavbar}
            style={{ "font-size": "1.5rem" }}
          >
            {" "}
            <FaBars />
          </button>

          <form action="login">
            <input type="submit" className="btn btn-dark" value="Login" />
          </form>
        </div>
      </header>
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Donate
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                method="post"
                id="donationForm"
                action="#?"
                onSubmit={handleSubmit}
              >
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Leave a comment here"
                    id="floatingTextarea"
                  />
                  <label htmlFor="floatingTextarea">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <select
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label  select example"
                  >
                    <option selected>Cash</option>

                    <option value="1">UPI</option>
                    <option value="2">Three</option>
                  </select>
                  <label htmlFor="floatingSelect">Pay as</label>
                </div>{" "}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    type="text"
                  />
                  <label htmlFor="floatingTextarea2">Ammount</label>
                </div>
                <div className="modal-footer text-center">
                  <input
                    type="submit"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    value="Donate"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
