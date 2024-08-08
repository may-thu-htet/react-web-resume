import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../css/experience.css";

function Experience() {
  const [expandedSections, setExpandedSections] = useState({
    1: false,
    2: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  return (
    <div className="experience-container">
      <h4 className="experience-title">Work Experience</h4>
      <div className="experience">
        <button className="accordion-button" onClick={() => toggleSection(1)}>
          Oct 2022 – Jan 2024 {/* change of icon from downward to upward */}
          <span className="icon">
            {expandedSections[1] ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </span>
        </button>
        <div
          className={`accordion-content ${
            expandedSections[1] ? "expanded" : ""
          }`}
        >
          <h6>
            UIUX Designer/Frontend Developer
            <em className="company">
              <a
                href="https://www.saison-technology.com/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Saison Technology Co.,Ltd. Tokyo, Japan]
              </a>
            </em>
          </h6>
          <ul className="tasks">
            <li>
              Created pixel perfect design using Figma for in-house software in
              line with the design criteria.
            </li>
            <li>
              Performed pair-coding with a senior frontend developer for
              in-house design system using ReactJS, HTML, CSS and JavaScript to
              provide the frontend engineers from cross functional teams so that
              they can smoothly use the design components created by us.
            </li>
            <li>
              Contributed as a bridge for designers and engineers with the
              knowledge of both design and technical aspects leading to
              effective communication, reducing meeting time.
            </li>
            <li>
              Engaged in documentation of each design component for easy
              maintenance and future reference resulting in reduction of
              overtime working hour of team members by 30%.
            </li>
            <li>
              Involved in Design and development of an E-Commerce site by using
              Java Spring boot framework and PostgreSQL. Verified all use-case
              scenarios with JUnit tests.
            </li>
            <li>
              Developed employee management system using Java Spring Boot and
              PostgreSQL.
            </li>
          </ul>
        </div>
      </div>
      <div className="experience">
        <button className="accordion-button" onClick={() => toggleSection(2)}>
          Aug 2018 – April 2022{" "}
          <span className="icon">
            {expandedSections[2] ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </span>
        </button>
        <div
          className={`accordion-content ${
            expandedSections[2] ? "expanded" : ""
          }`}
        >
          <h6>
            Mechanical Product Design Engineer
            <em className="company">
              {" "}
              <a
                href="https://www.toyota-kohki.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                [Toyota Forms Co.,Ltd. Tokyo, Japan]{" "}
              </a>
            </em>
          </h6>
          <ul className="tasks">
            <li>
              Created technical drawings using CAD software for molds of precast
              concrete products including bill of material (BOM) to be
              fabricated in factory.
            </li>
            <li>
              Performed strength analysis using SolidWorks to check whether the
              mold structure is safe and meet the Japanese standard.
            </li>
            <li>
              Implemented improvement sheets monthly and shared them with other
              engineers to enhance work efficiency and reduce time consumption.
            </li>
            <li>
              Occasionally visited the factory to learn from assemblers and
              fabricators, applying their knowledge in refining mold designs,
              resulting in 10% cost reduction.
            </li>
            <li>
              Created user manuals and dimension inspection sheets in both
              Japanese and English in an easy-tounderstand manner for domestic
              and international customers.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
