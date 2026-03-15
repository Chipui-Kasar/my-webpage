import React from "react";
import styles from "../styles.module.css";
import { FaFacebook, FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";
import Seo, { SITE_NAME, SITE_URL } from "../components/Seo";

const handleUrl = (url) => {
  return () => window.open(url, "_blank");
};

const title = "Chipui Kasar | Front-End and SharePoint Developer";
const description =
  "Personal portfolio of Chipui Kasar, a Front-End and SharePoint developer building React applications, modern UI experiences, and production-ready web solutions.";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/MTHome.JPG`,
      jobTitle: "Front-End and SharePoint Developer",
      sameAs: [
        "https://github.com/Chipui-Kasar",
        "https://www.facebook.com/chipui.kasar.3",
        "https://www.youtube.com/c/chipuikasar",
      ],
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],
};

function HomePage() {
  return (
    <>
      <Seo
        title={title}
        description={description}
        path="/"
        image="/MTHome.JPG"
        structuredData={structuredData}
      />
      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <h1 className={styles.headerText}>
            Hello, I'm{" "}
            <span>
              <ReactTyped
                strings={[" Chipui Kasar", " Za̲puma̲"]}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </span>
          </h1>
          <p>
            SharePoint Developer | Front-End Developer
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

export default React.memo(HomePage);
