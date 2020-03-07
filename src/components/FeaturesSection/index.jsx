import React from "react";
import styles from "./features.module.scss";
import Titles from "../shared/Titles";

const FeaturesSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.feature_item}>
        <i className="fab fa-wordpress-simple"></i>
        <h3>WordPress websites</h3>
        <div>
          Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
        </div>
      </div>
      <div className={styles.feature_item}>
        <i className="fas fa-mobile-alt"></i>
        <h3>WordPress websites</h3>
        <div>
          Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
        </div>
      </div>
      <div className={styles.feature_item}>
        <i className="fas fa-envelope"></i>
        <h3>WordPress websites</h3>
        <div>
          Nullam urna sem, vehicula vitae viverra vel, eleifend vel urna. Ut
          vulputate dui a dui tempus, sit amet gravida odio suscipit. Aliquam
          quis eros et dui dignissim.
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
