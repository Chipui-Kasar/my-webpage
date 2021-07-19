import React from "react";
import TitleComp from "../components/aboutTitleComp";
import PortfolioComponent from "../components/PortfolioComponent";
import styles from "../styles.module.css";

function PortfolioPage() {
  return (
    <>
      <div className={styles.contactTitle}>
        <TitleComp title={"Portfolio"} span={"Portfolio"} />
        <PortfolioComponent />
      </div>
    </>
  );
}

export default PortfolioPage;
