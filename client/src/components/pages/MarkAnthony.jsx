import React, { useContext, useEffect, useState, useRef } from 'react';
import { AppContext } from '../../storeManagement/AppContext';
import {portfolioTiles} from '../../portfolioData/markAnthonyBalls';
import CaptionCard from '../CaptionCard';
import Marquee from 'react-fast-marquee';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MarkAnthony() {

    const {setApp} = useContext(AppContext);

    //TODO all of these that you'r tracking, you could just define a beter hook yourself - tsk tsk

    useEffect(() => {
        setApp({type: 'track', payload: 'balls'});
        return () => {
            setApp({type: 'track', payload: null});
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

            <div id='maLabels' style={{display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                <span>passionate</span><span>ready to teach</span><span>eager to learn</span>
            </div>
            <Button className='fixSize button markAnthony' variant='text'>
                <Link to='/contact'>
                    Contact
                </Link>
            </Button>
        
        </div>
    )
}

export default MarkAnthony

//thanks to https://www.react-fast-marquee.com/documentation#usage