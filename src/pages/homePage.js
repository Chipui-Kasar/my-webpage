import React from "react";
import styles from "../styles.module.css";
import { FaFacebook, FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import { MetaTags } from "react-meta-tags";
import metatagpic from "../img/MetaTags/MTHome.JPG";

const handleUrl = url => {
  return () => window.open(url, "_blank");
};
function HomePage() {
  return (
    <>
      <MetaTags>
        <title> Chipui Kasar's Official site | My Personal Portfolio </title>
        <meta
          name="title"
          content=" Chipui Kasar's Official site | My Personal Portfolio "
        />
        <meta
          name="description"
          content="Check out my profile.. I'm from North-East India and I'm a ReactJs Developer, I love New things & I really enjoy working on cutting-edge projects and developing new technologies. I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I’m truly humbled by their support. I'm quite different from what you think."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chipuikasarpage.netlify.app/"
        />
        <meta
          property="og:title"
          content=" Chipui Kasar's Official site | My Personal Portfolio "
        />
        <meta
          property="og:description"
          content="Check out my profile.. I'm from North-East India and I'm a ReactJs Developer, I love New things & I really enjoy working on cutting-edge projects and developing new technologies. I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I’m truly humbled by their support. I'm quite different from what you think."
        />
        <meta property="og:image" content={metatagpic} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content=" Chipui Kasar's Official site | My Personal Portfolio "
        />
        <meta
          property="twitter:description"
          content="Check out my profile.. I'm from North-East India and I'm a ReactJs Developer, I love New things & I really enjoy working on cutting-edge projects and developing new technologies. I also enjoy being surrounded by brilliant people that share the vision of “technology for good” and I’m truly humbled by their support. I'm quite different from what you think."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <link
          rel="canonical"
          href="https://chipuikasarpage.netlify.app/"
        ></link>
      </MetaTags>
      <div className={styles.home}>
        <div className={styles.homeHeader}>
          <h1 className={styles.headerText}>
            Hello, I'm{" "}
            <span>
              <Typed
                strings={[" Chipui Kasar", " Filler Kasar"]}
                typeSpeed={70}
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
