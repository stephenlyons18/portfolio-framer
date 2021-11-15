import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion, AnimateSharedLayout } from 'framer-motion';

import './ProjectStyles.scss';

import { items } from './items';

const Projects = () => {
    return (
        <motion.div
            className="containerStyleAbout"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div className="projectsContainer" layout>
                <AnimateSharedLayout>
                    {items.map((item) => {
                        return (
                            <motion.div
                                className="projectContainer"
                                key={item.projectID}
                            >
                                <ProjectCard
                                    imgPath={item.imgSrc}
                                    projectTitle={item.projectTitle}
                                    projectText={item.description}
                                    projectUrl={item.url}
                                    techStack={item.techStack}
                                />
                            </motion.div>
                        );
                    })}
                    {/* <AnimatePresence>
                        {selectedId && <motion.img layoutId={selectedId} />}
                    </AnimatePresence> */}
                </AnimateSharedLayout>
            </motion.div>
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
    exit: { y: '100vh', transition: { ease: 'easeInOut' } },
};

export default Projects;
