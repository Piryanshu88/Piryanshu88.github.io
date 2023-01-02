import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiHackerrank } from "react-icons/si";
export const Footer = () => {
  return (
    <footer id="footer" className="last_change">
      <a href="#" className="footer__logo">
        Piryanshu
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/piryanshu-bisht-ba1a22231/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Piryanshu88" target="_blank">
          <AiFillGithub />
        </a>
        <a href="https://www.hackerrank.com/deepubisht2004" target="_blank">
          <SiHackerrank />
        </a>
      </div>
    </footer>
  );
};
