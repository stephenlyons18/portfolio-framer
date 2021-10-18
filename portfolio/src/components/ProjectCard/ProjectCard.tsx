import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.scss';
import TestImage from '../../assets/images/grad-photo.jpg';

interface Props {
    imgPath: string;
    altText?: string;
    projectText: string;
    projectTitle: string;
}

const ProjectCard: React.FC<Props> = ({
    imgPath,
    altText,
    projectText,
    projectTitle,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    // const myImage: File = require(imgPath);
    return (
        <motion.div
            className="projectContainerStyle"
            variants={projectCardVariants}
            animate={isOpen ? 'open' : 'closed'}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            drag
            whileHover="hover"
            dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        >
            <motion.img src={imgPath} alt={altText} className="projectImage" />

            <h3>{projectTitle}</h3>

            {isOpen ? <motion.p>{projectText}</motion.p> : null}
        </motion.div>
    );
};

const projectCardVariants = {
    open: {
        opacity: 1,
        width: '85vw',
        height: '100%',
        top: '0px',

        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    closed: {
        opacity: 0.6,
        width: '15%',
        height: '10%',

        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hover: {
        opacity: 1,
        transition: { duration: 0.2, ease: 'easeInOut' },
    },
};
export default ProjectCard;
