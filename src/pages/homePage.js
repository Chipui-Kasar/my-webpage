import React from "react";
import styles from "../styles.module.css";
import { FaFacebook, FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typed from "react-typed";

const handleUrl = url => {
  return () => window.open(url, "_blank");
};
function HomePage() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <h1 className={styles.headerText}>
            Hello, I'm{" "}
            <span>
              <Typed
                strings={[" Chipui Kasar", " Filler Kasar"]}
                typeSpeed={60}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p>
            Front-End/Ui Developer (web based)
            <br />
            より多くのコーディング、より多くのデプロイ
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
    </>
  );
}

export default HomePage;
