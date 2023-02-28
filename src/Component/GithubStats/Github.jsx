import styles from "./Github.module.css";
import React, { useEffect } from "react";
import { Image, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactTooltip from "react-tooltip";
import GitHubCalendar from "react-github-calendar";
export const Github = () => {
  useEffect(() => {
    AOS.init({ delay: 50 });
  }, []);
  return (
    <div className={styles.github_stats_box}>
      <Text
        fontSize={"3xl"}
        fontWeight="500"
        textDecoration={"underline"}
        data-aos="fade-right"
      >
        #GITHUB STATS
      </Text>
      <div className={styles.github_stats_box1}>
        <div data-aos="fade-right">
          <Text
            fontSize={"2xl"}
            data-aos="fade-right"
            textAlign={"center"}
            marginBottom="20px"
          >
            GitHub Calendar
          </Text>
          <GitHubCalendar username="Piryanshu88" color={"#4db5ff"}>
            <ReactTooltip delayShow={20} html />{" "}
          </GitHubCalendar>
        </div>
        <div data-aos="fade-left">
          <Text
            fontSize={"2xl"}
            data-aos="fade-left"
            textAlign={"center"}
            marginBottom="20px"
          >
            GitHub Contributions
          </Text>
          <a href="https://github.com/Piryanshu88">
            <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Piryanshu88&hide_border=true&background=4db5ff&ring=000000&currStreakLabel=000000&stroke=1A1919&fire=2C2526" />
          </a>
        </div>

        <div data-aos="fade-left">
          <Text
            fontSize={"2xl"}
            data-aos="fade-right"
            textAlign={"center"}
            marginBottom="20px"
          >
            GitHub Commits
          </Text>
          <a href="https://github.com/Piryanshu88" style={{ flex: "1" }}>
            <Image
              data-aos="fade-left"
              src="https://awesome-github-stats.azurewebsites.net/user-stats/Piryanshu88?cardType=github&theme=vue-dark&Background=4DB5FF&Title=2C2C6C&Ring=2C2C6C&Text=000000&Border=4DB5FF" //stats
            />
          </a>
        </div>
      </div>
    </div>
  );
};
