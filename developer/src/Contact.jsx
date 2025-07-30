import React, { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { forwardRef } from "react";
import emailjs from "emailjs-com";

const Contact = forwardRef((props, ref) => {
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateOwner = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const templateReply = process.env.REACT_APP_EMAILJS_REPLY_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.sendForm(serviceID, templateOwner, form, publicKey).then(
      () => {
        setSuccess("Message sent successfully!");
        setTimeout(() => setSuccess(""), 3000);
        form.reset();
      },
      (error) => {
        console.error("Error sending to owner:", error.text);
      }
    );

    const userData = {
      name: form.name.value,
      email: form.email.value,
    };

    emailjs.send(serviceID, templateReply, userData, publicKey).then(
      () => {
        console.log("Auto-reply sent!");
      },
      (error) => {
        console.error("Auto-reply failed:", error.text);
      }
    );
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <h2 className="head">
        Contact <span className="me">Me</span>
      </h2>
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            cols="5"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div>
          <input type="submit" value="Send Message" className="ntb" />
        </div>
      </form>

      <div className="social-icons">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:nithishnani443@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
        <a
          href="https://github.com/Nithish-kumar07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
});

export default Contact;
