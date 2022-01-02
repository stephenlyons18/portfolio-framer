import { useState } from 'react';
import { motion, AnimateSharedLayout, Reorder } from 'framer-motion';
import { ProjectItems } from './ProjectItems';
import './ProjectStyles.scss';

function Projects() {
    const [items, setItems] = useState(ProjectItems);
    const [openItem, setOpenItem] = useState(null);

    return (
        <Reorder.Group axis="x" values={items} onReorder={setItems}>
            {items.map((item) => (
                <Reorder.Item key={item.projectID} value={item}>
                    <motion.div
                        style={{
                            height: '200px',
                            width: '200px',
                            background: '#fff',
                            borderRadius: '10px',
                            x: 0,
                            y: 0,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            transition: {
                                type: 'spring',
                                stiffness: 100,
                                damping: 15,
                            },
                        }}
                        initial={{ x: -100, y: -100 }}
                        exit={{ x: -100, y: -100 }}
                    ></motion.div>
                </Reorder.Item>
            ))}
        </Reorder.Group>
    );
}
const ProjectCardVariants = {
    hidden: {
        opacity: 0,
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
    show: {
        opacity: 1,
        x: '50vw',
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
        },
    },
};

export default Projects;
