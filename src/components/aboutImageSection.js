import React from "react";
import styles from "../styles.module.css";
import about from "../img/about.png";
import { FaDownload } from "react-icons/fa";
import resume from "../img/Resume.png";

function ImageSection() {
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
            I'm from North-East India and I'm a ReactJs Developer, I love New
            things & I really enjoy working on cutting-edge projects and
            developing new technologies. I also enjoy being surrounded by
            brilliant people that share the vision of “technology for good” and
            I’m truly humbled by their support. I'm quite different from what
            you think.
            <br />I hurt people, so don't get too close. You'll end up getting
            hurt Yourself.
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
