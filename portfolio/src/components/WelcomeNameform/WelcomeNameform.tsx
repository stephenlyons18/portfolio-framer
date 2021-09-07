import React from 'react';
import { motion } from 'framer-motion';
import { CaretRight } from 'phosphor-react';
import '../../styles/styles.css';
import './WelcomeNameform.css';

const caretVariants = {
    on: { opacity: 1 },
    off: { opacity: 0 },
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
        text: '',
        typed: false,
    };

    // typing on RIGHT hand side of =
    onChange = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({ text: e.currentTarget.value });
        this.setState({ typed: true });
    };

    render() {
        return (
            <motion.div className="containerStyle">
                <br />
                <div className="flexContainer">
                    <motion.div
                        variants={caretVariants}
                        initial="on"
                        animate={{ opacity: 0 }}
                        transition={{
                            repeat: Infinity,
                            duration: 0.5,
                            repeatType: 'mirror',
                        }}
                    >
                        <CaretRight size={100} />
                    </motion.div>

                    <motion.input
                        whileFocus={{ scale: 0.9 }}
                        type="text"
                        value={this.state.text}
                        onChange={this.onChange}
                        className="inputStyle"
                        placeholder="type your name here"
                        autoFocus
                    />
                </div>
            </motion.div>
        );
    }
}

export default WelcomeNameform;
