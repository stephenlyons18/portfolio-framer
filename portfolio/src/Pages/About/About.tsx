import React from 'react';
import stephen from '../../assets/images/grad-photo.jpg';
import { motion } from 'framer-motion';
import { Skills } from '../../components/Skills/Skills';
import './AboutStyles.scss';
const About = () => {
    return (
        <motion.div className="aboutContainer">
            <Skills />
            <motion.img
                className="skillsImg"
                src={stephen}
                whileHover={{ scale: '1.1' }}
                transition={{ duration: 0.5 }}
            ></motion.img>
        </motion.div>
    );
};

export default About;
