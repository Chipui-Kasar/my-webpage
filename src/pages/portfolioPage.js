import React from "react";
import TitleComp from "../components/aboutTitleComp";
import PortfolioComponent from "../components/PortfolioComponent";
import styles from "../styles.module.css";
import { MetaTags } from "react-meta-tags";
function PortfolioPage() {
  return (
    <>
      <MetaTags>
        <title>Projects of my Front End Development</title>
        <meta name="title" content="Chipui Kasar's Project List" />
        <meta
          name="description"
          content="Complete Projects of my Front End Development"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chipuikasarpage.netlify.app/portfolio"
        />
        <meta
          property="og:title"
          content="Projects that I Have Build. Mobile Legend, Job Portal, Portfolio or personal website, Khangkhui Khunou, "
        />
        <meta
          property="og:description"
          content="Complete Projects of my Front End Development"
        />
        <meta
          property="og:image"
          content={`https://chipuifirstproject.netlify.app/hero/wall.jpg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://chipuikasarpage.netlify.app/portfolio"
        />
        <meta
          property="twitter:title"
          content="About Chipui Kasar, Chipui Kasar's Bio"
        />
        <meta
          property="twitter:description"
          content="Here are some of the Projects that I Have created. Mobile Legend, Job Portal, Portfolio or personal website, Khangkhui Khunou, "
        />
        <meta
          property="twitter:image"
          content="https://chipuikasarpage.netlify.app/static/media/about.29ccae07.png"
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
