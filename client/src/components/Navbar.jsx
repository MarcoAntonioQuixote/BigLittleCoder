import React from 'react'
import { Link } from 'react-router-dom';
import webHeader from '../assets/bigLittleCoder.png'


function Navbar() {
    return (
    <div id='header'>
        <img src={webHeader} alt="Big Little Coder Logo" id="webLogo" />        
        <div id='navLinks'>
            <Link to='/'>Big Little Coder</Link>
            <Link to='/1-on-1'>1-on-1</Link>
            <Link to='/cohorts'>Cohort</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/MarkAnthony'>Mark Anthony</Link>
        </div>
    </div>
    )
}

export default Navbar