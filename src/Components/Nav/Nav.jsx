import "./Nav.css";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlineProfile } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";
import logo from "../../assets/logo_pir.gif";
//C:\Users\Piryanshu\Desktop\MY_Portfolio\my-portfolio\src\assets\Light Blue Sci-Fi Futuristic Animated Logo.gif
export const Nav = () => {
  const [activenav, setactivenav] = useState("#");
  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setactivenav("#")}
          className={activenav === "#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setactivenav("#about")}
          className={activenav === "#about" ? "active" : ""}
        >
          <BiUser />
        </a>
        <a
          href="#Skills"
          onClick={() => setactivenav("#Skills")}
          className={activenav === "#Skills" ? "active" : ""}
        >
          <GiSkills />
        </a>
        <a
          href="#projects"
          onClick={() => setactivenav("#projects")}
          className={activenav === "#projects" ? "active" : ""}
        >
          <AiOutlineProfile />
        </a>
        <a
          href="#contact"
          onClick={() => setactivenav("#contact")}
          className={activenav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </nav>
    </>
  );
};
