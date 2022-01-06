import React from 'react';
import { motion } from 'framer-motion';
import './ContactOverlay.css';

type NavProps = {
    open: string;
};
const ContactOverlay: React.FC<NavProps> = (props) => {
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
            className="OverlayContainer"
            animate={props.open}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores veniam eos similique unde quibusdam hic omnis fugit
                inventore modi tempora, neque maxime distinctio ipsam, et
                possimus, placeat explicabo doloremque debitis.
            </p>
        </motion.div>
    );
};

export default ContactOverlay;
