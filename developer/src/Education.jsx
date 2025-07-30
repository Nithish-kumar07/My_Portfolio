import React from "react";
import "./Education.css";
import { forwardRef } from "react";

const educationData = [
  {
    type: "Schooling",
    place: "Sri Vivekananda English Medium School, Gorantla",
    year: "2010 - 2015",
    focus: "built strong academic foundation and communication skills.",
    position: "right",
  },
  {
    type: "Diploma",
    place: "Priyadarshini Institute of Technology, Tirupathi",
    year: "2015 - 2019",
    focus: "Electrical and Electronics Engineering",
    position: "left",
  },
  {
    type: "Graduation",
    place: "Bharatiya Engineering Science and Technology Innovation University",
    year: "2022 - 2025",
    focus: "Computer Science and Engineering",
    position: "right",
  },
];

const Education = forwardRef((props, ref) => {
  return (
    <div className="education-section" ref={ref}>
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`container1 ${item.position}`}
            data-aos={item.position === "right" ? "zoom-in-up" : "zoom-in-down"}
          >
            <div className="content">
              <h3>{item.type}</h3>
              <p>
                <strong>
                  {item.type === "Schooling" ? "School" : "College"}:
                </strong>{" "}
                {item.place}
              </p>
              <p>
                <strong>Year:</strong> {item.year}
              </p>
              <p>{item.focus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Education;
