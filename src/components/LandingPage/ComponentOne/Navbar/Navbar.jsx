import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../../../Assets/images/women_techmakers.png";

const Navbar = () => {
  const routes = ["/", "/events", "/blog", "success-stories"];
  const [state, setState] = useState('none');

  const toggleDropdown = () => {
    if (state === 'none') {
      setState('block');
    } else {
      setState('none');
    }
  };

  return (
    <>
      <section className={styles.navWrapper}>
        <section className={styles.logoSection}>
          <img src={logo} className={styles.logo} alt="logo" />
        </section>
        <section className={styles.navRight}>
          <section className={styles.navRightChild}>
            <Link to={routes[0]} className={styles.link}>
              Home
            </Link>
          </section>
          <section className={styles.navRightChild}>
            <Link to={routes[1]} className={styles.link}>
              Events
            </Link>
          </section>
          <section className={styles.navRightChild}>
            <Link to={routes[2]} className={styles.link}>
              Our Blog
            </Link>
          </section>
          <section className={styles.navRightChild}>
            <Link to={routes[3]} className={styles.link}>
              Success Stories
            </Link>
          </section>
        </section>
        <div className={styles.dropdownContainer}>
          <span
            className={`${styles.hamburgerIcon}`}
            onClick={toggleDropdown}
          >
            <i className="fa-solid fa-bars"></i>
          </span>
          <div className={styles.dropdownMenu} style={{ display: state }}>
            <ul>
              <li><Link to={routes[0]} className={styles.link}>Home</Link></li>
              <li><Link to={routes[1]} className={styles.link}>Events</Link></li>
              <li><Link to={routes[2]} className={styles.link}>Our Blog</Link></li>
              <li><Link to={routes[3]} className={styles.link}>Success Stories</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
