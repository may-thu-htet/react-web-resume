import React from "react";
import "../css/footer.css";
import thankYouCat from "../photos/thank-you.png";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-text">Thank you for your attention!!!</p>
      <img className="thankyou-photo" alt="thankyou-cat" src={thankYouCat} />
    </div>
  );
}

export default Footer;
