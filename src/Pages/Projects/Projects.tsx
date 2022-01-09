import React, { useState } from 'react';
import { motion, AnimateSharedLayout, Reorder } from 'framer-motion';
import { ProjectItems } from './ProjectItems';
import './ProjectStyles.scss';

function Projects(props) {
    const [items, setItems] = useState(ProjectItems);
    const [openItem, setOpenItem] = useState(null);

    function checkSelectedAndChange(item) {
        if (openItem === item) {
            setOpenItem(null);
        } else {
            setOpenItem(item);
        }
    }

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={{
                initial: {
                    opacity: 0,
                    transition: {
                        duration: 0.5,
                    },
                },
                in: {
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                    },
                },
                out: {
                    opacity: 0,
                    transition: {
                        duration: 0.5,
                    },
                },
            }}
            style={{
                width: '100vw',
                height: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Reorder.Group
                axis="y"
                values={items}
                onReorder={setItems}
                className="ulStyle"
            >
                {items.map((item) => (
                    <Reorder.Item key={item.projectID} value={item}>
                        <motion.div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            variants={ProjectCardVariants}
                            onClick={() =>
                                checkSelectedAndChange(item.projectID)
                            }
                            animate={
                                openItem === item.projectID ? 'show' : 'hidden'
                            }
                            initial="hidden"
                        >
                            <motion.img
                                src={item.imgSrc}
                                alt={item.projectTitle}
                                whileHover={
                                    openItem === item.projectID
                                        ? { scale: 1.3 }
                                        : {}
                                }
                                animate={
                                    openItem === item.projectID
                                        ? 'show'
                                        : 'hidden'
                                }
                                initial="hidden"
                                variants={ImageVariants}
                            />
                            <h1>{item.projectTitle}</h1>
                            {openItem === item.projectID && (
                                <div className="project-text">
                                    <h2>Description</h2>
                                    <motion.p
                                    // variants={projectTextVariants}
                                    // initial="closed"
                                    // animate={
                                    //     openItem === item.projectID
                                    //         ? 'open'
                                    //         : 'closed'
                                    // }
                                    >
                                        {item.description}
                                    </motion.p>
                                    <h2>Technologies</h2>
                                    <motion.ul
                                        variants={motionULVariants}
                                        initial="closed"
                                        animate={
                                            openItem === item.projectID
                                                ? 'open'
                                                : 'closed'
                                        }
                                    >
                                        {item.techStack.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </motion.ul>
                                </div>
                            )}
                        </motion.div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </motion.div>
    );
}

const ProjectCardVariants = {
    hidden: {
        backgroundColor: '#33658a',
        height: 'auto',
        borderRadius: '20px',
        width: '80%',
        marginTop: '20px',
        marginBottom: '20px',
        padding: '20px',

        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
    show: {
        scale: 1.1,
        marginBottom: '200px',
        marginTop: '200px',
        backgroundColor: '#86bbd8',
        padding: '20px',
    },
};
const motionULVariants = {
    closed: {
        x: '-100vw',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            staggerChildren: 0.2,
        },
    },
    open: {
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            staggerChildren: 0.2,
        },
    },
};
const ImageVariants = {
    hidden: {
        opacity: 0.7,
        width: '400px',
        borderRadius: '20px',
        transition: {
            duration: 0.5,
        },
    },
    show: {
        opacity: 1,
        borderRadius: '20px',

        transition: {
            duration: 0.5,
        },
    },
};
export default Projects;
