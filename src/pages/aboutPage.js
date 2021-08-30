import React from "react";
import styles from "../styles.module.css";
import TitleComp from "../components/aboutTitleComp";
import ImageSection from "../components/aboutImageSection";
import AboutSkillsComp from "../components/aboutSkillsSection";
import ServiceSection from "../components/aboutServiceSection";
import { FaCode, FaCogs, FaLaptop } from "react-icons/fa";
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
        <meta
          name="image"
          content={`https://chipuikasarpage.netlify.app/static/media/about.29ccae07.png`}
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
          content={`https://chipuikasarpage.netlify.app/static/media/about.29ccae07.png`}
        />
        <meta
          property="og:url"
          content="https://chipuikasarpage.netlify.app/about"
        ></meta>
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
          <AboutSkillsComp skill={"HTML"} progress={"60%"} width={"60%"} />
          <AboutSkillsComp skill={"CSS"} progress={"50%"} width={"50%"} />
          <AboutSkillsComp skill={"BootStrap"} progress={"50%"} width={"50%"} />
          <AboutSkillsComp skill={"JQuery"} progress={"40%"} width={"40%"} />
          <AboutSkillsComp
            skill={"Javascript"}
            progress={"50%"}
            width={"50%"}
          />
          <AboutSkillsComp skill={"ReactJs"} progress={"50%"} width={"50%"} />
        </div>

        <TitleComp title={"Services"} span={"Services"} />
        <div className={styles.servicesContainer}>
          <ServiceSection
            img={<FaCode size="70px" color="#037fff" />}
            title={"Web Development"}
            text={
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of theprinting and typesetting industry."
            }
          />
          <ServiceSection
            img={<FaCogs size="70px" color="rgb(25, 94, 25)" />}
            title={"Web Maintenance"}
            text={
              " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of theprinting and typesetting industry."
            }
          />
          <ServiceSection
            img={<FaLaptop size="70px" color="rgb(0, 208, 255)" />}
            title={"Other Services"}
            text={
              "Get your certificates like Domicile, ST, Permanent Resident, Income, Etc at just Rs 20 per certificate. You don't have a Pan Card and you want to apply but they're charging you alot? No problem submit your Aadhar card no.(should link with your mobile no.) and get at just  Rs 100 "
            }
          />
        </div>
      </div>
    </>
  );
}

export default AboutPage;
