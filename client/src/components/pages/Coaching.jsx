import React, { useContext, useState } from 'react'
import { AppContext } from '../../storeManagement/AppContext';
import GlowCard from '../reusable/GlowCard';
import { coachingOptions } from '../../portfolioData/markAnthonyBalls';
import MoreInfoModal from '../reusable/MoreInfoModal';

function Coaching() {

    const {setApp} = useContext(AppContext);
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     setApp({type: 'track', payload: 'cohort'});
    //     return () => {
    //         setApp({type: 'track', payload: null});
    //     }
    // },[]);

    const showTiles = coachingOptions.map((option,i) => <GlowCard key={i} info={option} setOpen={setOpen} openModal={i === 0 ? true : false}/>)

    return (
        <>        
            <div className='pageInSpeakerWindow '>
                <div className="container coachingCards">
                    {showTiles}
                </div>
            </div>
            <div class="arrow arrowHide"></div>
            <MoreInfoModal open={open} setOpen={setOpen} />
        </>
    )
}

export default Coaching