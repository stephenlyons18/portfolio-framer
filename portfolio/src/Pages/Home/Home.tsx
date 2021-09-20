import { motion } from 'framer-motion';
import WelcomeNameform from '../../components/WelcomeNameform/WelcomeNameform';
import Card from '@mui/material/Card';
import IntroCard from '../../components/IntroCard/IntroCard';
import './HomeStyles.scss';
import TypewriterComponent from 'typewriter-effect';

// Learn more: https://www.framer.com/docs/guides/code-components/
let pause: number = 1500;
export default function Home() {
    return (
        <motion.div style={containerStyle}>
            <motion.div
                variants={introText}
                initial="hidden"
                transition={{
                    staggerChildren: 1,
                }}
                animate="show"
            >
                <TypewriterComponent
                    options={{
                        strings: ['Hello\nworld', 'World'],
                        autoStart: true,
                        loop: true,
                        pauseFor: '1500',
                    }}
                />
                <IntroCard />
                <Card>Hello World</Card>
            </motion.div>
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

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    background:
        'linear-gradient(to right, #A5FECB, #20BDFF, #5433FF)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
    height: '100vh',
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
