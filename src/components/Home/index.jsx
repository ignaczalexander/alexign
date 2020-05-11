import React, { useEffect, useRef, useState } from "react";
import Intro from "../Intro";
import FeaturesSection from "../FeaturesSection";
import ContactSection from "../ContactSection";
import Navbar from "../Navbar/index.jsx";
import Footer from "../Footer";
import PortfolioSection from "../PortfolioSection";
import EduSection from "../EduSection";
import XpSection from "../XpSection";

export const Home = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <div ref={ref}>
      <Navbar isSticky={isSticky} />
      <Intro />
      <FeaturesSection />
      <EduSection />
      <XpSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
