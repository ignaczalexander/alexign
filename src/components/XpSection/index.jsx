import React from "react";
import Titles from "../shared/Titles";
import styles from "./xp.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const XpSection = () => {
  return (
    <div id="experience" className={styles.container}>
      <ScrollAnimation
        animateOnce
        duration={0.7}
        animateIn="animate__fadeInRight"
        offset={0}
      >
        <Titles title="Professional Experience" icon="fas fa-briefcase" />
      </ScrollAnimation>
      <div className={styles.xp_list}>
        <ScrollAnimation
          animateOnce
          duration={0.7}
          animateIn="animate__fadeInLeft"
        >
          <div className={styles.xp_item}>
            <div className={styles.info}>
              <div className={styles.company}>DinKurv.dk</div>
              <div className={styles.position}>React.js developer</div>
            </div>
            <div className={styles.description}>
              Accumsan lacus vel facilisis volutpat est. Luctus accumsan tortor
              posuere ac. Accumsan lacus vel facilisis volutpat est. Luctus
              accumsan tortor posuere ac.
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default XpSection;
