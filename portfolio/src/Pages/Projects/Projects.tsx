import React, { useState } from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion, LayoutGroup } from 'framer-motion';
import image1 from '../../assets/images/grad-photo.jpg';
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
            <motion.div className="projectsContainer">
                <LayoutGroup>
                    {items.map((item) => {
                        return (
                            <motion.div layout>
                                <ProjectCard
                                    imgPath={item.imgSrc}
                                    projectTitle={item.projectTitle}
                                    projectText={item.description}
                                    key={item.projectID}
                                    projectUrl={item.url}
                                />
                            </motion.div>
                        );
                    })}
                    {/* <AnimatePresence>
                        {selectedId && <motion.img layoutId={selectedId} />}
                    </AnimatePresence> */}
                </LayoutGroup>
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
