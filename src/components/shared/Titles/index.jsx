import React from "react";
import styles from "./titles.module.scss";

const Titles = props => {
  const { title, subtitle } = props;
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};

export default Titles;
