import React from "react";
import styles from "../styles.module.css";
function ContactItem(props) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.contact}>
        {props.icon}
        <div className={styles.rightItems}>
          <h6>{props.title}</h6>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactItem;
