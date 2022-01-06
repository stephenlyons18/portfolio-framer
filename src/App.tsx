import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import useState from 'react';

function App() {
    //const [ContactToggle, setContactToggle] = useState(false);
    return (
        <div>
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
