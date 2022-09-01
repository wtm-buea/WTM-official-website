import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <section className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>
          Women shouldn't be afraid to <br /> put themselves forward.
        </h1>
        <section>
          <div className={styles.left}>
            <span>WTM</span>
            <span className={styles.underline}></span>
          </div>
          <div className={styles.center}>
            <span className={styles.star}>★</span>
            <span className={styles.year}>Since 2012 to 2022</span>
          </div>
          <div className={styles.right}>
            <span>Buea</span>
            <span className={styles.underline}></span>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Hero;
