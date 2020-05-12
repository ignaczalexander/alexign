import React from "react";
import styles from "./portfolio.module.scss";
import Titles from "../shared/Titles";
import ScrollAnimation from "../shared/ScrollAnimation";
import tmwLogo from "../../assets/img/trackMyWork-logo.png";
import alexignLogo from "../../assets/img/alexign-logo.png";
import constants from "../../constants";

const PortfolioItem = (props) => {
  const { url, thumbnail, description, techs, title } = props;
  return (
    <ScrollAnimation duration={0.5} animateIn="animate__fadeInLeft">
      <div className={styles.item}>
        <div className={styles.text}>
          <div className={styles.info}>
            <div className={styles.techs}>{techs}</div>
            <div className={styles.title}>{title}</div>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
        <a
          className={styles.thumbnail}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={title}
        >
          <img src={thumbnail} alt="" />
        </a>
      </div>
    </ScrollAnimation>
  );
};
const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "TrackMyWork",
      techs: "React, Redux, HTML/CSS, Node.js, MongoDB",
      description:
        "TrackMyWork is a minimalist work shift tracker website made with a React Front End and a Node.js REST API server. It features secure user authentication with JWT and protected routes. ",
      thumbnail: tmwLogo,
      url: "https://tmwapp.herokuapp.com",
    },
    {
      title: "Alexign - Personal page",
      techs: "React, HTML/CSS, SCSS, Progressive Web App, EmailJS",
      description:
        "You are looking at it right now. A React single page progressive web app with animations, fast loading time and EmailJS integration for handling message sending on the client side.",
      thumbnail: alexignLogo,
      url: "https://alexign.com",
    },
  ];
  return (
    <div id={constants.sectionID.PORTFOLIO} className={styles.container}>
      <ScrollAnimation
        duration={0.5}
        animateIn="animate__fadeInRight"
        offset={0}
      >
        <Titles
          title="My portfolio"
          subtitle="Take a look at my recent projects"
        />
      </ScrollAnimation>
      <div className={styles.elements}>
        {portfolioItems.map((item, i) => (
          <PortfolioItem
            key={i}
            description={item.description}
            thumbnail={item.thumbnail}
            url={item.url}
            title={item.title}
            techs={item.techs}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
