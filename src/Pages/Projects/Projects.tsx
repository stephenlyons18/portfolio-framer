import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectItems } from './ProjectItems';

function Projects(props) {
    const items = ProjectItems;
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
            className="flex flex-row items-center justify-center w-full h-full"
        >
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    <img
                        className="h-12 w-12"
                        src="/img/logo.svg"
                        alt="ChitChat Logo"
                    />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">
                        ChitChat
                    </div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>
            <motion.div className="grid grid-flow-col auto-cols-max">
                {items.map((item) => (
                    <motion.div
                        className="flex flex-col items-center justify-center items-center p-1 gap-1"
                        variants={ProjectCardVariants}
                        onClick={() => checkSelectedAndChange(item.projectID)}
                        animate={
                            openItem === item.projectID ? 'show' : 'hidden'
                        }
                        initial="hidden"
                        key={item.projectID}
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
                                openItem === item.projectID ? 'show' : 'hidden'
                            }
                            initial="hidden"
                            variants={ImageVariants}
                        />
                        <h1>{item.projectTitle}</h1>
                        {openItem === item.projectID && (
                            <div className="text-base">
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
                ))}
            </motion.div>
        </motion.div>
    );
}

const ProjectCardVariants = {
    hidden: {
        backgroundColor: '#33658a',
        borderRadius: '20px',
        width: '30%',
        height: '200px',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
    show: {
        width: '80%',
        height: 'auto',
        marginBottom: '200px',
        marginTop: '200px',
        backgroundColor: '#86bbd8',
        borderRadius: '20px',
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
