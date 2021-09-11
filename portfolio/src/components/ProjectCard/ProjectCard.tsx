import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectCard.css';

interface Props {
    children: JSX.Element[] | JSX.Element;
    imgPath: string;
    altText?: string;
}

const ProjectCard: React.FC<Props> = ({ children, imgPath }) => {
    return (
        <motion.div>
            <img src={imgPath} alt="" className="projectImage" />
            {children}
        </motion.div>
    );
};

export default ProjectCard;
