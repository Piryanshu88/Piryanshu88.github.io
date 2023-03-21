import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
  Stack,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleClick = () => {
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  const handledrive = () => {
    onClose();
    window.open(
      "https://drive.google.com/file/d/1dASCAtmIDuPCoBVy5SE-8kPYD5X9MLBy/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <div className={styles.navbar_box}>
      <div className={styles.navbar_box_keys}>
        <Image src={logo} />
        <div className={styles.nav_items}>
          <a href="#home">
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
          </a>
          <a href="#about">
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
          </a>
          <a href="#skills">
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
          </a>
          <a href="#projects">
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
          </a>
          <a href="#contact">
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
          </a>
          <a
            href="./Piryanshu-Bisht-Resume.pdf"
            download
            target="_blank"
            onClick={handledrive}
          >
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
          </a>
        </div>
        {/* Navbar for mobile screens */}
        <div div className={styles.mobile_nav}>
          <Button
            ref={btnRef}
            onClick={onOpen}
            as={IconButton}
            colorScheme=""
            icon={<HamburgerIcon />}
            variant="outline"
          ></Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            {/* <DrawerOverlay /> */}
            <DrawerContent background={"var(--color-primary)"}>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack lineHeight={"2rem"} marginTop="50px" width={"100%"}>
                  <a href="#home" onClick={handleClick}>
                    <Text
                      fontSize={"xl"}
                      cursor="pointer"
                      _hover={{
                        color: "var(--color-light)",
                        borderBottom: "2px solid var(--color-light)",
                      }}
                    >
                      Home
                    </Text>
                  </a>
                  <a href="#about" onClick={handleClick}>
                    <Text
                      fontSize={"xl"}
                      cursor="pointer"
                      _hover={{
                        color: "var(--color-light)",
                        borderBottom: "2px solid  var(--color-light)",
                      }}
                    >
                      About
                    </Text>
                  </a>
                  <a href="#skills" onClick={handleClick}>
                    <Text
                      fontSize={"xl"}
                      cursor="pointer"
                      _hover={{
                        color: "var(--color-light)",
                        borderBottom: "2px solid  var(--color-light)",
                      }}
                    >
                      Skills
                    </Text>
                  </a>
                  <a href="#projects" onClick={handleClick}>
                    <Text
                      fontSize={"xl"}
                      cursor="pointer"
                      _hover={{
                        color: "var(--color-light)",
                        borderBottom: "2px solid  var(--color-light)",
                      }}
                    >
                      Projects
                    </Text>
                  </a>
                  <a href="#contact" onClick={handleClick}>
                    <Text
                      fontSize={"xl"}
                      cursor="pointer"
                      _hover={{
                        color: "var(--color-light)",
                        borderBottom: "2px solid  var(--color-light)",
                      }}
                    >
                      Contact
                    </Text>
                  </a>
                  <a
                    target="_blank"
                    onClick={handledrive}
                    download
                    href="./Piryanshu-Bisht-Resume.pdf"
                  >
                    <Text
                      fontSize={"xl"}
                      cursor="pointer"
                      _hover={{
                        color: "var(--color-light)",
                        borderBottom: "2px solid  var(--color-light)",
                      }}
                    >
                      Resume
                    </Text>
                  </a>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
