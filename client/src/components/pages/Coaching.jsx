import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../storeManagement/AppContext';
import { Button } from '@mui/material';
import CaptionCard from '../CaptionCard';

function Coaching() {

    const {setApp} = useContext(AppContext);

    // useEffect(() => {
    //     setApp({type: 'track', payload: 'cohort'});
    //     return () => {
    //         setApp({type: 'track', payload: null});
    //     }
    // },[]);

    let options = [
        {text: 'Cohorts', image: '/gifs/blcVideo.gif'},
        {text: '1-on-1', image: '/gifs/coder4.gif'},
    ]

    return (
        <div className='pageInSpeakerWindow coaching'>

            {options.map((option,i) => <CaptionCard className='thisTile' key={i} card={option} />)}



                {/* <img className='coachingGif' id='cohortGif' src='/gifs/blcVideo.gif' />
                <img className='coachingGif' src='/gifs/coder4.gif' /> */}
            {/* <Button className='fixSize cohort' variant='text'>
                Sure!
            </Button> */}
        </div>
    )
}

export default Coaching