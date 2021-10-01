import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
import image1 from '../../assets/images/grad-photo.jpg';
import './ProjectStyles.css';

const Projects = () => {
    return (
        <motion.div
            className="containerStyleAbout"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ProjectCard imgPath={image1}>
                <p>Hello world</p>
            </ProjectCard>
        </motion.div>
    );
};

const containerVariants = {
    hidden: { opacity: 0, x: '100vw' },
    visible: {
        opacity: 1,
        x: '0vw',
        transition: { duration: 1 },
    },
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
};

export default Projects;
