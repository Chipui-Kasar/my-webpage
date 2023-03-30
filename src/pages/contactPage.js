import React from "react";
import {
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaWeixin,
} from "react-icons/fa";
import ContactItem from "../components/contactItem";
import styles from "../styles.module.css";
import TitleComp from "../components/aboutTitleComp";
import ContactForm from "../components/contactForm";
import { Helmet } from "react-helmet";
import ogImage from "../img/MetaTags/ContactMT.jpg";
function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Get in Touch with Front-End Developer Chipui Kasar</title>
        <meta name="title" content="Contact Chipui Kasar" />
        <meta
          name="description"
          content="If you have any questions or concerns related to front-end development, I'm here to help! Fill out the form to get in touch with me."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://chipuikasar.netlify.app/contact"
        />
        <meta
          property="og:title"
          content="Get in Touch with Front-End Developer Chipui Kasar"
        />
        <meta
          property="og:description"
          content="If you have any questions or concerns related to front-end development, I'm here to help! Fill out the form to get in touch with me."
        />
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://chipuikasar.netlify.app/contact"
        />
        <meta
          property="twitter:title"
          content="Get in Touch with Front-End Developer Chipui Kasar"
        />
        <meta
          property="twitter:description"
          content="If you have any questions or concerns related to front-end development, I'm here to help! Fill out the form to get in touch with me."
        />
        <meta property="twitter:image" content={ogImage} />
        <link
          rel="canonical"
          href="https://chipuikasar.netlify.app/contact"
        ></link>
      </Helmet>

      <div className={styles.contactTitle}>
        <TitleComp title={"Contact"} span={"Contact"} />
      </div>
      <div className={styles.contactPage}>
        <div className={styles.googleMap}>
          <iframe
            src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14456.010832976775!2d94.40780002427503!3d25.067897343301716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374858a895a9ff5f%3A0x73ec9280e243e411!2sKhangkhui%20Khunou%2C%20Manipur%20795142!5e0!3m2!1sen!2sin!4v1620997132264!5m2!1sen!2sin"
            title="gmap"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen="{true}"
            aria-hidden="false"
            loading="lazy"
            tabIndex="0"
          ></iframe>
        </div>
        <div className={styles.contactPageSection}>
          <ContactItem
            className={styles.iconStyles}
            icon={<FaPhone size="50px" color={"blue"} />}
            text={"+91 8264163783"}
            title={"Phone"}
          />
          <ContactItem
            icon={<FaMailBulk size="50px" color={"yellow"} />}
            text={"Chipuikasar@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={<FaSearchLocation size="50px" color={"green"} />}
            text={"Paradise, Heaven Highway"}
            title={"Address"}
          />
        </div>
      </div>
      <div className={styles.contactPFormSection}>
        <ContactForm
          messageTitle={"Get in Touch"}
          messageIcon={<FaWeixin size="70px" color="green" />}
        />
      </div>
    </>
  );
}

export default React.memo(ContactPage);
