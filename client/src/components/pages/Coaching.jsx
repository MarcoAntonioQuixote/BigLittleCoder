import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../storeManagement/AppContext';
import GlowCard from '../GlowCard';
import { coachingOptions } from '../../portfolioData/markAnthonyBalls';

function Coaching() {

    const {setApp} = useContext(AppContext);

    // useEffect(() => {
    //     setApp({type: 'track', payload: 'cohort'});
    //     return () => {
    //         setApp({type: 'track', payload: null});
    //     }
    // },[]);

    const showTiles = coachingOptions.map((option,i) => <GlowCard key={i} info={option} />)

    return (
        <>        
            <div className='pageInSpeakerWindow coaching'>
                <div className="container coachingCards">
                    {showTiles}
                </div>
            </div>
            <div class="arrow arrowHide"></div>
        </>
    )
}

export default Coaching