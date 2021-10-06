import React, { useEffect, useRef, useState } from "react";
import Intro from "../Intro";
import FeaturesSection from "../FeaturesSection";
import ContactSection from "../ContactSection";
import Navbar from "../Navbar/index.jsx";
import Footer from "../Footer";
import PortfolioSection from "../PortfolioSection";
import ExperienceSection from "../ExperienceSection";
import constants from "../../constants";

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
      <ExperienceSection
        sectionId={constants.sectionID.EXPERIENCE}
        title="Professional experience"
        icon="briefcase"
        items={[
          {
            title: "Frontend Developer",
            overTitle: "GraphAware",
            description:
              "Developed features and reusable components for a complex graph related project using Vue and TypeScript.\nDefined and implemented end-to-end tests using Cypress, Mocha and Chai.",
          },
          {
            title: "React.js developer",
            overTitle: "DinKurv.dk",
            description:
              "I developed reusable and responsible React components for a price comparison website.\n I implemented an authentication system using the Facebook Login SDK along with various user pages.",
          },
        ]}
      />
      <ExperienceSection
        sectionId={constants.sectionID.EDUCATION}
        title="Education"
        icon="graduation-cap"
        items={[
          {
            title: "Software Development",
            overTitle: "Bachelor's degree",
            description: "University College of Northern Denmark",
          },
          {
            title: "Computer Science",
            overTitle: "Academy Profession degree",
            description: "University College of Northern Denmark",
          },
        ]}
        backgroundColor="#3d84cc"
      />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
