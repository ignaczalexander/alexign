import React from "react";
import styles from "./intro.module.scss";
import illustration from "../../assets/img/undraw_programming_2svr.svg";
import { Navbar } from "../Navbar";
import Titles from "../shared/Titles";

const Intro = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Full Stack Web & iOS developer</h1>
          {/* <h2>Beautiful. Fast. Affordable.</h2> */}
        </div>
        <img className={styles.illustration} src={illustration} alt="" />
        <div className={styles.description}>
          <h2>See what we can do</h2>
          <p>
            Lorem ipsume sad sde Lorem ipsume sad sde Lorem ipsume sad sde Lorem
            ipsume sad sde Lorem ipsume sad sde ipsume sad sde Lorem ipsume sad
            sdeipsume sad sde Lorem ipsume sad sde
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
