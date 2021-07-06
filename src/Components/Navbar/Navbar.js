import React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import CV from "../../images/cv/MD.HAFIZUR RAHAMAN_.pdf";

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "#182335" }}
      class="navbar navbar-expand-lg sticky-top navbar-light "
    >
      <div className="container">
        <a class="navbar-brand" href="#">
          <img class="img-fluid w-75 " src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarTogglerDemo02">
          <ul class="navbar-nav ms-auto mb-3 mb-lg-0">
            <li class="nav-item ms-3 d-flex justify-content-center">
              <a
                style={{ color: "#64FFDA" }}
                class="nav-link active "
                aria-current="page"
                href="#about-section"
              >
                About
              </a>
            </li>
            <li class="nav-item ms-3 d-flex justify-content-center">
              <a
                style={{ color: "#64FFDA" }}
                class="nav-link active"
                aria-current="page"
                href="#skill-section"
              >
                Skills
              </a>
            </li>
            <li class="nav-item ms-3  d-flex justify-content-center">
              <a
                style={{ color: "#64FFDA" }}
                class="nav-link active"
                aria-current="page"
                href="#project-section"
              >
                Projects
              </a>
            </li>
            <li class="nav-item ms-3  d-flex justify-content-center">
              <a
                style={{ color: "#64FFDA" }}
                class="nav-link active"
                aria-current="page"
                href="#contact-section"
              >
                Contact
              </a>
            </li>
            <li class="nav-item ms-5 fs-6 d-flex justify-content-center">
              <a href={CV} download="Hafizur Rahaman">
                <button
                  style={{ borderColor: "#64ffda", color: "#64ffda" }}
                  className="btn btn-outline-success ms-auto my-2 my-sm-0"
                >
                  Get Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
