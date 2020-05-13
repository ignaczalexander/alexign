import React from "react";
import styles from "./features.module.scss";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "./swiper.css";
import constants from "../../constants";
import ScrollAnimation from "../shared/ScrollAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureItem = (props) => {
  const { skills, icon, title, description, color } = props;
  return (
    <ScrollAnimation duration={0.5} animateIn="animate__zoomIn">
      <div className={styles.feature_item}>
        <FontAwesomeIcon style={{ color: color }} size="2x" icon={icon} />
        <h3>{title}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.skill_list}>
          {skills.map((skill) => (
            <div key={skill} className={styles.list_item}>
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
    "JavaScript",
    "React.js",
    "Redux",
    "HTML/CSS",
    "Gatsby",
    "Vue.js",
  ];
  const backendSkills = ["Node.js", "Express", "MongoDB", "SQL", ".NET", "C#"];
  const iosSkills = ["Swift", "CocoaPods", "Firebase", "MapKit"];

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
            icon="code"
            skills={frontendSkills}
            description="I enjoy working with modern Front End JavaScript frameworks such as React and Vue. By developing many websites my HTML and CSS skills have sharpened as well."
            color="#36aaff"
          />
        </div>
        <div>
          <FeatureItem
            title="Back End"
            icon="terminal"
            skills={backendSkills}
            description="My Back End skills mainly include creating RESTful APIs using Node.js and .NET with an SQL or NOSQL database layer. I also have experience with authorization and protected routes."
            color="#30E5AD"
          />
        </div>
        <div>
          <FeatureItem
            title="iOS development"
            icon={["fab", "apple"]}
            skills={iosSkills}
            description="My newest passion is iOS app development. I work comfortably with Swift and the Apple development environment. My most recent apps feature Firebase authentication and realtime cloud database."
            color="#838383"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default FeaturesSection;
