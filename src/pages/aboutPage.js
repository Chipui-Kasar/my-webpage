import React from "react";
import styles from "../styles.module.css";
import TitleComp from "../components/aboutTitleComp";
import ImageSection from "../components/aboutImageSection";
import AboutSkillsComp from "../components/aboutSkillsSection";
import ServiceSection from "../components/aboutServiceSection";
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
        <title>About Chipui Kasar, Chipui Kasar's Bio</title>
        <meta name="title" content="About Chipui Kasar, Chipui Kasar's Bio" />
        <meta
          name="description"
          content=" I'm from North-East India and I'm a ReactJs Developer, I love New things & I really enjoy working on cutting-edge projects and developing new technologies. I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I’m truly humbled by their support. I'm quite different from what you think."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chipuikasarpage.netlify.app/about"
        />

        <meta
          property="og:title"
          content="About Chipui Kasar, Chipui Kasar's Bio"
        />
        <meta
          property="og:description"
          content=" I'm from North-East India and I'm a ReactJs Developer, I love New things & I really enjoy working on cutting-edge projects and developing new technologies. I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I’m truly humbled by their support. I'm quite different from what you think."
        />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_banners/2483944999/1627642530/1500x500"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://chipuikasarpage.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="About Chipui Kasar, Chipui Kasar's Bio"
        />
        <meta
          property="twitter:description"
          content="I'm from North-East India and I'm a ReactJs Developer, I love New things & I really enjoy working on cutting-edge projects and developing new technologies. I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I’m truly humbled by their support. I'm quite different from what you think."
        />
        <meta
          property="twitter:image"
          content="https://pbs.twimg.com/profile_banners/2483944999/1627642530/1500x500"
        />
        <link
          rel="canonical"
          href="https://chipuikasarpage.netlify.app/about"
        ></link>
      </MetaTags>
      <div className={styles.about}>
        <TitleComp title={"About Me"} span={"About Me"} />
        <ImageSection />
        <TitleComp title={"My Skills"} span={"My Skills"} />
        <div className={styles.skillsContainer}>
          <AboutSkillsComp skill={"HTML"} progress={"60%"} />
          <AboutSkillsComp skill={"CSS"} progress={"50%"} />
          <AboutSkillsComp skill={"BootStrap"} progress={"60%"} />
          <AboutSkillsComp skill={"Sharepoint(SPFx)"} progress={"40%"} />
          <AboutSkillsComp skill={"Javascript"} progress={"65%"} />
          <AboutSkillsComp skill={"ReactJs"} progress={"60%"} />
        </div>

        <TitleComp title={"My Hobbies"} span={"Hobbies"} />
        <div className={styles.servicesContainer}>
          <ServiceSection
            img={<FaCode size="70px" color="rgb(34,139,34)" />}
            title={"Programming"}
            text={
              "Programming isn't about what you know; it's about what you can figure out. - Chris Pine"
            }
          />
          <ServiceSection
            img={<FaMobileAlt size="70px" color="rgb(255,255,255)" />}
            title={"Mobile Games"}
            text={
              "Mobile games are important because it creates a within you a competitive mind"
            }
          />
          <ServiceSection
            img={<FaMusic size="70px" color="rgb(0,255,0)" />}
            title={"Listening Music"}
            text={"Music is the art which is most nigh to tears and memory."}
          />
          <ServiceSection
            img={<FaShopify size="70px" color="rgb(0, 208, 255)" />}
            title={"Online Shopping"}
            text={
              "If shopping doesn't make you happy, then you're in the wrong shop."
            }
          />
          <ServiceSection
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
