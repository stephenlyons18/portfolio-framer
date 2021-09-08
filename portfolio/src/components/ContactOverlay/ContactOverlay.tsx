import React from 'react';
import { motion } from 'framer-motion';
import './ContactOverlay.css';

const ContactOverlay = () => {
    const OverLayVariants = {
        open: {
            x: 0,
            opacity: 1,
        },
        closed: {
            x: -100,
            opacity: 0,
        },
    };
    return (
        <motion.div
            variants={OverLayVariants}
            transition={{ ease: 'easeInOut', duration: 1 }}
        ></motion.div>
    );
};

export default ContactOverlay;
