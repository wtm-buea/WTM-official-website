import React from "react";
import styles from "./hero.module.css";

function Hero() {
  return (
    <div>
      <div className={styles.imgFluid}>
        <div className={`${styles.jumbotron} ${styles.TextCenter}`}>
          <div className={styles.container}>
            <h1 className={styles.textDisplay4}>
              Women shouldn't be afraid to <br /> put themselves forward.
            </h1>
            <div className={styles.bottomTextDiv}>
              <div className={styles.bottomText}> WTM </div>
              <div className={styles.bottomTextMid}>
                <div className={styles.innerBottomTextDiv}>★</div>
                <div className={styles.innerBottomTextDiv}>2015</div>
              </div>
              <div className={styles.bottomText}>Buea</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
