import React from "react";
import styles from "./features.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./swiper.css";
import constants from "../../constants";

const FeatureItem = (props) => {
  const { skills, icon, title, description, color } = props;
  return (
    <ScrollAnimation animateOnce duration={0.5} animateIn="animate__zoomIn">
      <div className={styles.feature_item}>
        <i style={{ color: color }} className={icon}></i>
        <h3>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.skill_list}>
          {skills.map((skill) => (
            <div className={styles.list_item}>
              <div
                style={{ backgroundColor: color }}
                className={styles.dot}
              ></div>
              <div>{skill}</div>
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
};

const FeaturesSection = () => {
  const frontendSkills = [
    "React.js",
    "Redux",
    "HTML/CSS",
    "Node.js",
    "Gatsby",
    "Vue.js",
  ];
  const backendSkills = [
    "React.js",
    "Redux",
    "HTML/CSS",
    "Node.js",
    "Gatsby",
    "Vue.js",
  ];
  const iosSkills = [
    "React.js",
    "Redux",
    "HTML/CSS",
    "Node.js",
    "Gatsby",
    "Vue.js",
  ];

  const params = {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    slidesPerView: 1,
    watchOverflow: true,
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  };

  return (
    <div id={constants.sectionID.SKILLS} className={styles.container}>
      <Swiper {...params}>
        <div>
          <FeatureItem
            title="Front End"
            icon="fas fa-code"
            skills={frontendSkills}
            description="Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
          "
            color="#36aaff"
          />
        </div>
        <div>
          <FeatureItem
            title="Back End"
            icon="fas fa-terminal"
            skills={backendSkills}
            description="Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
          "
            color="#30E5AD"
          />
        </div>
        <div>
          <FeatureItem
            title="iOS development"
            icon="fab fa-apple"
            skills={iosSkills}
            description="Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
          "
            color="#838383"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default FeaturesSection;
