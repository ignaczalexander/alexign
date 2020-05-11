import React from "react";
import { Link } from "react-scroll";
import constants from "../../constants";

const NavigationItems = (props) => {
  return (
    <React.Fragment>
      <li>
        <Link
          onClick={props.onClick}
          activeClass={props.activeClass}
          smooth
          duration={400}
          to={constants.sectionID.SKILLS}
          offset={-50}
          spy
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          onClick={props.onClick}
          activeClass={props.activeClass}
          smooth
          duration={400}
          to={constants.sectionID.EDUCATION}
          offset={-50}
          spy
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          spy
          onClick={props.onClick}
          activeClass={props.activeClass}
          smooth
          duration={400}
          to={constants.sectionID.EXPERIENCE}
          offset={-50}
        >
          Experience
        </Link>
      </li>
      <li>
        <Link
          onClick={props.onClick}
          spy
          activeClass={props.activeClass}
          smooth
          duration={400}
          to={constants.sectionID.PORTFOLIO}
          offset={-50}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          onClick={props.onClick}
          spy
          activeClass={props.activeClass}
          className={props.contactClass}
          smooth
          duration={400}
          to={constants.sectionID.CONTACT}
          offset={-50}
        >
          Contact
        </Link>
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
