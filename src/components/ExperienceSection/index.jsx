import React from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "../shared/ScrollAnimation";
import Titles from "../shared/Titles";

import styles from "./experience.module.scss";

const ExperienceSection = (props) => {
  const { sectionId, title, icon, items, backgroundColor } = props;
  return (
    <div
      className={styles.container}
      id={sectionId}
      style={{ backgroundColor: backgroundColor }}
    >
      <ScrollAnimation
        duration={0.7}
        animateIn="animate__fadeInRight"
        offset={0}
      >
        <Titles title={title} icon={icon} />
      </ScrollAnimation>
      <div className={styles.items}>
        <ScrollAnimation duration={0.7} animateIn="animate__fadeInLeft">
          {items.map((item) => (
            <div key={item.title} className={styles.item}>
              <div className={styles.info}>
                <div className={styles.overtitle}>{item.overTitle}</div>
                <div className={styles.title}>{item.title}</div>
              </div>
              <div className={styles.description}>{item.description}</div>
            </div>
          ))}
        </ScrollAnimation>
      </div>
    </div>
  );
};
ExperienceSection.propTypes = {
  sectionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      overTitle: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  backgroundColor: PropTypes.string,
};
export default ExperienceSection;
