import React from "react";
import styles from "./features.module.scss";
import Titles from "../shared/Titles";

const FeaturesSection = () => {
  const frontendSkills = [
    "React.js",
    "Redux",
    "HTML/CSS",
    "Node.js",
    "Gatsby",
    "Vue.js",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.feature_item}>
        <i className="fas fa-code"></i>
        <h3>Front End</h3>
        <div className={styles.description}>
          Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
        </div>
        <div className={styles.skill_list}>
          {frontendSkills.map((skill) => (
            <div className={styles.list_item}>
              <div className={styles.dot}></div>
              <div>{skill}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.feature_item}>
        <i className="fas fa-terminal"></i>
        <h3>Back End</h3>
        <div className={styles.description}>
          Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
        </div>
      </div>
      <div className={styles.feature_item}>
        <i className="fab fa-apple"></i>
        <h3>iOS development</h3>
        <div className={styles.description}>
          Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
