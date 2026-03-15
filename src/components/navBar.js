import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles.module.css";

function NavBar({ setNavToggle }) {
  const getNavLinkClassName = ({ isActive }) =>
    isActive ? styles.active : undefined;

  return (
    <div className={styles.navBar}>
      <nav className={styles.navSection}>
        <div className={styles.profile}>
          <img
            className={styles.myPic}
            src="https://media.graphassets.com/ON2vDzY8Q5yZ1Y7C2Kkp"
            alt="Chipui Kasar"
            width="100%"
          />
        </div>
        <ul className={styles.navItems} onClick={() => setNavToggle(false)}>
          <li className={styles.navItem}>
            <NavLink to="/" end className={getNavLinkClassName}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/about" className={getNavLinkClassName}>
              About
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/education" className={getNavLinkClassName}>
              Education
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/experience" className={getNavLinkClassName}>
              Experience
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/portfolio" className={getNavLinkClassName}>
              Portfolios
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/service" className={getNavLinkClassName}>
              Services
            </NavLink>
          </li>

          <li className={styles.navItem}>
            <NavLink to="/contact" className={getNavLinkClassName}>
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className={styles.footer}>
          <p>@{new Date().getFullYear()} All Rights Reserved</p>
        </footer>
      </nav>
    </div>
  );
}

export default NavBar;
