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
            variants={projectCardVarients}
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

const projectCardVarients = {
    tap: {
        opacity: 1,
        scale: 1.15,
        innerWidth: '100%',
    },
    noTap: {
        opacity: 0.9,
    },
};

export default IntroCard;
