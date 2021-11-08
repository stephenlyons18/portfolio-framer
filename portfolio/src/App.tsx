import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
    const [ContactToggle, setContactToggle] = useState(false);
    const location = useLocation();
    return (
        <div>
            <NavBar />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    );
}

export default App;
