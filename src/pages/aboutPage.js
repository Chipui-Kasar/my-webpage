import React from "react";
import styles from "../styles.module.css";
import TitleComp from "../components/aboutTitleComp";
import ImageSection from "../components/aboutImageSection";
import AboutSkillsComp from "../components/aboutSkillsSection";
import ServiceSection from "../components/aboutServiceSection";
import { FaCode, FaCogs, FaLaptop } from "react-icons/fa";

function AboutPage() {
  return (
    <div className={styles.about}>
      <TitleComp title={"About Me"} span={"About Me"} />
      <ImageSection />

      <TitleComp title={"My Skills"} span={"My Skills"} />

      <div className={styles.skillsContainer}>
        <AboutSkillsComp skill={"HTML"} progress={"60%"} width={"60%"} />
        <AboutSkillsComp skill={"CSS"} progress={"50%"} width={"50%"} />
        <AboutSkillsComp skill={"BootStrap"} progress={"50%"} width={"50%"} />
        <AboutSkillsComp skill={"Javascript"} progress={"70%"} width={"70%"} />
        <AboutSkillsComp skill={"Angular 8"} progress={"40%"} width={"40%"} />
        <AboutSkillsComp skill={"ReactJs"} progress={"70%"} width={"70%"} />
        <AboutSkillsComp skill={"JQuery"} progress={"70%"} width={"70%"} />
        <AboutSkillsComp skill={"Ajax"} progress={"50%"} width={"50%"} />
        <AboutSkillsComp skill={"TypeScript"} progress={"50%"} width={"50%"} />
      </div>

      <TitleComp title={"Services"} span={"Services"} />
      <div className={styles.servicesContainer}>
        <ServiceSection
          img={<FaCode size="70px" />}
          title={"Web Development"}
          text={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of theprinting and typesetting industry."
          }
        />
        <ServiceSection
          img={<FaCogs size="70px" />}
          title={"Web Maintenance"}
          text={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of theprinting and typesetting industry."
          }
        />
        <ServiceSection
          img={<FaLaptop size="70px" />}
          title={"Digital Marketing"}
          text={
            " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of theprinting and typesetting industry."
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
