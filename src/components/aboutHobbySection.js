import React from "react";
import styles from "../styles.module.css";

function HobbySection(props) {
  return (
    <div className={styles.service}>
      <div className={styles.serviceContent}>
        {props.img}
        <h5 className={styles.serviceTitle}>{props.title}</h5>
        <p className={styles.serviceText}>{props.text}</p>
      </div>
    </div>
  );
}

export default HobbySection;
