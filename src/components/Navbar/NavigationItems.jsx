import React from "react";
import { Link } from "react-scroll";
import constants from "../../constants";

const NavigationItems = (props) => {
  const CustomLink = (localProps) => (
    <Link
      smooth
      duration={400}
      offset={-50}
      onClick={props.onClick}
      activeClass={props.activeClass}
      spy
      {...localProps}
    >
      {localProps.children}
    </Link>
  );
  return (
    <React.Fragment>
      <li>
        <CustomLink to={constants.sectionID.SKILLS}>Skills</CustomLink>
      </li>
      <li>
        <CustomLink to={constants.sectionID.EDUCATION}>Education</CustomLink>
      </li>
      <li>
        <CustomLink to={constants.sectionID.EXPERIENCE}>Experience</CustomLink>
      </li>
      <li>
        <CustomLink to={constants.sectionID.PORTFOLIO}>Portfolio</CustomLink>
      </li>
      <li>
        <CustomLink
          className={props.contactClass}
          to={constants.sectionID.CONTACT}
        >
          Contact
        </CustomLink>
      </li>
    </React.Fragment>
  );
};
NavigationItems.defaultProps = {
  onClick: () => {},
  activeClass: "",
  contactClass: "",
};
export default NavigationItems;
