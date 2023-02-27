import styles from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import travilla from "../../assets/travilla.png";
import chakra from "../../assets/chakra.png";
import express from "../../assets/express.png";
import mongodb from "../../assets/mongodb.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import js from "../../assets/javascript.png";
export const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div className={styles.projects_box}>
      <Text
        fontSize={"3xl"}
        fontWeight="500"
        textDecoration={"underline"}
        data-aos="fade-up"
      >
        #PROJECTS
      </Text>
      <div className={styles.projects_box1}>
        <div className={styles.projects}>
          <div>
            <Text
              fontSize={"2xl"}
              fontWeight="500"
              color={"var(--color-primary)"}
              marginBottom="17px"
            >
              Tripvillas Clone
            </Text>
            <Text fontSize={"xl"} color=" var(--color-light)">
              Tripvillas is a homestay, villas, and Apartments' booking website.
              It allows user to book properties according to their choice and
              also they can list their properties.
            </Text>
            <Flex
              height={"40px"}
              gap="10px"
              marginTop={"14px"}
              marginBottom={"14px"}
            >
              <Image src={html} alt="html" />
              <Image src={css} alt="css" />
              <Image src={react} alt="react" />
              <Image src={redux} alt="redux" />
              <Image src={chakra} alt="chakra-ui" />
              <Image src={js} alt="js" />
            </Flex>
            <Flex gap={"20px"}>
              <Button
                background={"var(--color-primary)"}
                colorScheme={"twitter"}
              >
                Github
              </Button>
              <Button colorScheme={"twitter"}>Live</Button>
            </Flex>
          </div>
          <div>
            <Image src={travilla} />
          </div>
        </div>
      </div>
    </div>
  );
};
