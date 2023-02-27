import { Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import styles from "./About.module.css";
import work from "../../assets/working.gif";
import AOS from "aos";
import "aos/dist/aos.css";
export const Aboute = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div className={styles.about_box} id="about">
      <Text
        fontSize={"3xl"}
        fontWeight="500"
        textDecoration={"underline"}
        data-aos="fade-up"
      >
        #ABOUT ME
      </Text>
      <div className={styles.about_box1}>
        <div className={styles.about_box_img} data-aos="fade-up">
          <Image src={work} borderRadius="10px" />
        </div>
        <div className={styles.about_box_details}>
          <Text
            fontSize={"2xl"}
            marginTop="15px"
            color={"var(--color-light)"}
            data-aos="fade-down"
          >
            I am Result-oriented full-stack web developer, passionate about
            developing user-friendly web applications using MERN Stack.
          </Text>
          <Text
            fontSize={"2xl"}
            marginTop="15px"
            color={"var(--color-light)"}
            data-aos="fade-left"
          >
            I enjoy developing websites and a keen interest in solving problems
            and coming up with effective solutions.
          </Text>
          <Text
            fontSize={"2xl"}
            marginTop="15px"
            color={"var(--color-light)"}
            data-aos="fade-up"
          >
            Eager to be a part of a team which gives me ability to learn and
            grow.
          </Text>
        </div>
      </div>
    </div>
  );
};
