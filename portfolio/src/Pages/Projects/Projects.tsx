import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion } from 'framer-motion';
import image1 from '../../assets/images/grad-photo.jpg';

const Projects = () => {
    return (
        <motion.div>
            <ProjectCard imgPath={image1}>
                <p>Hello world</p>
            </ProjectCard>
        </motion.div>
    );
};

export default Projects;
