import React from "react";
import styles from "./titles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Titles = (props) => {
  const { title, subtitle, icon } = props;
  return (
    <div className={styles.container}>
      {icon && <FontAwesomeIcon size="2x" icon={icon} />}
      <h2>{title}</h2>
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};
Titles.defaultProps = {
  icon: "",
};

export default Titles;
