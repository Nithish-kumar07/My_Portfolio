import React, { useState } from "react";
import "./enroll.css";

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    image: null,
  });
  const [enrolled, setEnrolled] = useState([]);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "SQL",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(files[0]),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEnrolled([...enrolled, formData]);
    setFormData({ name: "", email: "", skills: [], image: null });
  };
  const handleReset = () => {
    setFormData({ name: "", email: "", skills: [], image: null });
  };
  const handleDelete = (index) => {
    setEnrolled(enrolled.filter((_, i) => i !== index));
  };
  return (
    <div className="my-container">
      <div className="my-form">
        <h2 className="my-head">Student Enrollment Form</h2>
        <form className="cssform" onSubmit={handleSubmit}>
          <label>Name :</label>
          <input
            className="my-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Email :</label>
          <input
            className="my-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Skills :</label>
          <div className="skills">
            {skills.map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleChange}
                />
                {skill}
              </label>
            ))}
          </div>
          <label>profile Image :</label>
          <input
            className="my-input"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />

          <button type="submit">Enroll Student</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
      <div className="enrolled">
        <h2>Enrolled Students</h2>
        {enrolled.length > 0 ? (
          <ul>
            {enrolled.map((student, index) => (
              <li key={index} className="student-card">
                <p>
                  <strong>Name:</strong>
                  {student.name}
                </p>
                <p>
                  <strong>Email:</strong>
                  {student.email}
                </p>
                <p>
                  <strong>Skills:</strong>
                  {student.skills.join(", ")}
                </p>
                {student.image && (
                  <img
                    src={student.image}
                    alt="profile"
                    className="profile-image"
                  />
                )}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No Student enrolled yet.</p>
        )}
      </div>
    </div>
  );
};

export default Enrollment;
