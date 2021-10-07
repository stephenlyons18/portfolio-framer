import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { Chat } from 'phosphor-react';
import ChatBox from '../../assets/images/chat-bubble.svg';
import ContactOverlay from '../ContactOverlay/ContactOverlay';
import { setConstantValue } from 'typescript';
import { padding } from '@mui/system';

const NavBar = () => {
    const [open, setOpen] = useState('closed');
    return (
        <nav>
            <div className="NavContainerStyle">
                <div style={{ color: 'white', marginLeft: '40px' }}>
                    <h3 style={{ marginBottom: '10px' }}>Stephen Lyons</h3>
                    <h4>Software Engineer</h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }}>
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
                </div>
                <motion.div
                    style={{ marginRight: '40px' }}
                    whileTap={{ scale: 0.9 }}
                    className="contactButtonStyle"
                >
                    <Chat size={40} style={{ color: '#5aff15' }} />
                </motion.div>
            </div>
        </nav>
    );
};

export default NavBar;
