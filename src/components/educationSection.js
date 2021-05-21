import React from "react";
import styles from "../styles.module.css";

function EducationSection(props) {
  return (
    <>
      <div className={styles.educationBox}>
        <div className={styles.educationLeft}>
          <p>Year : </p>
          <p>School : </p>
          <p>Course : </p>
        </div>
        <div className={styles.educationRight}>
          <p>{props.year}</p>
          <p>{props.school}</p>
          <p>{props.course}</p>
        </div>
      </div>
    </>
  );
}

export default EducationSection;
