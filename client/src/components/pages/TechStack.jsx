import React from 'react';
import { techTiles } from '../../portfolioData/markAnthonyBalls';


function TechStack() {

    const showTiles = techTiles.map((tile,i) => <GlowCard key={i} info={tile} />)

    return (
        <div className='pageInSpeakerWindow aroundOnPage'>
            <div className="container">
                {showTiles}
            </div>
        </div>
    )
}

export default TechStack;

//special thanks

//https://codepen.io/kodplay/pen/oNBreRJ

function GlowCard({info}) {
    return (
        <div className="box">
            <span></span>
            <div className="content">
                <h2>{info.tech}</h2>
                <p>{info.text}</p>
                {/* <a href="#">Read More</a> */}
                <img className={info.enlarge ? 'glowIcon' : null} style={{width: '50px'}} src={info.image} alt="" />
            </div>
        </div>
    )
}