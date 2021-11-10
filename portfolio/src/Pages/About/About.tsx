import React from 'react';
import stephen from '../../assets/images/grad-photo.jpg';
import stephen2 from '../../assets/images/snow-picture.jpg';
import { motion } from 'framer-motion';
import { Skills } from '../../components/Skills/Skills';
import './AboutStyles.scss';
const About = () => {
    return (
        <motion.div
            className="aboutContainer"
            variants={aboutContainerVariants}
            exit="exit"
            initial="hidden"
            animate="visible"
        >
            <h1 className="skillsHeader">Skills</h1>
            <Skills />
            <motion.div className="aboutContent">
                <motion.div className="aboutText">
                    <h1>About Me</h1>
                    <p>
                        I am a full stack web developer with a passion for
                        learning anr problem solving. I have a background in web
                        development and have worked with many different
                        frameworks and languages. I am also interested in Cyber
                        Security and Artificial Intellegence. Currently, I am
                        helping develop a social media application centered
                        around events.
                    </p>
                    <hr />
                    <h1>Hobbies</h1>
                    <ul>
                        <li>Skiing</li>
                        <li>Hiking</li>
                        <li>Jiu Jitsu</li>
                        <li>Cyber Security</li>
                        <li>Artificial Intelligence</li>
                        <li>Web Development and Game Development</li>
                    </ul>
                    <hr />
                    <h1>Relevant Courses</h1>
                    <ul>
                        <li>Data Structures</li>
                        <li>Software Engineering</li>
                        <li>Cyber Security</li>
                        <li>Algorithms</li>
                        <li>C++</li>
                        <li>Object Oriented Programming (Java)</li>
                        <li>Python</li>
                    </ul>
                    <hr />
                    <h1>Clubs and Activities</h1>
                    <ul>
                        <li>
                            <a
                                href="https://csulbsnowteam.weebly.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CSULB Snow
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://csulb.acm.org/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CSULB Assosciation of Computing Machinery
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/csulbjiujitsu/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CSULB Jiu Jitsu
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <h1>Professional Experience</h1>
                    <ul>
                        <li>
                            Web Developer at{' '}
                            <a
                                href="https://www.asicsulb.org/corporate/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CSULB ASI
                            </a>
                        </li>
                        <li>
                            Software Engineer and Security Analyst at{' '}
                            <a
                                href="https://joindown.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Down Friend Groups
                            </a>
                        </li>
                        <li>
                            Top Emerging Talent at{' '}
                            <a
                                href="https://www.about.pangea.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Pangea.app
                            </a>
                        </li>
                    </ul>
                </motion.div>
                <motion.div className="aboutImages">
                    <motion.img
                        className="aboutImg"
                        src={stephen}
                        variants={imgVariants}
                        whileHover="hover"
                        whileTap="tap"
                        transition={{ duration: 0.1 }}
                        drag
                        dragConstraints={{
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10,
                        }}
                    />
                    <motion.img
                        className="aboutImg"
                        src={stephen2}
                        variants={imgVariants}
                        whileHover="hover"
                        whileTap="tap"
                        transition={{ duration: 0.2 }}
                        drag
                        dragConstraints={{
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10,
                        }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const imgVariants = {
    hover: {
        scale: 1.1,
    },
    tap: {
        scale: 1,
    },
};
const aboutContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        y: '0vh',
        transition: { duration: 1 },
    },
    exit: { x: '100vw', transition: { ease: 'easeInOut' } },
};

export default About;
