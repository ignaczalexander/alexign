import React from "react";
import Titles from "../shared/Titles";
import styles from "./xp.module.scss";
import ScrollAnimation from "../shared/ScrollAnimation";
import constants from "../../constants";

const XpSection = () => {
  return (
    <div id={constants.sectionID.EXPERIENCE} className={styles.container}>
      <ScrollAnimation
        offset={0}
        duration={0.7}
        animateIn="animate__fadeInRight"
      >
        <Titles title="Professional Experience" icon="fas fa-briefcase" />
      </ScrollAnimation>
      <div className={styles.xp_list}>
        <ScrollAnimation duration={0.7} animateIn="animate__fadeInLeft">
          <div className={styles.xp_item}>
            <div className={styles.info}>
              <div className={styles.company}>DinKurv.dk</div>
              <div className={styles.position}>React.js developer</div>
            </div>
            <div className={styles.description}>
              I developed reusable and responsible React components for a price
              comparison website. I implemented an authentication system using
              the Facebook Login SDK along with various user pages.
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default XpSection;
