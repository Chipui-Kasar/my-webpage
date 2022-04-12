import React from "react";
import TitleComp from "../components/aboutTitleComp";
import styles from "../styles.module.css";
import { Helmet } from "react-helmet";
import ExperienceComponent from "../components/ExperienceComponent";

function Experience() {
  return (
    <>
      <Helmet>
        <title>My Work Experiences</title>
        <meta name="title" content="Chipui Kasar's Experience" />
        <meta
          name="description"
          content="Worked as as Intern in SharePoint Designs for three Months, Started working as full time developer in SharePoint Developer"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chipuikasarpage.netlify.app/experience"
        />
        <meta property="og:title" content="My Experience" />
        <meta
          property="og:description"
          content="Worked as as Intern in SharePoint Designs for three Months, Started working as full time developer in SharePoint Developer"
        />
        <meta
          property="og:image"
          content="https://www.techgamingreport.com/wp-content/uploads/2021/08/how-to-become-a-web-developer.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://chipuikasarpage.netlify.app/experience"
        />
        <meta property="twitter:title" content="My Experiences" />
        <meta
          property="twitter:description"
          content="Worked as as Intern in SharePoint Designs for three Months, Started working as full time developer in SharePoint Developer"
        />
        <meta
          property="twitter:image"
          content="https://www.techgamingreport.com/wp-content/uploads/2021/08/how-to-become-a-web-developer.jpg"
        />
        <link
          rel="canonical"
          href="https://chipuikasarpage.netlify.app/experience"
        ></link>
      </Helmet>
      <div className={styles.contactTitle}>
        <TitleComp title={"Experience"} span={"Ena Vemā Seksa̲ba̲"} />
        <div className={styles.experienceContainer}>
          <ExperienceComponent />
        </div>
      </div>
    </>
  );
}

export default Experience;
