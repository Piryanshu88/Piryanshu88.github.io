import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div>
      <Flex
        height="60px"
        border={"2px solid yellow"}
        alignItems="center"
        paddingLeft={"20px"}
        paddingRight={"20px"}
        justifyContent="space-between"
      >
        <Text fontSize={"xl"}>Piryanshu</Text>
        <div className={styles.nav_items}>
          <Text
            fontSize={"xl"}
            cursor="pointer"
            _hover={{
              color: "var(--color-primary)",
              borderBottom: "2px solid var(--color-primary)",
            }}
          >
            Home
          </Text>
          <Text
            fontSize={"xl"}
            cursor="pointer"
            _hover={{
              color: "var(--color-primary)",
              borderBottom: "2px solid var(--color-primary)",
            }}
          >
            About
          </Text>
          <Text
            fontSize={"xl"}
            cursor="pointer"
            _hover={{
              color: "var(--color-primary)",
              borderBottom: "2px solid var(--color-primary)",
            }}
          >
            Skills
          </Text>
          <Text
            fontSize={"xl"}
            cursor="pointer"
            _hover={{
              color: "var(--color-primary)",
              borderBottom: "2px solid var(--color-primary)",
            }}
          >
            Projects
          </Text>
          <Text
            fontSize={"xl"}
            cursor="pointer"
            _hover={{
              color: "var(--color-primary)",
              borderBottom: "2px solid var(--color-primary)",
            }}
          >
            Contact
          </Text>
          <Text
            fontSize={"xl"}
            cursor="pointer"
            _hover={{
              color: "var(--color-primary)",
              borderBottom: "2px solid var(--color-primary)",
            }}
          >
            Resume
          </Text>
        </div>
      </Flex>
    </div>
  );
};
