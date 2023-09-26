import React from 'react';
import { techTiles } from '../../portfolioData/markAnthonyBalls';
import GlowCard from '../GlowCard';


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
