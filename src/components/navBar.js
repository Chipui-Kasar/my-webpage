import React from "react";
import image from "../img/image.png";
import { NavLink } from "react-router-dom";
import styles from "../styles.module.css";

function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <nav className={styles.navSection}>
        <div className={styles.profile}>
          <img className={styles.myPic} src={image} alt="" />
        </div>
        <ul
          className={styles.navItems}
          onClick={() => props.setNavToggle(false)}
        >
          <li className={styles.navItem}>
            <NavLink to="/" exact activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/about" exact activeClassName={styles.active}>
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/education" exact activeClassName={styles.active}>
              Education
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/portfolio" exact activeClassName={styles.active}>
              Portfolios
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink to="/contact" exact activeClassName={styles.active}>
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className={styles.footer}>
          <p>@2021 All Rights Reserved</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
