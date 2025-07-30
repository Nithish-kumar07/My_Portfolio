import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  // FaNodeJs,
  FaPython,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
import { forwardRef } from "react";
const skillset = [
  {
    id: 1,
    name: "HTML5",
    icon: <FaHtml5 className="html-icon" />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt className="css-icon" />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs className="js-icon" />,
  },
  {
    id: 4,
    name: "React Js",
    icon: <FaReact className="react-icon" />,
  },
  // {
  //   id: 5,
  //   name: "Node.js",
  //   icon: <FaNodeJs className="node-icon" />,
  //
  // },
  // {
  //   id: 6,
  //   name: "Express.js",
  //   icon: <SiExpress className="express-icon" />,
  //
  // },
  {
    id: 7,
    name: "MongoDB",
    icon: <SiMongodb className="mongodb-icon" />,
  },
  {
    id: 8,
    name: "python",
    icon: <FaPython className="python-icon" />,
  },
];

const Skills = forwardRef((props, ref) => {
  return (
    <section className="skills-section" id="skills" ref={ref}>
      <h2>
        My Tech <span className="stack">Stack</span>
      </h2>
      <div className="skills-container">
        {skillset.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
