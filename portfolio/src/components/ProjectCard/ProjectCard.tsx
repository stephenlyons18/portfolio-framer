import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.scss';

interface Props {
    imgPath: string;
    altText?: string;
    projectText: string;
    projectTitle: string;
    projectUrl: string;
}

const ProjectCard: React.FC<Props> = ({
    imgPath,
    altText,
    projectText,
    projectTitle,
    projectUrl,
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
            <a href={projectUrl}>
                <motion.img
                    src={imgPath}
                    alt={altText}
                    className="projectImage"
                    variants={projectImgVariants}
                    whileHover="hover"
                />
            </a>

            <h3>{projectTitle}</h3>

            {isOpen ? (
                <motion.p
                    variants={projectTextVariants}
                    initial="closed"
                    animate={isOpen ? 'open' : 'closed'}
                >
                    {projectText}
                </motion.p>
            ) : null}
        </motion.div>
    );
};

const projectCardVariants = {
    open: {
        opacity: 1,
        width: '80%',
        transition: { duration: 0.5, ease: 'easeOut' },
    },
    closed: {
        opacity: 0.6,
        width: '50%',
        height: 'auto',
        backgroundColor: '#27475e',
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingBottom: '8%',
        borderRadius: '15px',

        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hover: {
        opacity: 1,
        transition: { duration: 0.4, ease: 'easeInOut' },
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
