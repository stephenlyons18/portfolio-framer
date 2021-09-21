import React from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Item } from './Item';
import { List } from './List';
import { BrowserRouter as Router, Route } from 'react-router-dom';
interface storeProps {
    match: string;
}
const Store: React.FC<storeProps> = (storeProps) => {
    let id = storeProps.match;
    const imageHasLoaded = true;

    return (
        <>
            <List selectedId={id} />
            <AnimatePresence>
                {id && imageHasLoaded && <Item id={id} key="item" />}
            </AnimatePresence>
        </>
    );
};

export default function Projects() {
    return (
        <div className="container">
            <AnimateSharedLayout type="crossfade">
                <Header />
                <Router>
                    <Route path={['/:id', '/']} component={Store} />
                </Router>
            </AnimateSharedLayout>
        </div>
    );
}
