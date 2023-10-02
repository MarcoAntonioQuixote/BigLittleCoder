import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Cohorts() {
    return (
        <div className='pageInSpeakerWindow staticPage'>
            <h3>Upcoming Cohorts:</h3>
            <div className='cohortSelect'>
                <p>⭕ December: Mon & Wed at 7 PM PST</p>
            </div>
            <div className='cohortSelect'>
                <p>⭕ February: Tue & Thu at 7 PM EST</p>
            </div>
            <p>📆 Cohorts run for 24 weeks</p>
            <p>⌚ Each class is 2 hours long and recorded</p>
            <p>✨ 1-on-1 mentor meetings included</p>
            <p>🧜🏽‍♂️ Take a dive into our <Link to='/TechStack' style={{color: '#ff00aa', fontWeight: 600}}>Tech Stack</Link>!</p>
            <p>💵 Total Price: <span style={{fontWeight: 600}}>$2400</span></p>
            <br />
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link to='/1-on-1'>
                    <Button variant='contained'>One on Ones</Button>
                </Link>
                <Link to='/contact'>
                    <Button variant='contained' style={{backgroundColor: '#ff00aa'}}>Find out more</Button>
                </Link>
            </div>
        </div>
    )
}

export default Cohorts