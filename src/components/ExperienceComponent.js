import React from "react";
import styles from "../styles.module.css";
function ExperienceComponent() {
  const experiences = [
    {
      title: "Sharepoint Developer",
      company: "Sharepoint Designs",
      location: "Chennai, Tamil Nadu 600041",
      date: "July 2021 - Present",
    },
  ];

  return (
    <>
      <div className={styles.experience_container}>
        <h1>Experience</h1>
        <div className={styles.experience_list}>
          {experiences.map((experience, index) => {
            return (
              <div className={styles.experience_item} key={index}>
                <div className={styles.experience_item_title}>
                  <h3>{experience.title}</h3>
                  <h4>
                    Company:{" "}
                    <a href="https://sharepointdesigns.com/">
                      {experience.company}
                    </a>
                  </h4>
                  <h5>Location: {experience.location}</h5>
                  <h6>{experience.date}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExperienceComponent;
