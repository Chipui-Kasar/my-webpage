import React from "react";
import TitleComp from "../components/aboutTitleComp";
import PortfolioComponent from "../components/PortfolioComponent";
import styles from "../styles.module.css";
import portfolioImage from "../img/youthdiaries.png";
import Seo from "../components/Seo";

const title = "Portfolio Projects by Chipui Kasar";
const description =
  "Browse selected front-end and web development projects built by Chipui Kasar, including portfolio, product, and application work.";

function PortfolioPage() {
  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/portfolio"
        image={portfolioImage}
      />
      <div className={styles.contactTitle}>
        <TitleComp title={"Portfolio"} span={"Portfolio"} />
        <PortfolioComponent />
      </div>
    </>
  );
}

export default React.memo(PortfolioPage);
