import React from "react";

// STYLE HERE
import styles from "./NavModal.module.css";

// LOGO IMPORT
import logo from "../Navbar/image-removebg-preview.png";

const Navbar = (param) => {
  if (!param.show) {
    return null;
  }

  return (
    <>
      <section className={styles.navWrapper}>
        <section className={styles.hamburger} onClick={param.onClose}>
          <i className="fa-solid fa-arrow-left-long"></i>
        </section>
        <section className={styles.allComponents}>
          <div className={styles.tex}>
            <img src={logo} className={`${styles.logo}`} />
          </div>
          <div className={styles.text}>
            <h2>Home</h2>
          </div>
          <div className={styles.text}>
            <h2>Events</h2>
          </div>
          <div className={styles.text}>
            <h2>Our Blog</h2>
          </div>
          <div className={styles.text}>
            <h2>Success Stories</h2>
          </div>
        </section>
      </section>
    </>
  );
};

export default Navbar;
