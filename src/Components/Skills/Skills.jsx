import "./Skills.css";
import React from "react";
import { ImHtmlFive2 } from "react-icons/im";
import { TbBrandJavascript } from "react-icons/tb";
import { DiCss3Full } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import { SiVisualstudiocode } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { DiFirebase } from "react-icons/di";
// import {SiRedux} from 'react-icons/si'
export const Skills = () => {
  return (
    <section id="Skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <ImHtmlFive2 className="experience__details-icon" />
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <DiCss3Full className="experience__details-icon" />
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <TbBrandJavascript className="experience__details-icon" />
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <FaReact className="experience__details-icon" />
                <h4>React </h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiRedux className="experience__details-icon" />
                <h4>Redux</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <SiChakraui className="experience__details-icon" />
                <h4>ChakraUI</h4>
              </div>
            </article>

            <article className="experience__details">
              <div>
                <BsBootstrap className="experience__details-icon" />
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiRedux className="experience__details-icon" />
                <h4>React-Redux</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development & Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <div>
                <FaNodeJs className="experience__details-icon" />
                <h4>Node Js</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiMongodb className="experience__details-icon" />
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiExpress className="experience__details-icon" />
                <h4>Express Js</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <VscGithubInverted className="experience__details-icon" />
                <h4>Git</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiVisualstudiocode className="experience__details-icon" />
                <h4>Vs code</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <SiNetlify className="experience__details-icon" />
                <h4>Netlify</h4>
              </div>
            </article>
            <article className="experience__details">
              <div>
                <DiFirebase
                  className="experience__details-icon"
                  fontSize={"26px"}
                />
                <h4>Firebase</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
