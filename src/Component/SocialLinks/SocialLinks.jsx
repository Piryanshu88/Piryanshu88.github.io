import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";
import styles from "./Social.module.css";
import { Flex, Text } from "@chakra-ui/react";
export const SocialLinks = () => {
  return (
    <div className={styles.social_links_box}>
      <Flex
        alignItems={"center"}
        gap="10px"
        fontSize={"22px"}
        justifyContent="space-between"
        background={"var(--light-color)"}
        _hover={{ marginLeft: "100px" }}
      >
        <Text translateX="100px" marginLeft={"-90px"}>
          Github
        </Text>
        <FaGithub />
      </Flex>
      <Flex
        alignItems={"center"}
        gap="10px"
        fontSize={"22px"}
        justifyContent="space-between"
        background={"var(--light-color)"}
        _hover={{ marginRight: "100px" }}
      >
        <Text translateX="100px" marginLeft={"-90px"}>
          Linkedin
        </Text>
        <FaLinkedin />
      </Flex>
      <Flex
        alignItems={"center"}
        gap="10px"
        fontSize={"22px"}
        justifyContent="space-between"
        background={"var(--light-color)"}
        _hover={{ marginLeft: "100px" }}
      >
        <Text translateX="100px" marginLeft={"-90px"}>
          Resume
        </Text>
        <BsFillPersonLinesFill />
      </Flex>
    </div>
  );
};
