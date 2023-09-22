import React from 'react';
import webHeader from '../assets/bigLittleCoder.png';
import SpecialLink from './SpecialLink';

function Navbar() {
    const links = ['Big Little Coder','Cohorts','1-on-1','Projects','Mark Anthony'];

    return (
    <div>
        <img src={webHeader} alt="Big Little Coder Logo" id="webLogo" />        

        <div id="navLinks">
            {links.map(link => <SpecialLink key={link} link={link} />)}
        </div>
        
    </div>
    )
}

export default Navbar