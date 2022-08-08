import React, { useState, useEffect } from "react";
import NavModal from "../Modal/NavModal.jsx";

// STYLE HERE
import styles from "./Navbar.module.css";

// LOGO IMPORT
import logo from "./image-removebg-preview.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState("");

  const toggleNav = (e) => {
    e.preventDefault();
    setShow(true);
    setDisplay("none");
  };

  useEffect(() => {
    if (show) {
      setDisplay("none");
    }
    setDisplay("");
  }, [show]);

  return (
    <>
      <section
        className={`${styles.hamburger}`}
        style={{ display: display }}
        onClick={toggleNav}
      >
        <i class="fa-solid fa-bars"></i>
      </section>
      <NavModal show={show} onClose={() => setShow(false)} />
      <section className={styles.navWrapper}>
        <section className={styles.logoSection}>
          <img src={logo} className={styles.logo} />
        </section>
        <section className={styles.navRight}>
          <section className={styles.navRightChild}>
            <h2 className={styles.inner}>Home</h2>
            <div className={styles.d}></div>
          </section>
          <section className={styles.navRightChild}>
            <h2 className={styles.inner}>Events</h2>
            <div className={styles.d}></div>
          </section>
          <section className={styles.navRightChild}>
            <h2 className={styles.inner}>Our Blog</h2>
            <div className={styles.d}></div>
          </section>
          <section className={styles.navRightChild}>
            <h2 className={styles.inner}>Success Stories</h2>
            <div className={styles.d}></div>
          </section>
        </section>
      </section>
    </>
  );
};

export default Navbar;
