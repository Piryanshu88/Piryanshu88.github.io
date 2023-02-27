import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import loading from "../../assets/5GOT.gif";
import AOS from "aos";
// C:\Users\Piryanshu\Desktop\Portfolio\ManojAttri-Portfolio\src\assets\
import "aos/dist/aos.css";
export const Loading = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Box width={"100%"} background="blackAlpha.900" height={"100vh"}>
      <Image
        src={loading}
        objectFit="cover"
        data-aos="zoom-in-up"
        width={"100%"}
        height="100vh"
        //   position="relative"
      />
    </Box>
  );
};
