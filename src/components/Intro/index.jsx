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
          <h1>High quality professional websites</h1>
          <h2>Beautiful. Fast. Affordable.</h2>
        </div>
        <img src={illustration} alt="" />
        <div>
          <h2>See what we can do</h2>
          <h3>Lorem ipsum dolor</h3>
        </div>
      </div>
    </div>
  );
};
export default Intro;
