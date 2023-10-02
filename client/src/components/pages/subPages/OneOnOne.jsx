import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function OneOnOne() {
    return (
        <div className='pageInSpeakerWindow staticPage'>
            <h3>One on One Sessions:</h3>            
            <div className='cohortSelect'>
                <p>🗓️ We meet on your time table</p>
                <p>🧑🏽‍🎨 Directly build out your portfolio</p>
                <p>🧜🏽‍♂️ Expand your <Link to='/TechStack' style={{color: '#ff00aa', fontWeight: 600}}>Tech Stack</Link> the way you want</p>
                <p>✏️ Write much better, cleaner code</p>
                <p>💵 Total Price: <span style={{fontWeight: 600}}>$80/hr</span></p>
            </div>

            <br/>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to='/cohorts'>
                    <Button variant='contained'>Cohorts</Button>
                </Link>
                <Link to='/contact'>
                    <Button variant='contained' style={{backgroundColor: '#ff00aa'}}>Find out more</Button>
                </Link>
            </div>
        </div>
    )
}

export default OneOnOne

/*
    Sessions are individualized to meet your needs and recorded so you can re-review.

    Directly build out your portfolio 

    Gain a deep understanding of the underlying tech stack

*/