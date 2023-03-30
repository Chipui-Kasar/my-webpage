import React from "react";
import TitleComp from "../components/aboutTitleComp";
import EducationSection from "../components/educationSection";
import EducationTrainingSec from "../components/educationTrainingSec";
import styles from "../styles.module.css";
import { FaDownload } from "react-icons/fa";
import resume from "../img/Resume.png";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCity,
  FaSchool,
  FaVoteYea,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
function educationPage() {
  return (
    <>
      <Helmet>
        <title>Education History - Chipui Kasar</title>
        <meta name="title" content="Education History - Chipui Kasar" />
        <meta
          name="description"
          content="Check out my education history: Savio School (10) | HRD Academy (12) | BScIT (VJES)"
        />

        <meta property="og:title" content="Education History - Chipui Kasar" />
        <meta
          property="og:description"
          content="Check out my education history: Savio School (10) | HRD Academy (12) | BScIT (VJES)"
        />
        <meta property="og:image" content="/images/education-history.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:url"
          content="https://chipuikasar.netlify.app/education"
        />

        <meta name="twitter:title" content="Education History - Chipui Kasar" />
        <meta
          name="twitter:description"
          content="Check out my education history: Savio School (10) | HRD Academy (12) | BScIT (VJES)"
        />
        <meta name="twitter:image" content="/images/education-history.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="canonical"
          href="https://chipuikasar.netlify.app/education"
        />
      </Helmet>

      <div className={styles.educationTitle}>
        <TitleComp title={"Education"} span={"History"} />
      </div>
      <div className={styles.educationContainer}>
        <EducationSection
          course={"BSc IT"}
          iconHead={<FaGraduationCap />}
          school={"Vidya Jyoti Eduversity"}
          iconPlace={<FaMapMarkerAlt color="red" />}
          place={"Punjab"}
          iconTick={<FaVoteYea color="green" />}
          year={"2016-2019"}
        />
        <EducationSection
          course={"10+2"}
          iconHead={<FaCity />}
          school={"HRD Academy"}
          iconPlace={<FaMapMarkerAlt color="red" />}
          place={"Imphal"}
          iconTick={<FaVoteYea color="green" />}
          year={"2014-2016"}
        />
        <EducationSection
          course={"10th"}
          iconHead={<FaSchool />}
          school={"Savio High School"}
          iconPlace={<FaMapMarkerAlt color="red" />}
          place={"Ukhrul"}
          iconTick={<FaVoteYea color="green" />}
          year={"2014"}
        />
      </div>
      <button className={styles.dwnCV}>
        <FaDownload />{" "}
        <a href={resume} download>
          Download CV for full Details
        </a>
      </button>

      <div className={styles.educationTitle}>
        <TitleComp title={"Trainings"} span={"いたずら"} />
      </div>
      <div className={styles.trainingContainer}>
        <EducationTrainingSec
          course={"UI Development"}
          iconHead={<FaGraduationCap />}
          school={"Besant Technologies (ReactJS)"}
          iconPlace={<FaMapMarkerAlt />}
          place={"Chennai (Online)"}
          iconTick={<FaVoteYea />}
          year={"(April - July) 2021"}
        />
        <EducationTrainingSec
          course={"UI Development"}
          iconHead={<FaGraduationCap />}
          school={"InfoCampus (Angular 8)"}
          iconPlace={<FaMapMarkerAlt />}
          place={"Marathahalli, Bengaluru"}
          iconTick={<FaVoteYea />}
          year={"(July - October) 2019"}
        />
        <EducationTrainingSec
          course={"Core Java"}
          iconHead={<FaGraduationCap />}
          school={"Asterik Solution"}
          iconPlace={<FaMapMarkerAlt />}
          place={"Thane, Mumbai"}
          iconTick={<FaVoteYea />}
          year={"(July - August) 2017"}
        />
        <EducationTrainingSec
          course={"CCOA"}
          iconHead={<FaGraduationCap />}
          school={"MICE"}
          iconPlace={<FaMapMarkerAlt />}
          place={"Konung Mamang, Imphal"}
          iconTick={<FaVoteYea />}
          year={"(June - August) 2014"}
        />
      </div>
    </>
  );
}

export default React.memo(educationPage);
