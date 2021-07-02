import Nav from './components/myNav.js';

import React, {Component} from 'react';
import { SideBar } from './components/SideBar/SideBar.js';
import { motion, Scroll, useCycle } from "framer-motion";
import {Frame, Scroll as FramerScroll} from 'framer';
import './styles.css';
export default class App extends Component {
  
  render(){
    return(
    <div className="App">
      
      <SideBar/>
      <FramerScroll direction={'vertical'} onTap={{scale: 2, radius: 30, rotate:90}} >
        <Frame radius={30}>Hello world</Frame>
        <Frame radius={30}>Content2</Frame>
        <Frame radius={30}>Content3</Frame>
        <Frame radius={30}>Content4</Frame>
      </FramerScroll>

    </div>
  );}
}
