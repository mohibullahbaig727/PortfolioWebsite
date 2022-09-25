import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/mohibullah-baig-1b49a220a/"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <AiFillInstagram />
      </a>
      <a href="https://github.com/" target="_blank">
        <AiFillGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
