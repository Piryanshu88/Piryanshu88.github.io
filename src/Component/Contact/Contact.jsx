import styles from "./Contact.module.css";

import React from "react";
import {
  Button,
  Flex,
  FormControl,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { useRef } from "react";
import emailjs from "emailjs-com";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_yjljs0o",
      "template_nkczno9",
      form.current,
      "PI6eAkKz5d7QISfJB"
    );
    e.target.reset();
  };
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);

  return (
    <div className={styles.contact_box} id="contact">
      <Text
        fontSize={"3xl"}
        fontWeight="500"
        textDecoration={"underline"}
        data-aos="fade-up"
      >
        #CONTACT ME
      </Text>
      <div className={styles.contact_box1}>
        <div className={styles.contact_box_details}>
          <Flex
            alignItems={"center"}
            className={styles.contact_box_details_items}
            boxShadow=" 0 9px 10px -3px  green"
            borderRadius="10px"
            data-aos="fade-right"
          >
            <BsFillTelephoneFill fontSize={"30px"} color="green" />
            <Stack>
              <Text>Phone: </Text>
              <Text color={"var(--color-light)"}>+91 8595867440</Text>
            </Stack>
          </Flex>
          <Flex
            data-aos="fade-right"
            borderRadius="10px"
            alignItems={"center"}
            className={styles.contact_box_details_items}
            boxShadow="0 9px 10px -3px orange"
          >
            <MdEmail fontSize={"30px"} color="orange" />
            <Stack>
              <Text>Gmail: </Text>
              <Text color={"var(--color-light)"}>deepubisht2004@gmail.com</Text>
            </Stack>
          </Flex>
          <Flex
            data-aos="fade-right"
            alignItems={"center"}
            boxShadow=" 0 9px 10px -3px  red"
            borderRadius="10px"
            className={styles.contact_box_details_items}
          >
            <IoLocationSharp fontSize={"30px"} color="red" />
            <Stack>
              <Text>Location: </Text>
              <Text color={"var(--color-light)"}>Najafgarh, New Delhi</Text>
            </Stack>
          </Flex>
        </div>
        <div className={styles.contact_box_form}>
          <FormControl ref={form} onSubmit={sendEmail} isRequired>
            <Input
              data-aos="fade-left"
              type="text"
              placeholder="Your Name"
              marginBottom={"25px"}
              required
            />
            <Input
              data-aos="fade-left"
              type="email"
              required
              placeholder="Your Email"
              marginBottom={"25px"}
            />
            <Textarea
              required
              data-aos="fade-left"
              rows={"5"}
              type="text"
              placeholder="Your Message"
              marginBottom={"25px"}
            />
            <Button
              colorScheme={"telegram"}
              background="var(--color-primary)"
              type="submit"
            >
              Send a message
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
