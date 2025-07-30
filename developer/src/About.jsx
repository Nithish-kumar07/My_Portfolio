import React from "react";
import "./About.css";
import { forwardRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import Pic from "./about.jpg";

const About = forwardRef((props, ref) => {
  const Navigate = useNavigate();
  const moreAbout = () => {
    window.scrollTo(0, 0);
    Navigate("/internship");
  };
  return (
    <section className="about" id="About" ref={ref}>
      <div className="about-container">
        {/* <div className="about-img">
          <img src={Pic} alt="Nithish" />
        </div> */}

        <div className="about-content">
          <h2 className="heading">
            About <span className="about-me">Me</span>
          </h2>
          {/* <h3>
            Web <span className="developer">Developer!</span>
          </h3> */}
          <div className="aboutnithish">
            <p>
              Hello! I’m Nithish — a frontend developer dedicated to crafting
              clean, efficient, and user-friendly web applications. My approach
              combines technical skills with a strong eye for design and user
              experience.
            </p>
            <p>
              Beyond coding, I actively engage in public speaking, mentoring,
              and data analysis. I’m currently expanding my expertise in
              full-stack development using React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
        <div className="skillstack">
          <p>
            🎯 <strong>Stack:</strong> MERN (MongoDB, Express, React, Node.js)
          </p>
          <p>
            💻 <strong>UI:</strong> HTML5, CSS3, JavaScript, React
          </p>
          <p>
            🧰 <strong>Dev Tools:</strong> Git, GitHub, VS Code
          </p>
        </div>
      </div>
      <button className="knowmore" onClick={moreAbout}>
        <FaUserAlt
          style={{
            marginRight: "8px",
          }}
        />
        Know more about Me
      </button>
    </section>
  );
});

export default About;
