import React from 'react';
import { motion } from 'framer-motion';
import { CaretRight } from 'phosphor-react';
import '../../styles/styles.css';

const variants = {
    typed: { opacity: 1 },
    notTyped: { opacity: 0.1 },
};
const caretVariants = {
    on: { opacity: 1 },
    off: { opacity: 0 },
};
const inputStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    height: '30vh',
    width: '30vw',
    fontSize: '80px',
};
const flexContainer = {
    display: 'flex',
    alignItems: 'center',
};
const containerStyle = {
    // display: 'flex',
    // alignItems: 'center',
};

class WelcomeNameform extends React.Component<
    {},
    {
        // no props
        text: string;
        typed: boolean;
    }
> {
    state = {
        text: 'Type your name here',
        typed: false,
    };

    // typing on RIGHT hand side of =
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ text: e.currentTarget.value });
        this.setState({ typed: true });
    };
    render() {
        return (
            <motion.div
                variants={variants}
                initial="notTyped"
                animate="typed"
                style={containerStyle}
            >
                <h1>Type your name here</h1>
                <br />
                <div style={flexContainer}>
                    <motion.div
                        variants={caretVariants}
                        initial="on"
                        animate="off"
                    >
                        <CaretRight size={48} />
                    </motion.div>

                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        style={inputStyle}
                    />
                </div>
            </motion.div>
        );
    }
}

export default WelcomeNameform;
