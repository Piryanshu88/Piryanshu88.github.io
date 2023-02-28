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
} from "@chakra-ui/react";
import React from "react";
import styles from "./Navbar.module.css";
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleClick = () => {
    setTimeout(() => {
      onClose();
    }, 1000);
  };
  return (
    <div className={styles.navbar_box}>
      <div className={styles.navbar_box_keys}>
        <Text fontSize={"xl"}>Piryanshu</Text>
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
          <a href="./Piryanshu_Bisht_Resume.pdf" download={true}>
            <a
              href="https://drive.google.com/file/d/1dASCAtmIDuPCoBVy5SE-8kPYD5X9MLBy/view?usp=sharing"
              target="_blank"
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
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack lineHeight={"2rem"} marginTop="50px" width={"100%"}>
                  <a href="#home" onClick={handleClick}>
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
                  <a href="#about" onClick={handleClick}>
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
                  <a href="#skills" onClick={handleClick}>
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
                  <a href="#projects" onClick={handleClick}>
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
                  <a href="#contact" onClick={handleClick}>
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
                    href="https://drive.google.com/file/d/1dASCAtmIDuPCoBVy5SE-8kPYD5X9MLBy/view?usp=sharing"
                    target="_blank"
                    onClick={onClose}
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
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};
