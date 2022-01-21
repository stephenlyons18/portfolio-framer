import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Chat, LinkedinLogo, GithubLogo, List } from 'phosphor-react';

const NavBar = () => {
    //detect if the device is a mobile device
    const isMobile = window.innerWidth < 500;
    const [isMobileOpen, setMobileOpen] = useState('closed');
    //create a window resize listener and set the state of the isMobile
    //variable to the new value
    window.addEventListener('resize', () => {
        isMobile ? setMobileOpen('open') : setMobileOpen('closed');
    });

    return !isMobile ? (
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
    ) : (
        <>
            <div className="mobileNav">
                <div className="mobileNavContainer">
                    <div className="mobileNavTitle">
                        <Link to="/" className="noDecor">
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className="NavLinkStyle"
                            >
                                <h3 style={{ margin: '0px' }}>Stephen Lyons</h3>
                            </motion.div>
                        </Link>
                    </div>
                    {/* create a menu button that opens the menu */}
                    <div className="mobileNavMenu">
                        <motion.div
                            className="mobileNavMenuButton"
                            onClick={() => {
                                setMobileOpen(
                                    isMobileOpen === 'closed'
                                        ? 'open'
                                        : 'closed'
                                );
                                console.log(isMobileOpen);
                            }}
                            animate={isMobileOpen}
                            initial="closed"
                            variants={MobileMenuVariants}
                        >
                            <List size={40} style={{ color: '#fff' }} />
                        </motion.div>
                    </div>
                </div>
            </div>
            {isMobileOpen === 'closed' ? (
                <ul>
                    <li>
                        <Link to="/projects" className="noDecor">
                            <motion.div
                                variants={MenuVariants}
                                initial="initial"
                                animate="animate"
                                whileTap="tap"
                                className="NavLinkStyle"
                            >
                                <h5 style={{ margin: '0px' }}>PROJECTS</h5>
                            </motion.div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" className="noDecor">
                            <motion.div
                                className="NavLinkStyle"
                                whileTap={{ scale: 0.9 }}
                            >
                                <h5 style={{ margin: '0px' }}>ABOUT</h5>
                            </motion.div>
                        </Link>
                    </li>
                </ul>
            ) : (
                <></>
            )}
        </>
    );
};
const MenuVariants = {
    initial: {
        opacity: 0,
        x: '-100vw',
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    hover: {
        x: 0,
    },
    pressed: {
        x: '-100vw',
    },
};

const MobileMenuVariants = {
    open: {
        width: '80%',
        height: 'auto',
        background: '#434343',

        transition: {
            spring: {
                stiffness: 100,
                damping: 10,
            },
        },
    },
    closed: {
        height: '0',
        width: '0',
        background: '#000',
        transition: {
            spring: {
                stiffness: 100,
                damping: 10,
            },
        },
    },
};

export default NavBar;
