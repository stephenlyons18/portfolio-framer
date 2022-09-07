import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

interface Props {
    imgPath: string;
    altText?: string;
    projectText: string;
    projectTitle: string;
    projectUrl: string;
    techStack: string[];
}

const ProjectCard: React.FC<Props> = ({
    imgPath,
    altText,
    projectText,
    projectTitle,
    projectUrl,
    techStack,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    // const myImage: File = require(imgPath);

    return (
        <motion.div
            //change the className when the card is closed
            className={`project-card-${isOpen ? 'open' : 'closed'}`}
            onClick={() => setIsOpen(!isOpen)}
            variants={projectCardVariants}
            animate={isOpen ? 'open' : 'closed'}
            initial="closed"
            whileHover="hover"
        >
            <motion.a href={projectUrl} target="_blank" rel="noreferrer">
                <motion.img
                    src={imgPath}
                    alt={altText}
                    className="projectImage"
                    variants={projectImgVariants}
                    whileHover="hover"
                />
            </motion.a>
            <motion.h1>{projectTitle}</motion.h1>
            {isOpen ? (
                <motion.div className="project-text">
                    <motion.h2>Description</motion.h2>
                    <motion.p
                        variants={projectTextVariants}
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                    >
                        {projectText}
                    </motion.p>
                    <motion.h2>Technologies</motion.h2>
                    <motion.ul
                        variants={projectTextVariants}
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                    >
                        {techStack.map((tech) => (
                            <motion.li key={tech}>{tech}</motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            ) : null}
        </motion.div>
    );
};

const projectCardVariants = {
    open: {
        opacity: 1,
        width: '80%',
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    closed: {
        opacity: 0.6,
        width: '50%',
        height: '30%',
        backgroundColor: '#27475e',

        borderRadius: '15px',
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hover: {
        opacity: 1,
        transition: { duration: 0.2, ease: 'easeInOut' },
        boxShadow: '0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0)',
    },
};
const projectImgVariants = {
    open: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    closed: {
        opacity: 0.6,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hover: {
        opacity: 1,
        scale: 1.1,
        transition: { duration: 0.4, ease: 'easeInOut' },
    },
};
const projectTextVariants = {
    open: {
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
    closed: {
        opacity: 0,
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
};
export default ProjectCard;
