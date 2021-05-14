import React from "react";
import styles from "../styles.module.css";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.
        </p>

        <div className={styles.homeIcons}>
          <Link className={styles.iconHead}>
            <FaFacebook
              className={styles.iconStyle}
              onClick={handleUrl("https://www.facebook.com/chipui.kasar.3")}
            />
            <FaGithub
              className={styles.iconStyle}
              onClick={handleUrl("https://github.com/Chipui-Kasar")}
            />
            <FaYoutube
              className={styles.iconStyle}
              onClick={handleUrl("https://www.youtube.com/c/chipuikasar")}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
