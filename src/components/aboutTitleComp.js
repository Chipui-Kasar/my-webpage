import React from "react";
import styles from "../styles.module.css";
function TitleComp(props) {
  return (
    <div className={styles.title}>
      <h3>
        {props.title}
        <span> {props.span} </span>
      </h3>
    </div>
  );
}

export default TitleComp;
