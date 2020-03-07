import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.about}>
          <div className={styles.title}>Alexign</div>
          <div className={styles.description}>
            Curabitur eget metus vel dolor rutrum scelerisque. Aenean iaculis
            lacus vel orci suscipit lobortis. Proin fringilla tincidunt egestas.
            Maecenas quis consectetur nunc.
          </div>
        </div>
        <div className={styles.lists}>
          <div className={styles.list}>
            <div>Services</div>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className={styles.list}>
            <div>Contact</div>
            <ul>
              <li>
                <a href="">example@alexign.com</a>
              </li>
              <li>
                <a href="">+45 50 39 29 39</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <div className={styles.info}>
          Alexign - C - Address 93, 9000 Aalborg - CVR: 39328893
        </div>
        <div className={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
