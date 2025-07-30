import React from "react";
import "./Projects.css";
import port1 from "./Images/portfolio1.jpg";
import port2 from "./Images/portfolio2.jpg";
import port3 from "./Images/portfolio3.jpg";
import port4 from "./Images/portfolio4.jpg";
import port5 from "./Images/portfolio5.jpg";
import port6 from "./Images/portfolio6.jpg";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <section className="portfolio" id="projects" ref={ref}>
      <h2 class="heading">
        Latest <span className="proj">Projects</span>
      </h2>

      <div class="portfolio-container">
        <div class="portfolio-box">
          <img src={port1} alt="computer" />
          <div class="portfolio-layer">
            <h4>Web Design</h4>
            <p>Typing Tester</p>
            <div className="view-code">
              <Link className="view" to="/typingtest">
                View
              </Link>
              <a
                className="code"
                href="https://github.com/Nithish-kumar07/Typing_Tester"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-box">
          <img src={port2} alt="college project" />
          <div class="portfolio-layer">
            <h4>Web Design</h4>
            <p>Student Enrollement</p>
            <div className="view-code">
              <Link className="view" to="/Enrollement">
                View
              </Link>
              <a
                className="code"
                href="https://github.com/Nithish-kumar07/Student_Enrollment"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-box">
          <img src={port3} alt="college blog" />
          <div class="portfolio-layer">
            <h4>Machine Learning</h4>
            <p>Credi Card Fraud Detection</p>
            <div className="view-code">
              {/* <Link className='view' to = '/Price'>View</Link> */}
              <a
                className="code"
                href="https://github.com/Nithish-kumar07/Fraud_Detection"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-box">
          <img src={port4} alt="upcomig" />
          <div class="portfolio-layer">
            <h4>Web Design</h4>
            <p>Password Validator</p>
            <div className="view-code">
              <Link className="view" to="/Password">
                View
              </Link>
              <a
                className="code"
                href="https://github.com/Nithish-kumar07/password_validator"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div class="portfolio-box">
          <img src={port5} alt="upcoming" />
          <div class="portfolio-layer">
            <h4>Web Design</h4>
            <p>QR Code Generator</p>
            <div className="view-code">
              <Link className="view" to="/QRcode">
                View
              </Link>
              <div>
                <a
                  className="code"
                  href="https://github.com/Nithish-kumar07/QR_code"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="portfolio-box">
          <img src={port6} alt="upcoming" />
          <div class="portfolio-layer">
            <h4>Web Design</h4>
            <p>upcoming...!</p>
            <div className="view-code">
              {/* <Link className="view" to="/Image">
                View
              </Link> */}
              {/* <a className='view' href='#projects'>View</a>
                    <a className='code' href='#projects'>Code</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Projects;
