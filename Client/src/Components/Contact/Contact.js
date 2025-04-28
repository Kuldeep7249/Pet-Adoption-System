import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:petcare@gmail.com">
          petcare@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in">
          User Name: PetCare
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com">
          PetCare
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com">
          PetCare
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+91897654321">
          +91 897654321
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
