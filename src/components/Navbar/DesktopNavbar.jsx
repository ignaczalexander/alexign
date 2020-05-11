import React from "react";
import styles from "./navbar.module.scss";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";

const DesktopNavbar = () => {
  return (
    <React.Fragment>
      <Logo />
      <ul className={styles.list_desktop}>
        <NavigationItems
          activeClass={styles.active}
          contactClass={styles.contact}
        />
      </ul>
    </React.Fragment>
  );
};

export default DesktopNavbar;
