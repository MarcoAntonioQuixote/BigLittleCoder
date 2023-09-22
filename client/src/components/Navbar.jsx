import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import webHeader from '../assets/bigLittleCoder.png'
import { AppContext } from '../storeManagement/AppContext';


function Navbar() {

    const {app} = useContext(AppContext);
    const links = ['Big Little Coder','Cohorts','1-on-1','Projects','Mark Anthony'];

    function SpecialLink({link}) {

        let split = [...link];
        let special = link === app.currentPage ? 'navHover' : null;

        const showSplit = split.map((letter,i) =>         
            <span key={i} style={{'--i': i}} >{letter}</span>
        )

        if (link === app.currentPage) {

        }

        return (
            <h2 className={special}>
                {showSplit}
            </h2>
        )
    }

    return (
    <div>
        <img src={webHeader} alt="Big Little Coder Logo" id="webLogo" />        

        <div id="navLinks">
            {links.map(link => <SpecialLink key={link} link={link} />)}
        </div>

        {/* <div id='navLinks'>
            <Link to='/'>Big Little Coder</Link>
            <Link to='/1-on-1'>1-on-1</Link>
            <Link to='/cohorts'>Cohort</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/MarkAnthony'>Mark Anthony</Link>
        </div> */}
    </div>
    )
}

export default Navbar