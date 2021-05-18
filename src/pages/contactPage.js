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

function ContactPage() {
  return (
    <>
      <div className={styles.contactTitle}>
        <TitleComp title={"Contact"} span={"Contact"} />
      </div>
      <div className={styles.contactPage}>
        <div className={styles.googleMap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14456.010832976775!2d94.40780002427503!3d25.067897343301716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374858a895a9ff5f%3A0x73ec9280e243e411!2sKhangkhui%20Khunou%2C%20Manipur%20795142!5e0!3m2!1sen!2sin!4v1620997132264!5m2!1sen!2sin"
            title="gmap"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
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
            text={"Hno 22, Khangkhui Khunou"}
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

export default ContactPage;
