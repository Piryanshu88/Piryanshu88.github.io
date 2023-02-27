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
        Skills
      </Text>
      {/* frontend skills  */}
      <Text textAlign={"center"} marginTop="20px" fontSize={"2xl"}>
        Frontend
      </Text>
      <div className={styles.skills_box1}>
        <div>
          <Image src={html} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            HTML
          </Text>
        </div>
        <div>
          <Image src={css} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            CSS
          </Text>
        </div>
        <div>
          <Image src={js} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            JS
          </Text>
        </div>
        <div>
          <Image src={react} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            React
          </Text>
        </div>
        <div>
          <Image src={redux} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Redux
          </Text>
        </div>
        <div>
          <Image src={typescript} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            TypeScript
          </Text>
        </div>
        <div>
          <Image src={chakra} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            ChakraUI
          </Text>
        </div>
        <div>
          <Image src={tailwind} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Tailwind CSS
          </Text>
        </div>
      </div>
      {/* backend skills  */}
      <Text textAlign={"center"} marginTop="40px" fontSize={"2xl"}>
        Backend
      </Text>
      <div className={styles.skills_box1}>
        <div>
          <Image src={express} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Express
          </Text>
        </div>
        <div>
          <Image src={node} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Node js
          </Text>
        </div>
        <div>
          <Image src={mongodb} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Mongodb
          </Text>
        </div>
      </div>

      {/* others */}
      <Text textAlign={"center"} marginTop="40px" fontSize={"2xl"}>
        Others
      </Text>
      <div className={styles.skills_box1}>
        <div>
          <Image src={vs} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Vs Code
          </Text>
        </div>
        <div>
          <Image src={git} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            GitHub
          </Text>
        </div>
        <div>
          <Image src={postman} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Postman
          </Text>
        </div>
        <div>
          <Image src={npm} />
          <Text fontSize={"l"} fontWeight="500" marginTop={"10px"}>
            Npm
          </Text>
        </div>
      </div>
    </div>
  );
};
