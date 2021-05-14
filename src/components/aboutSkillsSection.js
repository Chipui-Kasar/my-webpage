import React from "react";
import styles from "../styles.module.css";

function AboutSkillsComp(props) {
  return (
    <div className={styles.skillsSection}>
      <div className={styles.skillsSectionContainer}>
        <h5 className={styles.skillTitle}>{props.skill}</h5>
        <div className={styles.skillBar}>
          <p className={styles.skillText}>{props.progress}</p>
          <div className={styles.skillProgress}>
            <div className={styles.progress}>
              <div
                className={styles.innerProgress}
                style={{ width: props.width }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSkillsComp;
