import React, { useState } from "react";
import styles from "./contact.module.scss";
import illustration from "../../assets/img/undraw_message_sent_1030.svg";
import Titles from "../shared/Titles";
import classnames from "classnames";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const handleSend = e => {
    e.preventDefault();
    setErrors([]);
    let localErrors = [];
    if (name.length < 2) {
      localErrors.push("name");
      console.log("name length", localErrors);
    }
    if (email.length < 4) localErrors.push("email");
    if (description.length < 4) localErrors.push("description");
    setErrors(localErrors);
    if (errors.length === 0) {
      const templateParams = {
        name,
        email,
        phone,
        description
      };
      emailjs
        .send(
          "gmail",
          "template_R4JkEl1b",
          templateParams,
          "user_ZfjDw5OfBuBl5p2hrsjzJ"
        )
        .then(
          response => {
            console.log("SUCCESS!", response.status, response.text);
          },
          err => {
            console.log("FAILED...", err);
          }
        );
    }
    console.log(errors);
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
    <div id="contact" className={styles.container}>
      <Titles
        title="Get in touch"
        subtitle="Contact us to start working together"
      />
      <div className={styles.row}>
        <img src={illustration} alt="" />
        <form onSubmit={handleSend}>
          {errors.length > 0 && (
            <small>Please fill in the required fields</small>
          )}
          <input
            id="name"
            onChange={e => handleChange(e, "name")}
            value={name}
            placeholder="Name"
            type="text"
            className={classnames({
              [styles.invalid]: errors.includes("name")
            })}
          />
          <input
            id="email"
            onChange={e => handleChange(e, "email")}
            value={email}
            placeholder="Email"
            type="email"
            className={classnames({
              [styles.invalid]: errors.includes("email")
            })}
          />
          <input
            id="phone"
            onChange={e => handleChange(e, "phone")}
            value={phone}
            placeholder="Phone number"
            type="text"
          />
          <textarea
            placeholder="Tell us about your case"
            name="description"
            id="description"
            onChange={e => handleChange(e, "description")}
            value={description}
            cols="30"
            rows="10"
            className={classnames({
              [styles.invalid]: errors.includes("description")
            })}
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
