import React from 'react'
import Home from '../../Pages/Home/Home';
import Projects from '../../Pages/Projects/Projects';
import About from '../../Pages/About/About';
import { AnimatePresence } from 'framer-motion';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
const RouterWrap = () => {
    return (

        <div>
        <Router>
            

                {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
                */}
                <AnimatePresence>
                    <Switch>
                        <Route exact path="/">
                            <Home text='hello world' onTap={console.log('hello world')} style={{color:'blue'}} />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/projects">
                            <Projects text='hello world2' onTap={console.log('hello world2')} style={{color:'blue'}} />
                        </Route>
                    </Switch>
                </AnimatePresence>
            
            </Router>
            </div>
    )
}

export default RouterWrap
