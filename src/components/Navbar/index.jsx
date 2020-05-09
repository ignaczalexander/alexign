import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
import classnames from "classnames";
import logo from "../../assets/img/logo.png";
export const Navbar = () => {
  const [navOpened, setNavOpened] = useState(false);
  return (
    <div className={styles.container}>
      <i
        onClick={() => setNavOpened(!navOpened)}
        className={classnames("fas fa-bars", styles.open)}
      ></i>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="" />
      </Link>
      <ul className={styles.list_desktop}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a className={styles.contact} href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <a
        className={classnames(styles.contact_mobile, styles.contact)}
        href="#contact"
      >
        Contact
      </a>

      <div
        className={classnames(styles.mobile_nav_container, {
          [styles.mobile_nav_container_opened]: navOpened
        })}
      >
        <i
          onClick={() => setNavOpened(false)}
          className={classnames("fas fa-times", styles.close)}
        ></i>

        <ul className={styles.list_mobile}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
