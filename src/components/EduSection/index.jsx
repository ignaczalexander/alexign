import React from "react";
import styles from "./edu.module.scss";
import Titles from "../shared/Titles";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import constants from "../../constants";

const EduSection = () => {
  return (
    <div id={constants.sectionID.EDUCATION} className={styles.container}>
      <ScrollAnimation
        duration={0.7}
        animateOnce
        animateIn="animate__fadeInRight"
        offset={0}
      >
        <Titles title="Education" icon="fas fa-graduation-cap" />
      </ScrollAnimation>
      <div className={styles.edu_list}>
        <ScrollAnimation
          duration={0.7}
          animateOnce
          animateIn="animate__fadeInLeft"
        >
          <div className={styles.edu_item}>
            <div className={styles.degree}>Bachelor's degree</div>
            <div className={styles.name}>Software Development</div>
            <div className={styles.school}>
              University College of Northern Denmark
            </div>
          </div>
          <div className={styles.edu_item}>
            <div className={styles.degree}>Academy Profession degree</div>
            <div className={styles.name}>Computer Science</div>
            <div className={styles.school}>
              University College of Northern Denmark
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default EduSection;
