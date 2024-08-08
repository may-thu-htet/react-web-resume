import React from "react";
import "../css/education.css";

function Education() {
  return (
    <div className="education-container">
      <h4 className="education-title">Education</h4>
      <div className="education-section">
        <p className="degree">
          Master of Science in Naval Architecture
          <em className="university">[Newcastle University, UK]</em>{" "}
        </p>
        <p className="result">Passed with Distinction (Grade: 77.8)</p>
      </div>
      <div className="education-section">
        <p className="degree">
          Bachelor of Engineering in Naval Architecture
          <em className="university">[Myanmar Maritime University]</em>
        </p>
        <p className="result">CGPA: 4.82/5.00</p>
      </div>
    </div>
  );
}

export default Education;
