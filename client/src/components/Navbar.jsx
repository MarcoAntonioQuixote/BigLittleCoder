import React from 'react';
import webHeader from '../assets/bigLittleCoder.png';

import SpecialLink from './reusable/SpecialLink';


function Navbar() {
    const links = ['Big Little Coder','TechStack','Coaching','Projects','Mark Anthony'];

    /* TODO: Make Nav Bar On Smaller Devices, px threshold?? 800 */
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