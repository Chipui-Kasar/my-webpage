import React from "react";
import TitleComp from "../components/aboutTitleComp";
import PortfolioComponent from "../components/PortfolioComponent";
import styles from "../styles.module.css";
import { Helmet } from "react-helmet";
function PortfolioPage() {
  return (
    <>
      <Helmet>
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
          content="https://pbs.twimg.com/profile_images/856784074702069761/rXdhAD0v_400x400.jpg"
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
          content="https://pbs.twimg.com/profile_images/856784074702069761/rXdhAD0v_400x400.jpg"
        />
        <link
          rel="canonical"
          href="https://chipuikasarpage.netlify.app/portfolio"
        ></link>
      </Helmet>
      <div className={styles.contactTitle}>
        <TitleComp title={"Portfolio"} span={"Portfolio"} />
        <PortfolioComponent />
      </div>
    </>
  );
}

export default React.memo(PortfolioPage);
