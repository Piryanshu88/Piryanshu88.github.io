import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import "./Header.css";
export const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/piryanshu-bisht-ba1a22231/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Piryanshu88" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.hackerrank.com/deepubisht2004" target="_blank">
        <SiHackerrank />
      </a>
    </div>
  );
};
