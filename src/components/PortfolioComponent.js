import React from "react";
import Data from "./PortfolioData";
import styles from "../styles.module.css";

function PortfolioComponent() {
  return (
    <div className={styles.portfolioContainer}>
      {Data.map(data => {
        return (
          <div className={styles.portfolios} key={data.id}>
            <div className={styles.image}>
              <img src={data.image} alt="" />
              <ul className={styles.linkHover}>
                <li>
                  <a href={data.link} target="_blank" rel="noreferrer">
                    Visit Site
                  </a>
                </li>
              </ul>
            </div>
            <h5>{data.title}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default PortfolioComponent;
