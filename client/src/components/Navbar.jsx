import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import webHeader from '../assets/bigLittleCoder.png'

function Navbar() {

    const links = ['Big Little Coder','Cohorts','1-on-1','Projects','Mark Anthony'];
    const location = useLocation();

    function SpecialLink({link}) {
        let path = decodeURIComponent(location.pathname);
        let defPath = path === "/" ? '/Big Little Coder' : path;
        let focus = `/${link}` === defPath ? 'navFocus' : 'navNoFocus';
        let split = [...link];
    
        const showSplit = split.map((letter,i) =>         
            <span key={i} style={{'--i': i}} >{letter}</span>
        )

        link = link === 'Big Little Coder' ? '/' : link;
        link = link === 'Mark Anthony' ? 'MarkAnthony' : link;

        return (
            <Link to={link} className={focus}>
                <h2 >
                    {showSplit}
                </h2>
            </Link>
        )
    }

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