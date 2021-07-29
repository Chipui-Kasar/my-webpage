import React from "react";
import TitleComp from "../components/aboutTitleComp";
import PortfolioComponent from "../components/PortfolioComponent";
import styles from "../styles.module.css";
import MetaTags from "react-meta-tags";
function PortfolioPage() {
  return (
    <>
      <MetaTags>
        <title>Projects of my Front End Development</title>
        <meta name="title" content="Chipui Kasar's Project List" />
        <meta
          name="Description"
          content="Complete Projects of my Front End Development"
        />
        <meta
          property="og:title"
          content="Projects that I Have Build. Mobile Legend, Job Portal, Portfolio or personal website, Khangkhui Khunou, "
        />
        <meta
          property="og:image"
          content={`https://chipuifirstproject.netlify.app/hero/wall.jpg`}
        />
        <meta
          name="Keywords"
          content="Mobile Legends Image, Miya, Alucard, Johnson, Khangkhui Khunou, Portfolio, Savio High School"
        />
        <link
          rel="canonical"
          href="https://chipuikasarpage.netlify.app/portfolio"
        ></link>
      </MetaTags>
      <div className={styles.contactTitle}>
        <TitleComp title={"Portfolio"} span={"Portfolio"} />
        <PortfolioComponent />
      </div>
    </>
  );
}

export default PortfolioPage;
