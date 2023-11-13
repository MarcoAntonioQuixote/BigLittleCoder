import React, { useContext, useEffect, useRef } from 'react'
import GlowCard from '../reusable/GlowCard';
import { coachingOptions } from '../../portfolioData/markAnthonyBalls';
import { AppContext } from '../../storeManagement/AppContext';

function Coaching() {

    const {app, setApp} = useContext(AppContext);
    const {type} = app.dimensions;

    const mouseEnter = () => {
        setApp({type: 'setInstructions', payload: 'Click for more info!'})
    }

    const mouseLeave = () => {
        setApp({type: 'setInstructions', payload: 'Want to learn in a group setting? Or 1-on-1?'})
    }

    const showTiles = coachingOptions.map((option,i) => <GlowCard key={i} info={option} type={type} actions={{mouseEnter,mouseLeave}}/>)

    return (
        <>        
            <div className='pageInSpeakerWindow '>
                <div className="container coachingCards">
                    {showTiles}
                </div>
            </div>
            <div className="arrow arrowHide"></div>
        </>
    )
}

export default Coaching