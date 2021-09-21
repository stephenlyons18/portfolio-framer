import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { Chat } from 'phosphor-react';
import ContactOverlay from '../ContactOverlay/ContactOverlay';
import { setConstantValue } from 'typescript';

const NavBar = () => {
    const [open, setOpen] = useState('closed');
    return (
        <nav>
            <div className="NavContainerStyle">
                <Link to="/" className="noDecor">
                    {' '}
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="NavLinkStyle"
                    >
                        HOME
                    </motion.div>{' '}
                </Link>
                <Link to="/projects" className="noDecor">
                    {' '}
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="NavLinkStyle"
                    >
                        PROJECTS
                    </motion.div>{' '}
                </Link>
                <Link to="/About" className="noDecor">
                    {' '}
                    <motion.div
                        className="NavLinkStyle"
                        whileTap={{ scale: 0.9 }}
                    >
                        ABOUT
                    </motion.div>
                </Link>
                <motion.div
                    whileTap={{ scale: 0.9 }}
                    className="contactButtonStyle"
                >
                    <Chat
                        size={48}
                        onClick={() => {
                            if (open === 'closed') {
                                setOpen('open');
                            } else {
                                setOpen('closed');
                            }
                        }}
                    />
                </motion.div>
            </div>
        </nav>
    );
};

export default NavBar;
