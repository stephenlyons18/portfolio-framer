import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Chat } from 'phosphor-react';
import ContactOverlay from '../ContactOverlay/ContactOverlay';
import { setConstantValue } from 'typescript';

const Navlink = () => {};

const NavBar = () => {
    const [open, setOpen] = useState('closed');
    return (
        <div className="NavContainerStyle">
            <Link to="/" className="noDecor">
                {' '}
                <motion.div whileTap={{ rotate: 10 }} className="NavLinkStyle">
                    HOME
                </motion.div>{' '}
            </Link>
            <Link to="/projects" className="noDecor">
                {' '}
                <motion.div whileTap={{ rotate: 10 }} className="NavLinkStyle">
                    PROJECTS
                </motion.div>{' '}
            </Link>
            <Link to="/About" className="noDecor">
                {' '}
                <motion.div className="NavLinkStyle" whileTap={{ rotate: 10 }}>
                    ABOUT
                </motion.div>
            </Link>
            <motion.div whileTap={{ scale: 0.9 }} className="NavLinkStyle">
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

            <ContactOverlay open="open" />
        </div>
    );
};

export default NavBar;
