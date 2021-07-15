import React from 'react'
import MotionDiv from '../../components/MotionDiv/MotionDiv'
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div>
            <MotionDiv text='hello' 
            onTap={null} 
            style={{backgroundColor:'blue'}} 
            whileTap={{
                scale: 1.25,
                rotate: 90,
                backgroundColor: "#07F",
            }}/>
            <MotionDiv text='hello' 
            onTap={null} 
            style={{backgroundColor:'red'}} 
            whileTap={{
                scale: 1.25,
                rotate: 90,
                backgroundColor: "#07F",
            }}/>
            
        </div>
    )
}

export default About
