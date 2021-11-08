import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import './WelcomeText.scss';
const WelcomeText = () => {
    return (
        <div className="welcomeTextContainer">
            <motion.div
                variants={introText}
                initial="hidden"
                transition={{
                    staggerChildren: 1,
                }}
                animate="show"
            >
                <motion.div className="welcomeText">
                    <motion.div className="helloText">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500)
                                    .start()
                                    .typeString('hello! my name is stephen');
                            }}
                        />
                    </motion.div>

                    <motion.div
                        className="iAmClass"
                        initial={{ x: '-100vw' }}
                        animate={{ x: '0vw' }}
                        transition={{ ease: 'easeInOut', delay: 4.5 }}
                    >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(4500)
                                    .typeString('i am a student()')
                                    .pauseFor(1000)
                                    .deleteChars(9)
                                    .typeString('web developer </>')
                                    .pauseFor(1000)
                                    .deleteChars(17)
                                    .typeString('freelancer :)')
                                    .pauseFor(1000)
                                    .deleteChars(20)
                                    .start();
                            }}
                            options={{ loop: true }}
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};
const introText = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export default WelcomeText;
