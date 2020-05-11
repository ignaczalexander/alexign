import React from "react";
import ScrollAnim from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const ScrollAnimation = (props) => {
  return <ScrollAnim {...props}>{props.children}</ScrollAnim>;
};

export default ScrollAnimation;
