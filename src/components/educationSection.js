import React from "react";
import styles from "../styles.module.css";

function EducationSection(props) {
  return (
    <>
      <div className={styles.educationBox}>
        <div className={styles.educationLeft}>
          <h3>{props.course}</h3>
        </div>
        <div className={styles.educationRight}>
          <p>
            {props.iconHead} {props.school}
          </p>
          <p>
            {props.iconPlace} {props.place}
          </p>
          <p>
            {props.iconTick} {props.year}
          </p>
        </div>
      </div>
    </>
  );
}

export default EducationSection;
