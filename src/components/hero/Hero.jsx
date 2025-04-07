import React, { Suspense, useRef } from "react";
import "./hero.css";
import {
  FaReact,
  FaJsSquare,
  FaNode,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import Speech from "./Speech";
import { motion, useInView } from "motion/react";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";

const techVariants = {
  initial: {
    x: -100,
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

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.25,
    },
  },
};
const titeVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="hero" ref={ref}>
      <div className="heroSection left">
        <motion.h1
          // initial={{ y: -100, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          variants={titeVariants}
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hello, <br /> <span className="">I'm Wyahid</span>
        </motion.h1>
        <motion.div
          variants={techVariants}
          // initial="initial"
          // animate="animate"
          animate={isInView ? "animate" : "initial"}
          className="tech"
        >
          <motion.h2>Frontend/Fullstack Developer</motion.h2>
          <motion.div variants={techVariants} className="techList">
            <motion.div variants={techVariants}>
              <SiMongodb size={40} color="green" />
            </motion.div>
            <motion.div variants={techVariants}>
              <FaNode size={40} color="green" />
            </motion.div>
            <motion.div variants={techVariants}>
              <FaJsSquare size={40} color="orange" />
            </motion.div>
            <motion.div variants={techVariants}>
              <FaReact size={40} color="blue" />
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.a
          href="#services"
          className="scroll"
          animate={{ y: [0, 5], opacity: [0, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.a>
      </div>
      <div className="heroSection right">
        <motion.div
          className="follow"
          variants={followVariants}
          // initial="initial"
          // animate="animate"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.a
            href="https://www.linkedin.com/in/wyahidbadri"
            target="_blank"
            variants={followVariants}
          >
            <FaLinkedin size={40} className="linkedin" />
          </motion.a>
          <motion.div className="followTextContainer" variants={followVariants}>
            <div className="followText">Connect with me</div>
          </motion.div>
        </motion.div>
        <Speech />
        {/* <motion.div className="certifications" 
        animate={{ opacity: [0, 1] }} 
        transition={{ duration: 2, ease: "easeInOut" }}>
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" 
          alt="cert"/>
          Google Certified <br/>
          UX <br/>
          IT<br/>
        </motion.div> */}
        <motion.a
          href="#contact"
          className="contactLink"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150" className="">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
              </defs>

              {/* Visible pink circle */}
              <circle
                cx="100"
                cy="100"
                r="60"
                stroke="pink"
                strokeWidth="2"
                fill="pink"
              />

              {/* First text */}
              <text dy="12" fill="black" className="circleText">
                <textPath href="#circlePath" startOffset="0%">
                  Contact Me ·
                </textPath>
              </text>

              {/* Second text at different offset */}
              <text dy="12" fill="black" className="circleText">
                <textPath href="#circlePath" startOffset="50%">
                  Hire Now ·
                </textPath>
              </text>
            </svg>
            <div className="paperPlane">
              <FaPaperPlane size={40} color="#12071f" />
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="backGround">
        {/* 3D */}
        <Canvas className="canvas3D">
          <Suspense fallback="Loadind 3D shape">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="heroImg">
          <img src="/Hero-crop.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
