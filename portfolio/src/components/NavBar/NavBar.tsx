import React from 'react'
import {Link} from 'react-router-dom'
import { rootCertificates } from 'tls'
import MotionDiv from '../MotionDiv/MotionDiv'
const Navlink = () => {
        
}

const NavBar = () => {
    return (
        <div style={containerStyle}>
            <Link to="/"> <MotionDiv text='Home' onTap={{rotate: 10}} whileTap={{rotate: 10}} style={NavLinkStyle} /> </Link>
            <Link to="/projects"> <MotionDiv text='Projects' onTap={null} whileTap={null} style={NavLinkStyle} /> </Link>
            <Link to="/About"> <MotionDiv text='About' onTap={null} whileTap={null} style={NavLinkStyle} /> </Link>
        </div>
    )
}


export default NavBar

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    background: "#6B6B6B",
}
const NavLinkStyle = {
    margin: 10,
    padding: 10
}