import React from "react";
import styles from "../styles.module.css";

function ServiceSection(props) {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.service}>
        <div className={styles.serviceContent}>
          {props.img}
          <h5 className={styles.serviceTitle}>{props.title}</h5>
          <p className={styles.serviceText}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
