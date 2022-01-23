import React from 'react';
import stephen from '../../assets/images/grad-photo.jpg';
import stephen2 from '../../assets/images/snow-picture.jpg';
import { motion } from 'framer-motion';
import { Skills } from '../../components/Skills/Skills';
import './AboutStyles.css';
const About = () => {
    return (
        <motion.div
            className="aboutContainer"
            variants={aboutContainerVariants}
            exit="exit"
            initial="hidden"
            animate="visible"
        >
            
            <Skills />
            <motion.div className="aboutContent">
                <motion.div className="aboutText">
                    <h1 className="text-2xl font-bold pb-3 pt-3 sm:text-5xl">
                        About Me
                    </h1>
                    <p>
                        I am a full stack web developer with a passion for
                        learning and problem solving. I have a background in web
                        development and have worked with many different
                        frameworks and languages. I am also interested in Cyber
                        Security and Artificial Intellegence. Currently, I am
                        helping develop a social media application centered
                        around events and hangouts.
                    </p>
                    <hr />
                    <h1 className="text-2xl font-bold pb-3 pt-3 sm:text-5xl">
                        Hobbies
                    </h1>
                    <ul>
                        <li>Skiing</li>
                        <li>Hiking</li>
                        <li>Jiu Jitsu</li>
                        <li>Cyber Security</li>
                        <li>Artificial Intelligence</li>
                        <li>Web Development and Game Development</li>
                    </ul>
                    <hr />
                    <h1 className="text-2xl font-bold pb-3 pt-3 sm:text-5xl">
                        Relevant Courses
                    </h1>
                    <ul>
                        <li>Cyber Security</li>
                        <li>Algorithms</li>
                        <li>BlockChain Technologies (UC Berkeley)</li>
                        <li>Data Structures</li>
                        <li>C++</li>
                        <li>Object Oriented Programming (Java)</li>
                        <li>Python</li>
                        <li>Software Engineering</li>
                    </ul>
                    <hr />
                    <h1 className="text-2xl font-bold pb-3 pt-3 sm:text-5xl">
                        Clubs and Activities
                    </h1>
                    <ul>
                        <li>
                            <a
                                href="https://csulbsnowteam.weebly.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
                            >
                                CSULB Snow
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://csulb.acm.org/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
                            >
                                CSULB Assosciation of Computing Machinery
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/csulbjiujitsu/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
                            >
                                CSULB Jiu Jitsu
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <h1 className="text-2xl font-bold pb-3 pt-3 sm:text-5xl">
                        Professional Experience
                    </h1>
                    <ul>
                        <li>
                            Web Developer at{' '}
                            <a
                                href="https://www.asicsulb.org/corporate/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
                            >
                                CSULB ASI
                            </a>
                        </li>
                        <li>
                            Software Security Engineer at{' '}
                            <a
                                href="https://joindown.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
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
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
                            >
                                Pangea.app
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <h1 className="text-2xl font-bold pb-3 pt-3 sm:text-5xl">
                        Education
                    </h1>
                    <ul>
                        <li>
                            <a
                                href="https://www.csulb.edu/"
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
                            >
                                CSULB
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.bohs.bousd.us"
                                target="_blank"
                                rel="noreferrer"
                                className="p-1 hover:text-slate-900 hover:bg-slate-100 ease-in-out duration-500"
                            >
                                Brea Olinda High School
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
        cursor: 'grab',
    },
    tap: {
        scale: 1,
        cursor: 'grabbing',
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
const linkVariants = {
    hover: {
        scale: 1.1,
        cursor: 'grab',
        backroundColor: 'bg-neutral-300',
    },
    tap: {
        scale: 1,
        cursor: 'grabbing',
    },
};

export default About;
