import React, { useEffect } from "react";
import "./LoveToDo.css";
import { MdLibraryBooks, MdComputer } from "react-icons/md";
import { FaBicycle } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import scuba from "../../images/Scuba.fee5a26c.svg";

const LoveToDo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="container loveToDo container-fluid">
      <div className="back-line d-flex align-items-center skill-title">
        <div className="front-box d-flex align-items-center">
          <p className="d-flex align-items-center">Love-To-Do</p>
        </div>
      </div>
      <div className="row ">
        <div className="col-sm-6 col-md-3 mesure" style={{ height: "12vh" }}>
          <div data-aos="zoom-in-right" className="love-style">
            <h3 className="blog-icon">
              <MdLibraryBooks />
            </h3>
            <h3 className="blog-title">Reading</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mesure" style={{ height: "12vh" }}>
          <div data-aos="zoom-in-left" className="love-style">
            <h3 className="blog-icon">
              <FaBicycle />
            </h3>
            <h3 className="blog-title">Cycling</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mesure" style={{ height: "12vh" }}>
          <div data-aos="zoom-in-right" className="love-style">
            <h3 className="blog-icon">
              <MdComputer />
            </h3>
            <h3 className="blog-title">Programming</h3>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div data-aos="zoom-in-left" className="love-style">
            <h3 className="blog-icon">
              <BsMusicNoteBeamed />
            </h3>
            <h3 className="blog-title">Music</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveToDo;
