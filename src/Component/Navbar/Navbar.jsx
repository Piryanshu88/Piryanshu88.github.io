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
  return (
    <div className={styles.navbar_box}>
      <Flex
        height="60px"
        alignItems="center"
        paddingLeft={"20px"}
        paddingRight={"20px"}
        justifyContent="space-between"
      >
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
        {/* Navbar for mobile screens */}
        <div div className={styles.mobile_nav}>
          <Button
            ref={btnRef}
            onClick={onOpen}
            as={IconButton}
            colorScheme=""
            icon={<HamburgerIcon />}
            variant="outline"
          >
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <VStack lineHeight={"2rem"} marginTop="50px">
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
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </Flex>
    </div>
  );
};
