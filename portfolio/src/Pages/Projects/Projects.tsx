import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { motion, AnimateSharedLayout } from 'framer-motion';
import image1 from '../../assets/images/grad-photo.jpg';
import './ProjectStyles.scss';

const Projects = () => {
    return (
        <motion.div
            className="containerStyleAbout"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                className="projectsImageContainer"
                whileHover={{ scale: 1.4 }}
            >
                <motion.img src={image1}></motion.img>
            </motion.div>
            <motion.div className="projectsContainer">
                <AnimateSharedLayout type="crossfade">
                    <ProjectCard
                        imgPath={image1}
                        projectTitle="Hello World"
                        projectText={lorem}
                    >
                        <p>Hello world</p>
                    </ProjectCard>
                    <ProjectCard
                        imgPath={image1}
                        projectTitle="Hello World"
                        projectText={lorem}
                    >
                        <p>Hello world</p>
                    </ProjectCard>
                    <ProjectCard
                        imgPath={image1}
                        projectTitle="Hello World"
                        projectText={lorem}
                    >
                        <p>Hello world</p>
                    </ProjectCard>
                    <ProjectCard
                        imgPath={image1}
                        projectTitle="Hello World"
                        projectText={lorem}
                    >
                        <p>Hello world</p>
                    </ProjectCard>
                    <ProjectCard
                        imgPath={image1}
                        projectTitle="Hello World"
                        projectText={lorem}
                    >
                        <p>Hello world</p>
                    </ProjectCard>
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
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
};

export default Projects;

const lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus adipisci explicabo ratione soluta eveniet eos nostrum harum, dolores reprehenderit earum, optio voluptatibus repellendus dignissimos assumenda, incidunt expedita maiores rem ducimus.';
