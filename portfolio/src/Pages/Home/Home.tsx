import { motion } from 'framer-motion';

import IntroCard from '../../components/IntroCard/IntroCard';
import './HomeStyles.scss';
import WelcomeText from '../../components/WelcomeText/WelcomeText';
import OpenAIPlayground from '../../components/TextPredict/OpenAIPlayground';
import WelcomePitcure from '../../assets/images/grad-photo.jpg';
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
            <div className="welcomeContainer">
                <WelcomeText />

                <img
                    src={WelcomePitcure}
                    className="welcomePicture"
                    alt="welcome"
                />
            </div>
            <OpenAIPlayground />

            {/*  */}

            <motion.div className="introCards" drag>
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
            </motion.div>
        </motion.div>
    );
}

Home.defaultProps = {
    text: 'Tap',
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
