import React from "react";
import "./About.css";
import ME from "../../assets/pirya.png";
import { FaAward } from "react-icons/fa";
import { VscSymbolProperty } from "react-icons/vsc";
import { VscFolderLibrary } from "react-icons/vsc";

//C:\Users\Piryanshu\Desktop\MY_Portfolio\my-portfolio\src\assets\pirya.png
export const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Get Hand on</h5>
              <small>More than 2000 hrs of coding </small>
            </article>
            <article className="about__card">
              <VscSymbolProperty className="about__icon" />
              <h5>Problem Solver</h5>
              <small>Love to solve DSA problems</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                more than 20+ projects(including small and big projects)
              </small>
            </article>
          </div>
          <p>
            I am passionate about technology. Apps that are interesting and
            useful are what I'm passionate about. And I'm enthusiastic about
            learning and willing to work across multiple technologies and
            domains. Exploring cutting-edge technologies and using them to solve
            real-life problems sparked my interest.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
