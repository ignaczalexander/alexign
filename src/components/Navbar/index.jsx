import React from "react";
import classnames from "classnames";
import styles from "./navbar.module.scss";

import MediaQuery from "react-responsive";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = (props) => {
  return (
    <div
      className={classnames(styles.container, {
        [styles.sticky]: props.isSticky,
      })}
    >
      <MediaQuery minWidth={768}>
        {(matches) => (matches ? <DesktopNavbar /> : <MobileNavbar />)}
      </MediaQuery>

      {/* <a
        className={classnames(styles.contact_mobile, styles.contact)}
        href="#contact"
      >
        Contact
      </a> */}
    </div>
  );
};
export default Navbar;
