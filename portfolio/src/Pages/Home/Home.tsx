import { motion } from 'framer-motion';

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
            {/* create a button similar to the nav buttons that downloads my resume*/}
            <motion.div
                variants={reusmeVariants}
                whileHover="hover"
                whileTap="tap"
                className="resumeButtonWrapper"
            >
                <a
                    href={require('../../assets/files/stephen-lyons-resume.pdf')}
                    download="stephen-lyons-resume"
                >
                    <button className="resumeButton">Download Resume</button>
                </a>
            </motion.div>
            {/* Create a div about the college, load the CSULB logo from assets and display in a flex container with row format */}
            <div className="csulbContainer">
                <div className="csulbText">
                    <h1 className="csulbHeader">I currently attend CSULB</h1>
                    <p>
                        {' '}
                        My major is Computer Science and I am a Junior at
                        California State University, Long Beach.
                    </p>
                    <p> I am interested in the following fields:</p>
                    <ul>
                        <li>
                            {' '}
                            Data Science, Machine Learning, and Artificial
                            Intelligence
                        </li>
                        <li> Web Development, and Software Engineering</li>
                        <li> Cyber Security, and Computer Networking</li>
                    </ul>
                </div>
                <div className="logoWrapper">
                    <img
                        className="csulbLogo"
                        src={require('../../assets/images/csulb-logo.png')}
                        alt="csulb-logo"
                    />
                </div>
            </div>

            <OpenAIPlayground />

            {/* <motion.div className="introCards" drag>
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
                <IntroCard height={randomHeight()} />
            </motion.div> */}
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
const reusmeVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9, rotate: '15deg' },
};
