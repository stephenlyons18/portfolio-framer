import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.scss';
import TestImage from '../../assets/images/grad-photo.jpg';

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
            className={`project-card ${isOpen ? 'open' : ''}`}
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
                    whileHover={{ scale: 1.1 }}
                />
            </a>

            <h3>{projectTitle}</h3>

            {isOpen ? <motion.p>{projectText}</motion.p> : null}
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
        width: '10%',
        height: 'auto',
        backgroundColor: '#27475e',
        padding: '5%',
        margin: '5%',
        borderRadius: '15px',

        transition: { duration: 0.5, ease: 'easeInOut' },
    },
    hover: {
        opacity: 1,
        transition: { duration: 0.2, ease: 'easeInOut' },
    },
};
export default ProjectCard;
