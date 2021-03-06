import React, { useState } from "react";
import styles from "./contact.module.scss";
import illustration from "../../assets/img/undraw_message_sent_1030.svg";
import Titles from "../shared/Titles";
import classnames from "classnames";
import emailjs from "emailjs-com";
import ScrollAnimation from "../shared/ScrollAnimation";
import constants from "../../constants";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const checkFields = () => {
    setErrors([]);
    let localErrors = [];
    if (name.length === 0) {
      localErrors.push("name");
    }
    if (email.length < 4) localErrors.push("email");
    if (description.length === 0) localErrors.push("description");
    setErrors(localErrors);
    if (localErrors.length > 0) {
      return false;
    }
    return true;
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (checkFields()) {
      setLoading(true);
      const templateParams = {
        name,
        email,
        phone,
        description,
      };
      emailjs
        .send(
          "gmail",
          process.env.REACT_APP_EMAILJS_TEMPLATEID,
          templateParams,
          process.env.REACT_APP_EMAILJS_USERID
        )
        .then(
          (response) => {
            setEmailSent(true);
            setLoading(false);
          },
          (err) => {
            setLoading(false);
          }
        );
    }
  };
  const handleChange = (e, fieldName) => {
    switch (fieldName) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;

      default:
        break;
    }
  };
  return (
    <div id={constants.sectionID.CONTACT} className={styles.container}>
      <ScrollAnimation
        duration={0.7}
        animateIn="animate__fadeInDown"
        offset={0}
      >
        <Titles
          title="Get in touch"
          subtitle="Contact me to start working together"
        />
      </ScrollAnimation>
      <div className={styles.row}>
        <ScrollAnimation
          duration={0.7}
          className={styles.img_container}
          animateIn="animate__fadeInLeft"
        >
          <img src={illustration} alt="" />
        </ScrollAnimation>
        {emailSent ? (
          <div className={styles.email_sent}>
            <div>Thank you for contacting me!</div>
            <div>I will get back to you as soon as possible.</div>
          </div>
        ) : (
          <ScrollAnimation
            className={styles.form}
            duration={0.7}
            animateIn="animate__fadeInRight"
          >
            <form onSubmit={handleSend}>
              {errors.length > 0 && (
                <small>Please fill in the required fields</small>
              )}
              <input
                title="Name"
                id="name"
                onChange={(e) => handleChange(e, "name")}
                value={name}
                placeholder="Name"
                type="text"
                className={classnames({
                  [styles.invalid]: errors.includes("name"),
                })}
              />
              <input
                title="email address"
                id="email"
                onChange={(e) => handleChange(e, "email")}
                value={email}
                placeholder="Email"
                type="email"
                className={classnames({
                  [styles.invalid]: errors.includes("email"),
                })}
              />
              <input
                title="phone number"
                id="phone"
                onChange={(e) => handleChange(e, "phone")}
                value={phone}
                placeholder="Phone number"
                type="text"
              />
              <textarea
                title="Your message to me"
                placeholder="Your message to me "
                name="description"
                id="description"
                onChange={(e) => handleChange(e, "description")}
                value={description}
                cols="30"
                rows="10"
                className={classnames({
                  [styles.invalid]: errors.includes("description"),
                })}
              ></textarea>
              <button
                type="submit"
                disabled={loading}
                className={styles.btn_send}
              >
                {loading ? (
                  <div className={styles.dots3} id="dots3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                ) : (
                  <span>Send</span>
                )}
              </button>
            </form>
          </ScrollAnimation>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
