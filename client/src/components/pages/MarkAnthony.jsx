import React, { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../storeManagement/AppContext';
import {portfolioTiles} from '../../portfolioData/markAnthonyBalls';
import CaptionCard from '../CaptionCard';
import Marquee from 'react-fast-marquee';

function MarkAnthony() {

    const {setApp} = useContext(AppContext);

    useEffect(() => {
        setApp({type: 'track', payload: 'balls'});
        return () => {
            setApp({type: 'track', payload: 'balls'});
        }
    },[]);

    const showTiles = portfolioTiles.map((tile,i) => {
        return (
            <CaptionCard key={i} card={tile} className='thisTile'/>
        )
    })

    return (
        <div className='pageInSpeakerWindow align'>
            <div id='headerMA' className='super'>
                Mark Anthony | A Portfolio
            </div>

            <Marquee className='marquee' pauseOnHover={true} speed={125} >
                {showTiles}
            </Marquee>
            <Marquee className='marquee' pauseOnHover={true} speed={125} direction='right' >
                {showTiles}
            </Marquee>
        
        </div>
    )
}

export default MarkAnthony

//thanks to https://www.react-fast-marquee.com/documentation#usage