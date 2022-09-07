import React, { useState } from 'react';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { ProjectItems } from './ProjectItems';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
interface ProjectItemsProps {
    isMobile: boolean;
}

const Projects: React.FC<ProjectItemsProps> = ({ isMobile }) => {
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
            className="flex flex-col items-center justify-center py-10 containerStyleProjects"
        >
            {/* <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
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
            </div> */}
            <motion.div
                className="flex flex-wrap sm:grid-cols-3 items-center justify-center gap-12"
                layout={'position'}
                transition={{ layout: { duration: 0.8 } }}
            >
                <LayoutGroup>
                    {items.map((item) => (
                        <motion.div
                            className="flex flex-col items-center justify-center items-center p-10 gap-1 text-center"
                            variants={
                                isMobile
                                    ? mobileProjectCardVariants // if mobile, use mobileProjectCardVariants
                                    : ProjectCardVariants // if not, use projectCardVariants
                            }
                            onClick={() =>
                                checkSelectedAndChange(item.projectID)
                            }
                            animate={
                                openItem === item.projectID ? 'show' : 'hidden'
                            }
                            initial="hidden"
                            // only animate hover if the card is not open
                            whileHover={openItem === 'null' ? '' : 'hover'}
                            key={item.projectID}
                            layout
                        >
                            <motion.img
                                src={item.imgSrc}
                                alt={item.projectTitle}
                                animate={
                                    openItem === item.projectID
                                        ? 'show'
                                        : 'hidden'
                                }
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                }}
                                initial="hidden"
                                variants={ImageVariants}
                                style={{
                                    // link cursor style
                                    cursor: 'pointer',
                                }}
                            />
                            <motion.h1 className="font-bold text-3xl">
                                {item.projectTitle}
                            </motion.h1>
                            <IconButton
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    // link cursor style
                                    cursor: 'pointer',
                                }}
                            >
                                <GitHubIcon />
                            </IconButton>

                            {openItem === item.projectID && (
                                <motion.div className="text-base">
                                    <motion.h2>Description</motion.h2>
                                    <motion.p
                                        variants={projectTextVariants}
                                        initial="closed"
                                        animate={
                                            openItem === item.projectID
                                                ? 'open'
                                                : 'closed'
                                        }
                                    >
                                        {item.description}
                                    </motion.p>
                                    <motion.div className="bg-slate-">
                                        <motion.h2 className="underline py-2 text-2xl">
                                            Technologies
                                        </motion.h2>
                                        <motion.ul
                                            variants={motionULVariants}
                                            initial="closed"
                                            animate={
                                                openItem === item.projectID
                                                    ? 'open'
                                                    : 'closed'
                                            }
                                            style={{
                                                listStyleType: 'bullet',
                                            }}
                                            className="text-left pl-4"
                                        >
                                            {item.techStack.map((tech) => (
                                                <motion.li key={tech}>
                                                    {tech}
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                    </motion.div>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </LayoutGroup>
            </motion.div>
        </motion.div>
    );
};

const ProjectCardVariants = {
    hidden: {
        backgroundColor: '#2F4858',
        borderRadius: '20px',
        width: '30%',
        height: 'auto',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
    show: {
        width: '80%',
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#33658A',
        borderRadius: '20px',
        zIndex: 5,
    },
    hover: {
        scale: 1.1,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

const mobileProjectCardVariants = {
    hidden: {
        backgroundColor: '#2F4858',
        borderRadius: '20px',
        width: '70%',
        height: 'auto',
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
        width: '100%',
    },
};
const projectTextVariants = {
    closed: {
        opacity: 0,
    },
    open: {
        opacity: 1,
    },
};
export default Projects;
