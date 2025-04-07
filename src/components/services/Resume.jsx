import React, { useRef, useState } from "react";
import "./resume.css";

import { motion, useInView } from "motion/react";

const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const jobVariants = {
  initial: {
    y: -200,
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

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "RevTrax",
    location: "New York, NY",
    duration: "02/2022 - 09/2024",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "Log.ai",
    location: "New York, NY",
    duration: "02/2019 - 02/2022",
  },
];
const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-200px" });
  const [jobOverview, setJobOverview] = useState(1);
  return (
    <div className="resume" ref={ref}>
      <div className="resumeSection left">
        <motion.h1
          className="sectionTitle"
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
        >
          Previous Roles
        </motion.h1>
        <motion.div
          className="jobHistoryList"
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
        >
          {jobs.map((job) => (
            <motion.div
              className="job"
              key={job.id}
              variants={listVariants}
              onClick={() => setJobOverview(job.id)}
            >
              <div className="jobInfo">
                <h2>
                  {job.title} @ {job.company}
                </h2>
                <h3>{job.location}</h3>
                <h4>{job.duration}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.a
          href="/wyahid_badri_resume_site.pdf"
          download
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
        >
          <button className="downloadResume">Download Resume</button>
        </motion.a>
      </div>
      <div className="resumeSection right">
        {jobOverview === 1 && (
          <motion.div
            className="RevTrax jobOverView"
            variants={jobVariants}
            animate={isInView ? "animate" : "initial"}
          >
            <h1>RevTrax Brief Overview</h1>
            <ul>
              <li>Patch Interna UI Bugs</li>
              <li>Implement field validations across UI</li>
              <li>Improve User Experience</li>
              <li>
                Work on custom features for clients i.e Kimberly-Clark, Haleon
              </li>
              <li>Communicate with Jira ticket stakeholders</li>
              <li>Implement custom WYSIWYG text editor</li>
            </ul>
          </motion.div>
        )}
        {jobOverview === 2 && (
          <motion.div
            className="Log_ai jobOverView"
            variants={jobVariants}
            animate={isInView ? "animate" : "initial"}
          >
            <h1>Log.ai Brief Overview</h1>
            <ul>
              <li>Work with UX to create wireframes</li>
              <li>Implement custom scanner</li>
              <li>Communicate with team and set code standards</li>
              <li>Develop COP (Customer order Portal)</li>
              <li>Develop Shopping cart features</li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Resume;
