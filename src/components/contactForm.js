import React from "react";
import styles from "../styles.module.css";
import emailjs from "emailjs-com";

function ContactForm(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "myGmail",
        "template_dm43ind",
        e.target,
        "user_Mc5QI37PU2F55mUGiqmuO"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div className={styles.contactF}>
        {props.messageIcon}
        <div>
          <h1> {props.messageTitle} </h1>
        </div>
      </div>
      <div className={styles.contactForm}>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter Name" required />
          </div>

          <div className={styles.formGroup}>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          <divz className={styles.formGroup}>
            <label>Phone</label>
            <input
              type="number"
              name="number"
              placeholder="Enter Number"
              required
            />
          </divz>

          <div className={styles.formGroup}>
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter Subject"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Message</label>
            <textarea
              rows="3"
              type="text"
              name="message"
              placeholder="Enter Message"
              required
            ></textarea>
          </div>

          <button type="submit" value="send">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
