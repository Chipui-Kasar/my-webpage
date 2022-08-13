import React from "react";
import styles from "../styles.module.css";

function ServiceComponent(props) {
  return (
    <div className={styles.service}>
      <div className={styles.serviceContent}>
        {props.img}
        <h5 className={styles.serviceTitle}>{props.title}</h5>
        <p
          className={styles.serviceText}
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></p>
        <a
          href="https://forms.gle/11q8oyCRGe9cvMr66"
          target="_blank"
          rel="noreferrer"
        >
          <button class="orderNow">{props.orderNow}</button>
        </a>
      </div>
    </div>
  );
}

export default ServiceComponent;
