import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../assets/pirya.png";
import styles from "./Home.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
//C:\Users\Piryanshu\Desktop\MY_Portfolio\my-portfolio\src\assets
//C:\Users\Piryanshu\Desktop\MY_Portfolio\my-portfolio\src\assets\pirya.png
export const Home = () => {
  useEffect(() => {
    AOS.init({ delay: 100 });
  }, []);
  return (
    <Box>
      <div className={styles.home_box} id="home">
        <div className={styles.home_box_details} data-aos="fade-right">
          <Text fontSize={"3xl"} fontWeight={"500"}>
            I'm
          </Text>
          <Text
            fontSize={"4xl"}
            color="var(--color-primary)"
            fontWeight={"500"}
          >
            Piryanshu Bisht
          </Text>
          <Text fontSize={"3xl"} fontWeight={"500"}>
            Full Stack Web Developer
          </Text>
          <Text fontSize={"xl"} color="var(--color-light)" marginTop={"10px"}>
            A Full Stack Developer who loves building projects.I am equipped
            with a variety of technologies and tools to help me build the best
            possible product.
          </Text>
          <Flex alignItems={"center"} marginTop="15px" gap={"20px"}>
            <Flex _hover={{ color: "var(--color-primary)" }}>
              <a
                href="https://www.linkedin.com/in/piryanshu-bisht-ba1a22231/"
                target="_blank"
              >
                <AiFillLinkedin fontSize={"45px"} cursor="pointer" />
              </a>
            </Flex>
            <Flex _hover={{ color: "var(--color-primary)" }}>
              <a href="https://github.com/Piryanshu88" target="_blank">
                <AiFillGithub fontSize={"45px"} cursor="pointer" />
              </a>
            </Flex>
            <a
              href="https://drive.google.com/file/d/1dASCAtmIDuPCoBVy5SE-8kPYD5X9MLBy/view?usp=sharing"
              target="_blank"
            >
              <Button colorScheme={"blue"} background="var(--color-primary)">
                See my Resume
              </Button>
            </a>
          </Flex>
        </div>
        <div className={styles.home_box_img} data-aos="fade-left">
          <Image
            src={img}
            width={"80%"}
            borderRadius="40px"
            padding="15px"
            margin={"auto"}
          />
        </div>
      </div>
    </Box>
  );
};