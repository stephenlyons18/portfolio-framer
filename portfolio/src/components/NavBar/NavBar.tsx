import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { Chat, LinkedinLogo, GithubLogo } from 'phosphor-react';

const NavBar = () => {
    const [open, setOpen] = useState('closed');
    //

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
                            <h5 style={{ margin: '0px' }}>PROJECTS</h5>
                        </motion.div>{' '}
                    </Link>
                    <Link to="/About" className="noDecor">
                        {' '}
                        <motion.div
                            className="NavLinkStyle"
                            whileTap={{ scale: 0.9 }}
                        >
                            <h5 style={{ margin: '0px' }}>ABOUT</h5>
                        </motion.div>
                    </Link>
                </div>
                <motion.div className="socials">
                    <Chat size={40} className="contactButtonStyle" />
                    <a
                        href="https://www.linkedin.com/in/stephen-lyons/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <LinkedinLogo
                            size={40}
                            className="contactButtonStyle"
                        />
                    </a>
                    <a
                        href="https://github.com/stephenlyons18"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubLogo size={40} className="contactButtonStyle" />
                    </a>
                </motion.div>
            </div>
        </nav>
    );
};

export default NavBar;
