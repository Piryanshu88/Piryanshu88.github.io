import styles from "./Skills.module.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Image, Text } from "@chakra-ui/react";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";
import tailwind from "../../assets/tailwind.png";
import js from "../../assets/javascript.png";
import chakra from "../../assets/chakra.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import node from "../../assets/node.png";
import vs from "../../assets/vscode.png";
import git from "../../assets/github.png";
import npm from "../../assets/npm.png";
import postman from "../../assets/postman.png";
export const Skills = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div className={styles.skills_box} id="skills">
      <Text
        fontSize={"3xl"}
        fontWeight="500"
        textDecoration={"underline"}
        data-aos="fade-up"
      >
        #SKILLS
      </Text>
      {/* frontend skills  */}
      <Text
        textAlign={"center"}
        marginTop="20px"
        fontSize={"2xl"}
        data-aos="fade-right"
      >
        Frontend
      </Text>
      <div className={styles.skills_box1}>
        <div data-aos="fade-up">
          <Image src={html} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            HTML
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={css} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            CSS
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={js} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            JS
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={react} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            React
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={redux} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Redux
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={typescript} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            TypeScript
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={chakra} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            ChakraUI
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={tailwind} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Tailwind CSS
          </Text>
        </div>
      </div>
      {/* backend skills  */}
      <Text
        textAlign={"center"}
        marginTop="40px"
        fontSize={"2xl"}
        data-aos="fade-right"
      >
        Backend
      </Text>
      <div className={styles.skills_box1}>
        <div data-aos="fade-up">
          <Image src={express} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Express
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={node} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Node js
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={mongodb} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Mongodb
          </Text>
        </div>
      </div>

      {/* others */}
      <Text
        textAlign={"center"}
        marginTop="40px"
        fontSize={"2xl"}
        data-aos="fade-right"
      >
        Others
      </Text>
      <div className={styles.skills_box1}>
        <div data-aos="fade-up">
          <Image src={vs} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Vs Code
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={git} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            GitHub
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={postman} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Postman
          </Text>
        </div>
        <div data-aos="fade-up">
          <Image src={npm} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Npm
          </Text>
        </div>
      </div>
    </div>
  );
};
