import React from "react";
import classnames from "classnames";
import styles from "./detail.module.scss";

const DetailSection = props => {
  const { reverse, img } = props;
  return (
    <div className={styles.container}>
      <img
        className={classnames({ [styles.reversed]: reverse })}
        src={img}
        alt=""
      />
      <div className={styles.text}>
        <h4>Lorem ipsum dolor</h4>
        <h3>Some title text</h3>
        <div>
          Morbi sodales accumsan lorem, a mattis dui consectetur mollis.
          Suspendisse finibus nisl vitae metus ultrices blandit. Donec semper
          dui eu cursus suscipit. Suspendisse dictum commodo ante, in interdum
          justo interdum nec.
        </div>
      </div>
    </div>
  );
};
DetailSection.defaultProps = {
  reverse: false
};

export default DetailSection;
