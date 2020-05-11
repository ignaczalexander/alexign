import React from "react";
import { Link } from "react-scroll";
import * as Scroll from "react-scroll";
import logo from "../../assets/img/logo.png";
import styles from "./navbar.module.scss";

const Logo = () => {
  return (
    <Link
      onClick={() => Scroll.animateScroll.scrollToTop({ duration: 400 })}
      className={styles.logo}
      to="/"
    >
      <img src={logo} alt="" />
    </Link>
  );
};

export default Logo;
