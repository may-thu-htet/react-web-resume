import React from "react";
import "../css/volunteering.css";

function Volunteering() {
  return (
    <div className="volunteer-container">
      <h4 className="volunteer-title">Volunteering</h4>
      <div className="volunteer-roles">
        <p className="volunteer-role">
          Volunteer Sales Assistant{" "}
          <em className="company">[Vision Ireland, Clane]</em>
        </p>
        <ul className="duty">
          <li>
            Assisting customers with their choice of clothes, suggesting fashion
            design and bargain clothes
          </li>
          <li>Meet the daily target of EUR 500 </li>
          <li>
            Took this opportunity to improve my English speaking by interacting
            with customers
          </li>
        </ul>
        <p className="volunteer-role">
          Volunteer English Tutor{" "}
          <em className="company">[Failte Isteach, Straffan]</em>
        </p>
        <ul className="duty">
          <li>Teaching English to Ukrainian refugees at a community center</li>
          <li>Made some Ukrainian friends</li>
        </ul>
      </div>
    </div>
  );
}

export default Volunteering;
