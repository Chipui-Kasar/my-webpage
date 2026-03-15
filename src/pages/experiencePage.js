import React from "react";
import TitleComp from "../components/aboutTitleComp";
import styles from "../styles.module.css";
import ExperienceComponent from "../components/ExperienceComponent";
import Seo from "../components/Seo";

const title = "Work Experience of Chipui Kasar";
const description =
  "Review the professional experience of Chipui Kasar across internships and full-time SharePoint and front-end development roles.";

function Experience() {
  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/experience"
        image="/MTHome.JPG"
      />
      <div className={styles.contactTitle}>
        <TitleComp title={"Experience"} span={"Ena Vemā Seksa̲ba̲"} />
        <div className={styles.experienceContainer}>
          <ExperienceComponent />
        </div>
        {/* <RowManager /> */}
      </div>
    </>
  );
}

export default Experience;
