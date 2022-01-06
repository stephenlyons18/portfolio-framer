import React from 'react';
import introPicture from '../../assets/images/grad-photo.jpg';
import { motion } from 'framer-motion';
import './IntroCard.scss';
interface props {
    height: number;
}

const IntroCard: React.FC<props> = (props) => {
    return (
        <motion.div
            className="introContainer"
            style={{ height: props.height }}
            variants={introCardVariants}
            initial="noTap"
            whileTap="tap"
            drag
            // dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
            // dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        >
            <img src={introPicture} alt="" className="introImg" />
            <p>Hi! My name is Stephen Lyons.</p>
            <p>I am a Web Developer and Student at CSULB</p>
        </motion.div>
    );
};

const introCardVariants = {
    tap: {
        opacity: 1,
        scale: 1.15,
    },
    noTap: {
        opacity: 0.9,
    },
};

export default IntroCard;
