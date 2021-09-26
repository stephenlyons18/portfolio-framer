import { motion, AnimatePresence } from 'framer-motion';
import WelcomeNameform from '../../components/WelcomeNameform/WelcomeNameform';
import Card from '@mui/material/Card';
import IntroCard from '../../components/IntroCard/IntroCard';
import './HomeStyles.scss';
import Typewriter from 'typewriter-effect';
import { AnimateSharedLayout } from 'framer-motion';
// import IntroCards from '../../components/IntroCard/IntroCards';

// Learn more: https://www.framer.com/docs/guides/code-components/
function randomHeight() {
    return Number(Math.random() * (500 - 300 + 1) + 300);
}
export default function Home() {
    return (
        <motion.div
            className="containerStyle"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div
                variants={introText}
                initial="hidden"
                transition={{
                    staggerChildren: 1,
                }}
                animate="show"
            >
                <motion.div className="welcomeText">
                    <div className="helloText">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Hello! My name is Stephen')
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                        />
                    </div>
                    <div className="iAmClass">
                        <p style={{ paddingRight: '2vw' }}>I am a </p>
                        <Typewriter
                            options={{
                                strings: [
                                    '  Student',
                                    '  Web Developer',
                                    '  Freelancer',
                                ],
                                autoStart: true,
                                cursor: 'l',
                                loop: true,
                            }}
                        />
                    </div>
                </motion.div>
                {/* <Card>Hello World</Card> */}
            </motion.div>
            {/* <AnimateSharedLayout> */}
            <motion.div className="introCards">
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
            </motion.div>
            {/* <IntroCards /> */}
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
const containerVariants = {
    hidden: { opacity: 0, y: '100vh' },
    visible: {
        opacity: 1,
        y: '0vh',
        transition: { duration: 1 },
    },
    exit: { x: '-100vw', transition: { ease: 'easeInOut' } },
};
