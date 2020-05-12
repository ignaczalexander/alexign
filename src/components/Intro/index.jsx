import React from "react";
import styles from "./intro.module.scss";
import illustration from "../../assets/img/undraw_web_developer_p3e5.svg";
import ScrollAnimation from "../shared/ScrollAnimation";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <ScrollAnimation
            duration={0.6}
            delay={200}
            animateIn="animate__fadeInLeft"
          >
            <h2>Hi! My name is Alex. I am a</h2>
            <h1>Full Stack Web &amp; iOS developer</h1>
          </ScrollAnimation>
        </div>
        <img className={styles.illustration} src={illustration} alt="" />
        <div className={styles.description}>
          <h2>See what I can do</h2>
          <p>
            Ut enim blandit volutpat maecenas. Consequat nisl vel pretium
            lectus. Ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
