import React from "react";
import TitleComp from "../components/aboutTitleComp";
import EducationSection from "../components/educationSection";
import EducationTrainingSec from "../components/educationTrainingSec";
import styles from "../styles.module.css";
import { FaDownload } from "react-icons/fa";
import resume from "../img/Resume.png";

function educationPage() {
  return (
    <>
      <div className={styles.educationTitle}>
        <TitleComp title={"Education"} span={"History"} />
      </div>
      <div className={styles.educationContainer}>
        <EducationSection
          year={"2016-2019"}
          school={"Vidya Jyoti Eduversity"}
          course={"BSc IT"}
        />
        <EducationSection
          year={"2014-2016"}
          school={"HRD Academy"}
          course={"10+2"}
        />
        <EducationSection
          year={"2014"}
          school={"Savio High School"}
          course={"10th"}
        />
        <button className={styles.dwnCV}>
          <FaDownload />{" "}
          <a href={resume} download>
            Download CV for full Details
          </a>
        </button>
      </div>
      <EducationTrainingSec />
    </>
  );
}

export default educationPage;
