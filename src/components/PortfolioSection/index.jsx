import React from "react";
import styles from "./portfolio.module.scss";
import Titles from "../shared/Titles";
import tmwThumbnail from "../../assets/img/trackmywork-thumbnail.png";

const PortfolioItem = props => {
  const { url, thumbnail, description } = props;
  return (
    <a
      className={styles.element}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={thumbnail} alt="" />

      <div className={styles.overlay}>
        <div>{description}</div>
      </div>
    </a>
  );
};
const PortfolioSection = () => {
  const portfolioItems = [
    {
      description: "A minimalistic work shift tracker",
      thumbnail: tmwThumbnail,
      url: "https://tmwapp.herokuapp.com"
    },
    {
      description: "A minimalistic work shift tracker",
      thumbnail: tmwThumbnail,
      url: "https://tmwapp.herokuapp.com"
    },
    {
      description: "A minimalistic work shift tracker",
      thumbnail: tmwThumbnail,
      url: "https://tmwapp.herokuapp.com"
    }
  ];
  return (
    <div className={styles.container}>
      <Titles
        title="Our portfolio"
        subtitle="Take a look at our featured work"
      />
      <div className={styles.elements}>
        {portfolioItems.map(item => (
          <PortfolioItem
            description={item.description}
            thumbnail={item.thumbnail}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;
