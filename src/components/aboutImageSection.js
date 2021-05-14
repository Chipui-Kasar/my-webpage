import React from "react";
import styles from "../styles.module.css";
import about from "../img/about.jpg";
import { FaDownload } from "react-icons/fa";

function ImageSection() {
  return (
    <>
      <div className={styles.imageSection}>
        <div className={styles.img}>
          <img className={styles.imageSectionImage} src={about} alt="" />
        </div>
        <div className={styles.aboutInfo}>
          <h4>
            I'm
            <span> Chipui Kasar </span>
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
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
              <p>: 23</p>
              <p>: Indian</p>
              <p>: English, Hindi, Manipuri, Tangkhul</p>
              <p>: Hno. 22, Khangkhui Khunou, Ukhrul</p>
              <p>: Front-End Devepment</p>
            </div>
          </div>
          <button className={styles.dwnCV}>
            <FaDownload /> Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageSection;
