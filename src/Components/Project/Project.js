import React, { useEffect } from "react";
import "./Projects.css";
import { FaGithubSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { img, title, description, gitHub, liveLink } = props.project;

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card-group card-style">
        <div data-aos="zoom-in-down" className="card">
          <img src={img} className="card-img-top img-fluid" alt={title} />
          <div style={{ height: "150px" }} className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="card-footer">
            <a href={gitHub} target="_blank">
              <FaGithubSquare />
            </a>
            <a href={liveLink} target="_blank">
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
