import React, { useState } from 'react';
import { motion, AnimateSharedLayout, Reorder } from 'framer-motion';
import { ProjectItems } from './ProjectItems';
import './ProjectStyles.scss';
import { Hidden } from '@mui/material';

function Projects() {
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
            <Reorder.Group axis="y" values={items} onReorder={setItems}>
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
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    borderRadius: '20px',
                                }}
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
                                <div>
                                    <p>{item.description}</p>
                                    <ul>
                                        {item.techStack.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ul>
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
        width: '100%',
        margin: '20%',
        padding: '10%',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
    show: {
        scale: 1.3,
        padding: '30%',
        margin: '20%',
        backgroundColor: '#86bbd8',
    },
};
const ImageVariants = {
    hidden: {
        opacity: 0.7,
        width: '100%',
        transition: {
            duration: 0.5,
        },
    },
    show: {
        opacity: 1,
        width: '100%',
        transition: {
            duration: 0.5,
        },
    },
};
export default Projects;
