import { motion } from 'framer-motion';
import WelcomeNameform from '../../components/WelcomeNameform/WelcomeNameform';
import Card from '@mui/material/Card';
import IntroCard from '../../components/IntroCard/IntroCard';
import './HomeStyles.scss';
import Typewriter from 'typewriter-effect';
import { AnimateSharedLayout } from 'framer-motion';
import IntroCards from '../../components/IntroCard/IntroCards';

// Learn more: https://www.framer.com/docs/guides/code-components/

export default function Home() {
    return (
        <motion.div className="containerStyle">
            <motion.div
                variants={introText}
                initial="hidden"
                transition={{
                    staggerChildren: 1,
                }}
                animate="show"
            >
                <motion.div className="welcomeText">
                    <Typewriter
                        options={{
                            strings: [
                                'Hello',
                                'My Name is Stephen',
                                'I am a Student and Web Developer at CSULB',
                            ],
                            autoStart: true,
                            cursor: 'l',
                            loop: true,
                        }}
                    />
                </motion.div>
                {/* <Card>Hello World</Card> */}
            </motion.div>
            {/* <AnimateSharedLayout> */}
            <motion.div className="introCards"></motion.div>
            <IntroCards />
            {/* </AnimateSharedLayout> */}
        </motion.div>
    );
}

Home.defaultProps = {
    text: 'Tap',
};

const introText = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const squareStyle = {
    margin: 50,
    padding: 50,
    color: 'white',
    fontWeight: 600,
    borderRadius: 25,
    backgroundColor: '#09F',
    width: 'max-content',
    whiteSpace: 'pre-wrap',
    flexShrink: 0,
};
