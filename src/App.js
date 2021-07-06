import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Skill from "./Components/Skill/Skill";
import Projects from "./Components/Project/Projects";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import LoveToDo from "./Components/LoveToDo/LoveToDo";

const App = () => {
  return (
    <div style={{ backgroundColor: "#0A192F" }}>
      <Navbar />
      <div className="container ">
        <Header />
        <About />
        <Skill />
        <Projects />
        <LoveToDo />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
