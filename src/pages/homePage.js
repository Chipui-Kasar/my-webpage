import React from "react";
import styles from "../styles.module.css";
import { FaFacebook, FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const handleUrl = url => {
  return () => window.open(url, "_blank");
};
function HomePage() {
  return (
    <div className={styles.home}>
      <div className={styles.homeHeader}>
        <h1 className={styles.headerText}>
          Hello, I'm
          <span> Chipui Kasar </span>
        </h1>
        <p>
          Front-End/Ui Development (web based)
          <br />
          Code once, run million of times
          <br />
          Stay Hungry! Stay Foolish
        </p>

        <div className={styles.homeIcons}>
          <Link to="/" className={styles.iconHead}>
            <FaFacebook
              color={"#037fff"}
              className={styles.iconStyle}
              onClick={handleUrl("https://www.facebook.com/chipui.kasar.3")}
            />
            <FaGithub
              color={"gray"}
              className={styles.iconStyle}
              onClick={handleUrl("https://github.com/Chipui-Kasar")}
            />
            <FaYoutube
              color={"rgb(197, 11, 10)"}
              className={styles.iconStyle}
              onClick={handleUrl("https://www.youtube.com/c/chipuikasar")}
            />
            <FaWhatsapp
              color={"green"}
              className={styles.iconStyle}
              onClick={handleUrl("https://wa.me/+918264163783")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
