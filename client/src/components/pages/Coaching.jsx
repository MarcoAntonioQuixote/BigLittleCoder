import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../storeManagement/AppContext';
import { Button } from '@mui/material';

function Coaching() {

    const {setApp} = useContext(AppContext);

    // useEffect(() => {
    //     setApp({type: 'track', payload: 'cohort'});
    //     return () => {
    //         setApp({type: 'track', payload: null});
    //     }
    // },[]);

    return (
        <div className='pageInSpeakerWindow coaching'>
            <img id='cohortGif' src='/gifs/blcVideo.gif' />
            <span>Check out these Cohorts</span>
            <Button className='fixSize cohort' variant='text'>
                Sure!
            </Button>
        </div>
    )
}

export default Coaching