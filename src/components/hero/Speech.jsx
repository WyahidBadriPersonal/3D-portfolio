import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
const Speech = () => {
  return (
    <motion.div
      className="speech-bubble-container"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="speech-bubble">
        <TypeAnimation
          sequence={[
            1500,
            // Same substring at the start will only be typed out once, initially
            "Reach out for all React projects",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Reach out for all JavaScript projects",
            1000,
            "Reach out for all NodeJS projects",
            1000,
            "Reach out for all MERN projects",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      <img
        src="https://media.licdn.com/dms/image/v2/D4E35AQEPyX_dPQ679g/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1731424020112?e=1744567200&v=beta&t=91LlG6xAzN0Y9lLWK7g51pkDu7YCNHwi5TVLgz9CTJI"
        alt=""
        className="small-avatar"
      />
    </motion.div>
  );
};

export default Speech;
