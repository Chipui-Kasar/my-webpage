import React from "react";
import styles from "../styles.module.css";
import TitleComp from "../components/aboutTitleComp";
import ImageSection from "../components/aboutImageSection";
import AboutSkillsComp from "../components/aboutSkillsSection";
import HobbySection from "../components/aboutHobbySection";
import {
  FaCode,
  FaMobileAlt,
  FaShopify,
  FaGrinHearts,
  FaMusic,
} from "react-icons/fa";
import aboutImage from "../img/about.png";
import Seo from "../components/Seo";

const title = "About Chipui Kasar";
const description =
  "Learn about Chipui Kasar, his development background, technical skills, hobbies, and the experience behind his React and SharePoint work.";

function AboutPage() {
  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/about"
        image={aboutImage}
      />
      <div className={styles.about}>
        <TitleComp title={"About Me"} span={"About Me"} />
        <ImageSection />
        <TitleComp title={"My Skills"} span={"My Skills"} />
        <div className={styles.skillsContainer}>
          <AboutSkillsComp skill={"HTML"} progress={"80%"} />
          <AboutSkillsComp skill={"CSS"} progress={"60%"} />
          <AboutSkillsComp skill={"BootStrap"} progress={"65%"} />
          <AboutSkillsComp skill={"Sharepoint(SPFx)"} progress={"65%"} />
          <AboutSkillsComp skill={"Javascript"} progress={"70%"} />
          <AboutSkillsComp skill={"ReactJs"} progress={"70%"} />
        </div>

        <TitleComp title={"My Hobbies"} span={"Hobbies"} />
        <div className={styles.servicesContainer}>
          <HobbySection
            img={<FaCode size="70px" color="rgb(34,139,34)" />}
            title={"Programming"}
            text={
              "Programming isn't about what you know; it's about what you can figure out. - Chris Pine"
            }
          />
          <HobbySection
            img={<FaMobileAlt size="70px" color="rgb(255,255,255)" />}
            title={"Mobile Games"}
            text={
              "Mobile games are important because it creates a within you a competitive mind"
            }
          />
          <HobbySection
            img={<FaMusic size="70px" color="rgb(0,255,0)" />}
            title={"Listening Music"}
            text={"Music is the art which is most nigh to tears and memory."}
          />
          <HobbySection
            img={<FaShopify size="70px" color="rgb(0, 208, 255)" />}
            title={"Online Shopping"}
            text={
              "If shopping doesn't make you happy, then you're in the wrong shop."
            }
          />
          <HobbySection
            img={<FaGrinHearts size="70px" color="rgb(255,255,0)" />}
            title={"Flirting"}
            text={
              "It’s said that nothing lasts forever. Will you be my nothing?"
            }
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
