import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>Alexander Ignácz</div>
      <div className={styles.text}>
        Curabitur eget metus vel dolor rutrum scelerisque. Aenean iaculis lacus
        vel orci suscipit lobortis.
      </div>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/alexanderignacz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/ignaczalexander"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className={styles.credit}>Website designed and developed by me</div>
    </div>
  );
};

export default Footer;
