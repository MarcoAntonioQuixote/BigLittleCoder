import React from 'react';
import { techTiles } from '../../portfolioData/markAnthonyBalls';
import GlowCard from '../reusable/GlowCard';


function TechStack() {

    const showTiles = techTiles.map((tile,i) => <GlowCard key={i} info={tile} doNothing={true} />) //TODO remove doNOTHING

    return (
        <>        
            <div className='pageInSpeakerWindow'>
                <div className="container">
                    {showTiles}
                </div>
            </div>
            <div className="arrow"></div>
        </>
    )
}

export default TechStack;

//special thanks:

//https://codepen.io/JoshMac/pen/MaYEmJ
