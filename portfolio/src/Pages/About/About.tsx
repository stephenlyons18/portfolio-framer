import React from 'react';
import stephen from '../../assets/images/grad-photo.jpg';
import { motion } from 'framer-motion';
import { Skills } from '../../components/Skills/Skills';
const About = () => {
    return (
        <motion.div>
            {/* <motion.img src={stephen} whileHover={{ scale: '2' }}></motion.img> */}
            <motion.div className="#skills">
                <Skills />
            </motion.div>
        </motion.div>
    );
};

export default About;
