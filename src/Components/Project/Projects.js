import React from "react";
import "./Projects.css";
import travelGuru from "../../images/travel-guru.png";
import volunteerNetwork from "../../images/volunteerNetwork.a1d0e3b3.PNG";
import country from "../../images/country.png";

import Project from "./Project";

const Projects = () => {
  const allProjects = [
    {
      id: "01",
      img: "" + volunteerNetwork,
      title: "Volunteer Client",
      description:
        "An user can select a social activity to participate. Also they will be able schedule their tasks by add a date. Admin can see all activities made by volunteers and can delete them if required.",
      gitHub: "https://github.com/hafiz1993/volanteer-client",
      liveLink: "https://volanteer-client-7a11e.web.app/",
    },

    {
      id: "02",
      img: "" + travelGuru,
      title: "Travel Guru",
      description:
        " an user will select destination, book the date. also I use firebase for collect google authentication. login and go chosen destination ",
      gitHub: "https://github.com/hafiz1993/travel-guru",
      liveLink: "https://travel-guru-292413.firebaseapp.com/",
    },

    {
      id: "03",
      img: "" + country,
      title: "Country API",
      description:
        "I use country api to load data. Show Country flag and name. I use Material UI for decoration.",
      gitHub: "https://github.com/hafiz1993/country-details",
      liveLink: "https://jovial-khorana-e0ab3e.netlify.app/",
    },
  ];

  return (
    <div id="project-section" className="container skill container-fluid ">
      <div className="back-line d-flex align-items-center skill-title">
        <div className="front-box d-flex align-items-center">
          <p className="d-flex align-items-center">My Projects </p>
        </div>
      </div>

      <div className="row">
        {allProjects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
