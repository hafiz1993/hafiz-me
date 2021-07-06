import React from "react";
import "./Header.css";
import Typical from "react-typical";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import CV from "../../images/cv/MD.HAFIZUR RAHAMAN_.pdf";

const Header = () => {
  return (
    <div class=" intro container px-5">
      <div id=" intro-section" class="col-md-12 ">
        <p class=" hello">Hello! I am</p>
        <h1 class="name-color">Hafizur Rahaman</h1>
        <h3 class="font-weight-bolder  developer">
          <span class="text-light"> I am a </span>
          <Typical
            steps={[
              " Self Taught Programmer",
              3000,
              "Web Developer",
              3000,
              "Team Player",
              3000,
              " Quick Learner",
              3000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h3>
        <a href={CV} download="Hafizur Rahaman">
          <button
            style={{ backgroundColor: "#64ffda" }}
            class="btn  my-2 my-sm-0 btn-style"
          >
            Get Resume
          </button>
        </a>
        <a href="#about-section">
          <button
            style={{ borderColor: "#64ffda", color: "#64ffda" }}
            class="btn btn-outline-success my-2 my-sm-0 btn-style"
          >
            About Me
          </button>
        </a>

        <br />
        <br />
        <br />
        <br />
        <div class="back-line d-flex align-items-center">
          <div class="front-box d-flex align-items-center">
            <p class="d-flex align-items-center">Follow Me</p>
          </div>
        </div>
      </div>
      <div class="icon">
        <a
          class="icon2"
          href="https://github.com/hafiz1993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          class="icon2"
          href="https://www.linkedin.com/in/hafizur-rahaman-1903a8187/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Header;
