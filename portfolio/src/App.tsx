import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
    const [ContactToggle, setContactToggle] = useState(false);
    return (
        <div>
            <Router>
                <NavBar />
                <AnimatePresence>
                    <Switch>
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
            </Router>
        </div>
    );
}

export default App;
