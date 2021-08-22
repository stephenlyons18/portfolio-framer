import { motion } from 'framer-motion'
import React from 'react'
import {Link} from 'react-router-dom'


const Navlink = () => {
        
}

const NavBar = () => {
    return (
        <div style={containerStyle}>
            <Link to="/"> <motion.div whileTap={{rotate: 10}} style={NavLinkStyle} >Home</motion.div> </Link>
            <Link to="/projects"> <motion.div whileTap={{rotate: 10}} style={NavLinkStyle} >Projects</motion.div> </Link>
            <Link to="/About"> <motion.div style={NavLinkStyle} whileTap={{rotate: 10}}>About</motion.div></Link>
        </div>
    )
}


export default NavBar

const containerStyle = {
    display: "flex",
    justifyContent: "flex-start",
    overflow: "hidden",
    background: "#6B6B6B",
    
}
const NavLinkStyle = {
    padding: 10,
    margin: 20,
    borderRadius: 10,
    background: "#33658a"

}