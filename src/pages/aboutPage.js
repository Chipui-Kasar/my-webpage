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
import { MetaTags } from "react-meta-tags";
function AboutPage() {
  return (
    <>
      <MetaTags>
        <title>
          About Chipui Kasar - ReactJs Developer from North-East India
        </title>
        <meta
          name="title"
          content="About Chipui Kasar - ReactJs Developer from North-East India"
        />
        <meta
          name="description"
          content="Learn more about Chipui Kasar, a talented ReactJs developer from North-East India who loves working on cutting-edge projects and developing new technologies. Discover his unique perspective and vision for technology for good."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chipuikasar.netlify.app/about"
        />
        <meta
          property="og:title"
          content="About Chipui Kasar - ReactJs Developer from North-East India"
        />
        <meta
          property="og:description"
          content="Learn more about Chipui Kasar, a talented ReactJs developer from North-East India who loves working on cutting-edge projects and developing new technologies. Discover his unique perspective and vision for technology for good."
        />
        <meta
          property="og:image"
          content="https://media.graphassets.com/ON2vDzY8Q5yZ1Y7C2Kkp"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://chipuikasar.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="About Chipui Kasar - ReactJs Developer from North-East India"
        />
        <meta
          property="twitter:description"
          content="Learn more about Chipui Kasar, a talented ReactJs developer from North-East India who loves working on cutting-edge projects and developing new technologies. Discover his unique perspective and vision for technology for good."
        />
        <meta
          property="twitter:image"
          content="https://media.graphassets.com/ON2vDzY8Q5yZ1Y7C2Kkp"
        />
        <link rel="canonical" href="https://chipuikasar.netlify.app/about" />
      </MetaTags>
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
