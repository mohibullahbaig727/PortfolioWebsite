import React from "react";
import CTA from "./CTA";
import "./header.css";
import ProfileImage from "../../assets/person1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Mohibullah Baig</h1>
        <h5 className="text-light">Fron tend Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ProfileImage} alt="mohib" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
