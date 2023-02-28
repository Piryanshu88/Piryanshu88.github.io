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
import dell from "../../assets/dell.png";
import best from "../../assets/bestbuy.png";
import flp from "../../assets/flp.png";
export const Projects = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div className={styles.projects_box} id="projects">
      <Text
        fontSize={"3xl"}
        fontWeight="500"
        textDecoration={"underline"}
        data-aos="fade-up"
      >
        #PROJECTS
      </Text>
      <div className={styles.projects_box1}>
        {/* travila */}
        <div className={styles.projects} data-aos="fade-up">
          <div>
            <Text
              fontSize={"2xl"}
              fontWeight="500"
              color={"var(--color-primary)"}
              marginBottom="17px"
              data-aos="fade-right"
            >
              Tripvillas Clone
            </Text>
            <Text
              fontSize={"xl"}
              color=" var(--color-light)"
              data-aos="fade-right"
            >
              Tripvillas is a homestay, villas, and Apartments' booking website.
              It allows user to book properties according to their choice and
              also they can list their properties.
            </Text>
            <Flex
              data-aos="fade-right"
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
            <Flex gap={"20px"} data-aos="fade-right">
              <a
                href="https://github.com/Piryanshu88/travilla"
                target={"_blank"}
              >
                <Button
                  background={"var(--color-primary)"}
                  colorScheme={"twitter"}
                >
                  Github
                </Button>
              </a>
              <a href="https://travilla.netlify.app/" target={"_blank"}>
                <Button colorScheme={"twitter"}>Live</Button>
              </a>
            </Flex>
          </div>
          <div>
            <Image
              data-aos="fade-left"
              src={travilla}
              _hover={{ transform: "scale(1.05, 1.05)" }}
              transition="var(--transition)"
            />
          </div>
        </div>
        {/* dell */}
        <div className={styles.projects} data-aos="fade-up">
          <div>
            <Text
              fontSize={"2xl"}
              fontWeight="500"
              color={"var(--color-primary)"}
              marginBottom="17px"
              data-aos="fade-right"
            >
              Dell Technologies Clone
            </Text>
            <Text
              fontSize={"xl"}
              color=" var(--color-light)"
              data-aos="fade-right"
            >
              This Project is a clone of Dell Technologies. Dell's products
              include personal computers, servers, smartphones, televisions,
              computer software, computer security and network security, as well
              as information security services.
            </Text>
            <Flex
              height={"40px"}
              gap="10px"
              marginTop={"14px"}
              marginBottom={"14px"}
              data-aos="fade-right"
            >
              <Image src={html} alt="html" />
              <Image src={mongodb} alt="mongodb" />
              <Image src={react} alt="react" />
              <Image src={express} alt="express" />
              <Image src={chakra} alt="chakra-ui" />
              <Image src={js} alt="js" />
            </Flex>
            <Flex gap={"20px"} data-aos="fade-right">
              <a
                href="https://github.com/Piryanshu88/LaptopWala"
                target={"_blank"}
              >
                <Button
                  background={"var(--color-primary)"}
                  colorScheme={"twitter"}
                >
                  Github
                </Button>
              </a>
              <a href="https://laptopwala.netlify.app/" target={"_blank"}>
                <Button colorScheme={"twitter"}>Live</Button>
              </a>
            </Flex>
          </div>
          <div>
            <Image
              data-aos="fade-left"
              src={dell}
              _hover={{ transform: "scale(1.05, 1.05)" }}
              transition="var(--transition)"
            />
          </div>
        </div>
        {/* bestbuys */}
        <div className={styles.projects} data-aos="fade-up">
          <div>
            <Text
              fontSize={"2xl"}
              fontWeight="500"
              color={"var(--color-primary)"}
              marginBottom="17px"
              data-aos="fade-right"
            >
              BestBuys Clone
            </Text>
            <Text
              fontSize={"xl"}
              color=" var(--color-light)"
              data-aos="fade-right"
            >
              BestBuy.com is an e-commerce web application that widely provides
              Tech-Gadgets and Tech-accessories.
            </Text>
            <Flex
              height={"40px"}
              gap="10px"
              marginTop={"14px"}
              marginBottom={"14px"}
              data-aos="fade-right"
            >
              <Image src={html} alt="html" />
              <Image src={css} alt="css" />
              <Image src={js} alt="js" />
            </Flex>
            <Flex gap={"20px"} data-aos="fade-right">
              <a
                href="https://github.com/Piryanshu88/BestBuys_Clone"
                target={"_blank"}
              >
                <Button
                  background={"var(--color-primary)"}
                  colorScheme={"twitter"}
                >
                  Github
                </Button>
              </a>
              <a
                href="https://moonlit-druid-960309.netlify.app/"
                target={"_blank"}
              >
                <Button colorScheme={"twitter"}>Live</Button>
              </a>
            </Flex>
          </div>
          <div>
            <Image
              data-aos="fade-left"
              src={best}
              _hover={{ transform: "scale(1.05, 1.05)" }}
              transition="var(--transition)"
            />
          </div>
        </div>
        {/* flopkart */}
        <div className={styles.projects} data-aos="fade-up">
          <div>
            <Text
              fontSize={"2xl"}
              fontWeight="500"
              color={"var(--color-primary)"}
              marginBottom="17px"
              data-aos="fade-right"
            >
              Flipkart Clone
            </Text>
            <Text
              fontSize={"xl"}
              color=" var(--color-light)"
              data-aos="fade-right"
            >
              Flipkart is an e-commerce web application that widely provides
              books, movies, music, games, consoles, televisions, mobiles,
              digital cameras, computers, network components, software,
              peripherals, apparel, shoes, and kitchen appliances.
            </Text>
            <Flex
              height={"40px"}
              gap="10px"
              marginTop={"14px"}
              marginBottom={"14px"}
              data-aos="fade-right"
            >
              <Image src={html} alt="html" />
              <Image src={mongodb} alt="mongodb" />
              <Image src={react} alt="react" />
              <Image src={express} alt="express" />
              <Image src={chakra} alt="chakra-ui" />
              <Image src={js} alt="js" />
            </Flex>
            <Flex gap={"20px"} data-aos="fade-right">
              <a
                href="https://github.com/Piryanshu88/flopkart"
                target={"_blank"}
              >
                <Button
                  background={"var(--color-primary)"}
                  colorScheme={"twitter"}
                >
                  Github
                </Button>
              </a>
              <a
                href="https://flopkart-online-app.netlify.app/"
                target={"_blank"}
              >
                <Button colorScheme={"twitter"}>Live</Button>
              </a>
            </Flex>
          </div>
          <div>
            <Image
              data-aos="fade-left"
              src={flp}
              _hover={{ transform: "scale(1.05, 1.05)" }}
              transition="var(--transition)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
