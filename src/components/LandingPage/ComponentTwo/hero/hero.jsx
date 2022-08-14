import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>
          Women shouldn't be afraid to <br /> put themselves forward.
        </h1>
        <section>
          <div className={styles.top}>
            <span> WTM </span>
            <span className={styles.star}>★</span>
            <span>Buea</span>
          </div>
          <div className={styles.bottom}>
            <div></div>
            <span className={styles.bottomText}>2015</span>
            <div></div>
          </div>

        </section>
      </div>
    </div>
  );
}

export default Hero;
