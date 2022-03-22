import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { Chat, LinkedinLogo, GithubLogo, List } from 'phosphor-react';
import { SwipeEventData, useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

interface NavBarProps {
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

function chooseNavigation() {}

const NavBar: React.FC<NavBarProps> = ({ currentPage, setCurrentPage }) => {
    //detect if the device is a mobile device
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    //create a window resize listener
    window.addEventListener('resize', () => {
        setTimeout(() => {
            if (window.innerWidth < 500) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }, 1000);
    });

    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => swipeLeft(eventData),
        onSwipedRight: (eventData) => swipeRight(eventData),
    });
    let navigate = useNavigate();

    function swipeRight(eventData: SwipeEventData) {
        if (eventData.deltaX > 50) {
            if (currentPage === 0) {
                navigate('/projects');
                setCurrentPage(1);
            } else if (currentPage === 1) {
                setCurrentPage(2);
                navigate('/about');
            } else if (currentPage === 2) {
                setCurrentPage(0);
                navigate('/');
            }
        }
    }
    function swipeLeft(eventData: SwipeEventData) {
        if (eventData.deltaX < -100) {
            if (currentPage === 0) {
                navigate('/about');
                setCurrentPage(2);
            } else if (currentPage === 1) {
                navigate('/');
                setCurrentPage(0);
            } else if (currentPage === 2) {
                navigate('/projects');
                setCurrentPage(1);
            }
        }
    }

    return !isMobile ? (
        <nav className="sticky bottom-0">
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
            {/* create a home button on the left, with three nav buttons on the right*/}
            <div className="flex flex-row justify-center">
                <div>
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
                <div {...handlers}>
                    <motion.div className="grid grid-cols-3 grid-rows-2 text-white g-2">
                        <>
                            <motion.p
                                variants={SwipeNavVariants}
                                initial="hidden"
                                animate={currentPage === 0 ? 'open' : 'closed'}
                            >
                                Home
                            </motion.p>
                            <motion.p
                                variants={SwipeNavVariants}
                                initial="hidden"
                                animate={currentPage === 1 ? 'open' : 'closed'}
                            >
                                Projects
                            </motion.p>
                            <motion.p
                                variants={SwipeNavVariants}
                                initial="hidden"
                                animate={currentPage === 2 ? 'open' : 'closed'}
                            >
                                About
                            </motion.p>
                        </>
                        <div></div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

const SwipeNavVariants = {
    open: {
        backgroundColor: '#fff',
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    closed: {
        backgroundColor: '#000',
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
};

export default NavBar;
