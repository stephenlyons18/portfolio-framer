import React from 'react';
import introPicture from '../../assets/images/grad-photo.jpg';
import { motion } from 'framer-motion';
import './IntroCard.css';
const IntroCard = () => {
    return (
        <motion.div className="introContainer">
            <img src={introPicture} alt="" className="introImg" />
            <p>Hi! My name is Stephen Lyons.</p>
            <p>I am a Web Developer and Student at CSULB</p>
        </motion.div>
    );
};

export default IntroCard;
