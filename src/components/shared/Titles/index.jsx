import React from "react";
import styles from "./titles.module.scss";

const Titles = (props) => {
  const { title, subtitle, icon } = props;
  return (
    <div className={styles.container}>
      {icon && <i className={icon}></i>}
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};
Titles.defaultProps = {
  icon: "",
};

export default Titles;
