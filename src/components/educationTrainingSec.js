import React from "react";
import styles from "../styles.module.css";
function EducationTrainingSec(props) {
  return (
    <>
      <div className={styles.trainingBox}>
        <div className={styles.trainingLeft}>
          <h3>{props.course}</h3>
        </div>

        <div className={styles.trainingRight}>
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

export default EducationTrainingSec;
