import React from "react";
import "./navbar.css";
import pic from "./Images/logo.webp";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

export const Navbar = ({
  scrollToHome,
  scrollToAbout,
  scrollToSkills,
  scrollToEducation,
  scrollToProjects,
  scrollToContact,
}) => {
  return (
    <div className="container">
      <header className="header">
        <img className="logo" src={pic} alt="logo" />
        <nav className="nav-bar">
          <ul className="list">
            <li>
              <button onClick={scrollToHome}>
                <FaHome className="icons" />
                Home
              </button>
            </li>
            <li>
              <button onClick={scrollToAbout}>
                <FaUserAlt className="icons" />
                About
              </button>
            </li>
            <li>
              <button onClick={scrollToSkills}>
                <FaTools className="icons" /> Skills
              </button>
            </li>
            <li>
              <button onClick={scrollToEducation}>
                <FaGraduationCap className="icons" />
                Education
              </button>
            </li>
            <li>
              <button onClick={scrollToProjects}>
                <FaProjectDiagram className="icons" />
                Projects
              </button>
            </li>
            <li>
              <button onClick={scrollToContact}>
                <MdContactPhone className="icons" />
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Navbar;
