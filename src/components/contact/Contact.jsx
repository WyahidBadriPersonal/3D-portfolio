import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "motion/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const listVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(form, { margin: "-200px" });

  return (
    <div className="contact">
      <div className="cSection">
        <motion.form
          action=""
          ref={form}
          onSubmit={sendEmail}
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h1 className="cTitle" variants={listVariants}>
            Get in touch
          </motion.h1>
          <motion.div className="formItem" variants={listVariants}>
            <label>Name</label>
            <input type="text" placeholder="John Snow" name="user_username" />
          </motion.div>
          <motion.div className="formItem" variants={listVariants}>
            <label>Email</label>
            <input
              type="text"
              placeholder="JSnow@nightswatch.com"
              name="user_email"
            />
          </motion.div>
          <motion.div className="formItem" variants={listVariants}>
            <label>Message</label>
            <textarea
              placeholder="Write your message"
              rows="10"
              name="message"
            ></textarea>
          </motion.div>
          <motion.button className="formButton" variants={listVariants}>
            Send
          </motion.button>
          {success && (
            <span className="success">Your message has been sent!</span>
          )}
          {error && (
            <span className="error">
              Something went wrong, try again later.
            </span>
          )}
        </motion.form>
      </div>
      <div className="cSection right">
        <DotLottieReact
          src="https://lottie.host/e4c8ecf0-1f92-446b-8a29-2aff9d0a9883/ZM1gzTPyD3.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default Contact;
