import React, { useRef } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { stagger } from "motion";

const projects = [
  {
    id: 1,
    title: "FREELANCE: BitesOfNYC",
    image: "/bitesofnyc-preview.png",
    description:
      "Full stack food review blog with user authentication, user profiles, protected routes, comments, and likes. Admin can create, update, and delete posts.",
    link: "https://bitesofnyc.com/",
    technologies: ["MongoDB", "Express", "React", "Node"],
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="pItem" ref={ref}>
      <motion.div
        className="pImg"
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <img src={item.image} alt="" />
      </motion.div>
      <motion.div
        className="pText"
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
      >
        <motion.h2 variants={textVariants}>{item.title}</motion.h2>
        <motion.p variants={textVariants}>{item.description}</motion.p>
        <motion.span className="tect-list" variants={textVariants}>
          {item.technologies.map((tech) => (
            <span key={tech} className="tech">
              {tech}
            </span>
          ))}
        </motion.span>
        <motion.a href={item.link} target="_blank" rel="noreferrer" variants={textVariants}>
          View Project
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <motion.div className="pList">
        {projects.map((project) => (
          <ListItem key={project.id} item={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
