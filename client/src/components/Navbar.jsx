import React, { useContext, useRef, useState, useEffect } from 'react';
import webHeader from '../assets/bigLittleCoder.png';

import SpecialLink from './reusable/SpecialLink';

import Button from '@mui/material/Button';
import { AppContext } from '../storeManagement/AppContext';




function Navbar() {
	const {app} = useContext(AppContext);
    const [open,setOpen] = useState(false);

    const links = ['Big Little Coder','TechStack','Coaching','Projects','Mark Anthony'];

    /* TODO: Make Nav Bar On Smaller Devices, px threshold?? 800 */

	function MobileMenu() {

		const menuRef = useRef();

		useEffect(() => {
			function handleClickOutside(event) {
				if (menuRef.current && !menuRef.current.contains(event.target)) {
					setOpen(false);
				}
			}
	
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, []);

		return (
		<>			
			{ open ? 			
			<div ref={menuRef} onClick={() => setOpen(!open)} id="mobileNavLinks">
				{links.map(link => <SpecialLink key={link} link={link} />)}
			</div>:        
			<Button onClick={() => setOpen(!open)} id='menuButton' variant='contained'>
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/1024px-Hamburger_icon_white.svg.png" alt="" />
			</Button>
			}
		</>
		)
	}

    return (
    <div>
        <img src={webHeader} alt="Big Little Coder Logo" id="webLogo" />

        {app.status.started && <MobileMenu />}

        <div id="navLinks">
            {links.map(link => <SpecialLink key={link} link={link} />)}
        </div>
        
    </div>
    )
}

export default Navbar;
