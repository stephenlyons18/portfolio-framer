import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function App() {
    //const [ContactToggle, setContactToggle] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const handlers = useSwipeable({
        onSwipedLeft: (eventData) => swipeLeft(eventData),
        onSwipedRight: (eventData) => swipeRight(eventData),
    });
    let navigate = useNavigate();

    function swipeLeft(eventData) {
        if (eventData.deltaX > 250) {
            if (currentPage === 0) {
                setCurrentPage(2);
                console.log('swiped left');
            } else if (currentPage === 1) {
                setCurrentPage(0);
            } else if (currentPage === 2) {
                setCurrentPage(1);
            }
            handleSwipe(eventData);
        }
    }
    function swipeRight(eventData) {
        if (eventData.deltaX > 250) {
            if (currentPage === 0) {
                setCurrentPage(1);
                console.log('swiped right');
            } else if (currentPage === 1) {
                setCurrentPage(2);
            } else if (currentPage === 2) {
                setCurrentPage(0);
                console.log('swiped right');
            }
            handleSwipe(eventData);
        }
    }
    //use a listener to handle navigation based on which page is currently active
    const handleSwipe = (e) => {
        console.log(e);
        if (currentPage === 0) {
            navigate('/', { state: { swipeDirection: e.dir } });
        } else if (currentPage === 1) {
            navigate('/projects', { state: { swipeDirection: e.dir } });
        } else if (currentPage === 2) {
            navigate('/about', { state: { swipeDirection: e.dir } });
        }
    };

    return (
        <div {...handlers}>
            <NavBar />
            <AnimatePresence exitBeforeEnter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
