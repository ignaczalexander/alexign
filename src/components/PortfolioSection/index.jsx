import React from "react";
import styles from "./portfolio.module.scss";
import Titles from "../shared/Titles";

const PortfolioSection = () => {
  return (
    <div className={styles.container}>
      <Titles
        title="Our portfolio"
        subtitle="Take a look at our featured work"
      />
      <div className={styles.elements}>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
        <div className={styles.element}></div>
      </div>
    </div>
  );
};

export default PortfolioSection;
