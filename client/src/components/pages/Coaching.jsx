import React from 'react'
import GlowCard from '../reusable/GlowCard';
import { coachingOptions } from '../../portfolioData/markAnthonyBalls';

function Coaching() {

    // useEffect(() => {
    //     setApp({type: 'track', payload: 'cohort'});
    //     return () => {
    //         setApp({type: 'track', payload: null});
    //     }
    // },[]);

    const showTiles = coachingOptions.map((option,i) => <GlowCard key={i} info={option}/>)

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