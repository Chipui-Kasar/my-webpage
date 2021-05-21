import React from "react";
import TitleComp from "../components/aboutTitleComp";
import styles from "../styles.module.css";

function PortfolioPage() {
  return (
    <>
      <div className={styles.contactTitle}>
        <TitleComp title={"Portfolio"} span={"Portfolio"} />
      </div>
    </>
  );
}

export default PortfolioPage;
