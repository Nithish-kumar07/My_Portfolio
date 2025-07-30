import React from "react";
import "./internship.css";
import { FaStar } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Internship = () => {
  const Navigate = useNavigate();
  const aboutme = () => {
    window.scrollTo(0, 800);
    Navigate("/");
  };
  return (
    <div className="ict">
      <h2 className="internship">
        Internship <span>Experience</span>
      </h2>
      <div className="certification">
        <div className="Intern">
          <h2>Data Science Intern</h2>
          <p>
            <strong>Organization:</strong>Brain-o-Vison
          </p>
          <p>
            <strong>Duration:</strong>October - 2024 to December - 2024
          </p>
          <p>
            Worked on a Credit Card Fraud Detection project. Gained hands-on
            experience in Python, Scikit-learn, Pandas, NumPy, Matplotlib, and
            data preprocessing while exploring real-world applications of
            machine learning.
          </p>
        </div>
        <div className="Intern">
          <h2>Web Development Intern</h2>
          <p>
            <strong>Organization:</strong>SURE Trust(AICTE)
          </p>
          <p>
            <strong>Duration:</strong>December 2024 – May 2025
          </p>
          <p>
            Worked on the MERN-based Education Platform project. Gained hands-on
            experience in React.js, Express.js, Node.js, MongoDB and JavaScript.
          </p>
        </div>
        <div className="Intern">
          <h2>Data Science with ML & DL</h2>
          <p>
            <strong>Organization:</strong>Quality Thoughts
          </p>
          <p>
            <strong>Duration:</strong>June 2025 - November 2025
          </p>
          <p>
            <strong>Status:</strong> Ongoing
          </p>
          <p>
            <strong>Learning Focus:</strong> Core concepts of Data Science
            including supervised and unsupervised ML algorithms, neural
            networks, and hands-on with tools like Python, TensorFlow, and
            scikit-learn.
          </p>
        </div>
      </div>
      <h2 className="internship">
        Certificates & <span>Short Courses</span>
      </h2>
      <div className="certificates">
        <div className="certificate-item">
          <h3>Responsive Web Design</h3>
          <p>
            <strong>Platform:</strong> Udemy
          </p>
          <p>
            <strong>Year:</strong> 2024
          </p>
        </div>
        <div className="certificate-item">
          <h3>Career Essentials</h3>
          <p>
            <strong>Platform:</strong> Linkedin
          </p>
          <p>
            <strong>Year:</strong> 2024
          </p>
        </div>
        <div className="certificate-item">
          <h3>Soft Skills</h3>
          <p>
            <strong>Platform:</strong> NPTEL
          </p>
          <p>
            <strong>Year:</strong> 2024
          </p>
        </div>

        <div className="certificate-item">
          <h3>Web Design</h3>
          <p>
            <strong>Platform:</strong> MotionCut
          </p>
          <p>
            <strong>Year:</strong> 2024
          </p>
        </div>
        <div className="certificate-item">
          <h3>Web Development</h3>
          <p>
            <strong>Platform:</strong> Coding Raja Technologies
          </p>
          <p>
            <strong>Year:</strong> 2024
          </p>
        </div>
      </div>
      <h2 className="internship">
        Achievements & <span>Awards</span>
      </h2>
      <ul className="achievements">
        <li className="achievement-item">
          <FaStar color="gold" size={20} />
          Winner – Slogan Writing Contest, KIA India
        </li>
        <li className="achievement-item">
          <FaStar color="gold" size={20} />
          Quiz Competition – Winner, KIA India
        </li>
        <li className="achievement-item">
          <FaStar color="gold" size={20} />
          Served as Coordinator in college-level Hackathon events
        </li>
        <li className="achievement-item">
          <FaStar color="gold" size={20} />
          Actively participated in college activities
        </li>
      </ul>
      <button className="back" onClick={aboutme}>
        <FaUserAlt
          style={{
            marginRight: "8px",
          }}
        />
        Back to About Me
      </button>
    </div>
  );
};

export default Internship;
