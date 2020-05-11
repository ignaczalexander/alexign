import React, { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import styles from "./navbar.module.scss";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems";

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
      <i
        onClick={() => setNavOpened(!navOpened)}
        className={classnames("fas fa-bars", styles.open)}
      ></i>
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
        <i
          onClick={() => setNavOpened(false)}
          className={classnames("fas fa-times", styles.close)}
        ></i>

        <ul className={styles.list_mobile}>
          <NavigationItems onClick={() => setNavOpened(false)} />
        </ul>
      </div>
    </React.Fragment>
  );
};

export default MobileNavbar;
