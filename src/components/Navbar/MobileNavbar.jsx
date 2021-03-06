import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import styles from "./navbar.module.scss";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileNavbar = () => {
  const [navOpened, setNavOpened] = useState(false);
  const mobileListRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        mobileListRef.current &&
        !mobileListRef.current.contains(event.target) &&
        navOpened
      ) {
        setNavOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileListRef, navOpened]);
  return (
    <React.Fragment>
      <FontAwesomeIcon
        onClick={() => setNavOpened(!navOpened)}
        size="lg"
        className={styles.open}
        icon="bars"
      />
      <Logo />
      <div
        className={classnames(styles.mobile_nav_overlay, {
          [styles.mobile_nav_overlay_opened]: navOpened,
        })}
      ></div>

      <div
        className={classnames(styles.mobile_nav_container, {
          [styles.mobile_nav_container_opened]: navOpened,
        })}
        ref={mobileListRef}
      >
        <div onClick={() => setNavOpened(false)} className={styles.close}></div>

        <ul className={styles.list_mobile}>
          <NavigationItems
            activeClass={styles.active}
            onClick={() => setNavOpened(false)}
          />
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MobileNavbar;
