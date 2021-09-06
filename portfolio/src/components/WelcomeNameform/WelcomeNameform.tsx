import React from 'react';
import { motion } from 'framer-motion';

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
            <motion.div variants={variants} initial="notTyped" animate="typed">
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.onChange}
                />
            </motion.div>
        );
    }
}
const variants = {
    typed: { opacity: 1 },
    notTyped: { opacity: 0.1 },
};
export default WelcomeNameform;
