import React from "react";
import styles from "./portfolio.module.scss";
import Titles from "../shared/Titles";
import ScrollAnimation from "../shared/ScrollAnimation";
import tmwLogo from "../../assets/img/trackMyWork-logo.png";
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
        "Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk",
      thumbnail: tmwLogo,
      url: "https://tmwapp.herokuapp.com",
    },
    {
      title: "TrackMyWork",
      techs: "React, Redux, HTML/CSS, Node.js, MongoDB",
      description:
        "Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk",
      thumbnail: tmwLogo,
      url: "https://tmwapp.herokuapp.com",
    },
    {
      title: "TrackMyWork",
      techs: "React, Redux, HTML/CSS, Node.js, MongoDB",
      description:
        "Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk Lorem ipsum aso ooo skksd kskdk",
      thumbnail: tmwLogo,
      url: "https://tmwapp.herokuapp.com",
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
