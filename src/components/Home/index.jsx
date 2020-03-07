import React from "react";
import Intro from "../Intro";
import FeaturesSection from "../FeaturesSection";
import DetailSection from "../DetailSection";
import ContactSection from "../ContactSection";
import wpIllustration from "../../assets/img/undraw_wordpress_utxt.svg";
import mobileIllustration from "../../assets/img/undraw_progressive_app_m9ms.svg";
import Footer from "../Footer";
import styles from "./home.module.scss";
import PortfolioSection from "../PortfolioSection";

export const Home = () => {
  return (
    <div>
      <Intro />
      <FeaturesSection />
      <DetailSection img={wpIllustration} />
      <DetailSection img={mobileIllustration} reverse />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
