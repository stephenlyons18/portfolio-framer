import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Navlink = () => {};

const NavBar = () => {
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
        </div>
    );
};

export default NavBar;
