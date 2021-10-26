import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { Chat } from 'phosphor-react';

import ContactOverlay from '../ContactOverlay/ContactOverlay';

const NavBar = () => {
    const [open, setOpen] = useState('closed');
    return (
        <nav>
            <div className="NavContainerStyle">
                <div style={{ color: 'white', marginLeft: '40px' }}>
                    <Link to="/" className="noDecor">
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            className="NavLinkStyle"
                        >
                            <h3 style={{ margin: '0px' }}>Stephen Lyons</h3>
                            <h5 style={{ margin: '0px' }}>Software Engineer</h5>
                        </motion.div>
                    </Link>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                </div>
                <motion.div
                    style={{ marginRight: '40px' }}
                    whileTap={{ scale: 0.9 }}
                    className="contactButtonStyle"
                >
                    <Chat size={40} />
                </motion.div>
            </div>
        </nav>
    );
};

export default NavBar;
