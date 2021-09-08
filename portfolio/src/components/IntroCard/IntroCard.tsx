import React from 'react';
import introPicture from '../../assets/images/grad-photo.jpg';
import { motion } from 'framer-motion';
import './IntroCard.css';
const IntroCard = () => {
    return (
        <motion.div className="introContainer">
            <img src={introPicture} alt="" className="introImg" />
        </motion.div>
    );
};

export default IntroCard;
