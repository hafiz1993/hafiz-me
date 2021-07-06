import React from "react";
import self from "../../images/main.jpg";
import "./About.css";
import CV from "../../images/cv/MD.HAFIZUR RAHAMAN_.pdf";

const About = () => {
  return (
    <div id="about-section" className="container about">
      <div className="back-line d-flex align-items-center">
        <div className="front-box d-flex align-items-center">
          <p className="d-flex align-items-center">About Me</p>
        </div>
      </div>
      <div className="row d-flex align-items-center">
        <div data-aos="fade-right" className="col-md-5 img-size">
          <img
            style={{ height: "50vh", width: "50vh" }}
            src={self}
            alt="Hafizur Rahaman"
            className="img-fluid"
          />
        </div>
        <div data-aos="fade-left" className="col-md-6 about-mySelf">
          <p>
            This is Hafizur Rahman from Dhaka. I am a junior frontend developer
            and who Interested in new technologies. I like to work in groups. I
            have proven myself to be a problem solver naturally. As someone who
            takes responsibility for my own personal development, I am
            continually evaluating and upgrading my skills so that I can stay at
            the cutting edge of web development.
          </p>
          <a href={CV} download="Hafizur Rahaman">
            <button
              style={{ backgroundColor: "#64ffda" }}
              class="btn  my-2 my-sm-0 btn-style"
            >
              Get Resume
            </button>
          </a>
          <a href="#skill-section">
            <button
              style={{ borderColor: "#64ffda", color: "#64ffda" }}
              className="btn btn-outline-success my-2 my-sm-0 btn-style"
            >
              My Skill
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
