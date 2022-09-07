import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import MobileNav from './components/NavBar/MobileNav';
import { useState } from 'react';

function App() {
    //const [ContactToggle, setContactToggle] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
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
    return (
        <>
            {!isMobile ? (
                <NavBar
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            ) : null}

            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/projects"
                        element={<Projects isMobile={isMobile} />}
                    />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AnimatePresence>
            {isMobile ? (
                <NavBar
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            ) : null}
        </>
    );
}

export default App;
