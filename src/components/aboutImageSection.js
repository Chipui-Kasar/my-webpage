import React from "react";
import styles from "../styles.module.css";
import about from "../img/about.png";
import { FaDownload } from "react-icons/fa";
import resume from "../img/Resume.png";

function ImageSection() {
  var thisYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.imageSection}>
        <div className={styles.img}>
          <img className={styles.imageSectionImage} src={about} alt="" />
        </div>
        <div className={styles.aboutInfo}>
          <h1>
            I'm
            <span> Chipui Kasar </span>
          </h1>
          <p className={styles.aboutInfoText}>
            Greetings, I hail from the picturesque North-Eastern region of
            India, and I specialize in ReactJS development. I have an insatiable
            appetite for innovation and thrive on collaborating on pioneering
            projects that push the boundaries of technology. I find great joy in
            being a part of a team of exceptional individuals who share a common
            passion for utilizing technology for the greater good.
            <br />
            Despite my seemingly outgoing demeanor, I have a tendency to
            inadvertently hurt people. As such, I would advise against getting
            too close, as you may end up being the unfortunate recipient of my
            unintentional actions.
          </p>
          <div className={styles.aboutDetails}>
            <div className={styles.aboutDetailsLeft}>
              <p>Full Name</p>
              <p>Age</p>
              <p>Nationality</p>
              <p>Languages</p>
              <p>Address</p>
              <p>Speciality</p>
            </div>
            <div className={styles.aboutDetailsRight}>
              <p>: Chipui Kasar</p>
              <p>: {thisYear - 1998}</p>
              <p>: Indian</p>
              <p>: English, Hindi, Manipuri, Tangkhul</p>
              <p>: Hno. 22, Khangkhui Khunou, Ukhrul</p>
              <p>: Front-End Development</p>
            </div>
          </div>
          <button className={styles.dwnCV}>
            <FaDownload />{" "}
            <a href={resume} download>
              Download CV
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageSection;
