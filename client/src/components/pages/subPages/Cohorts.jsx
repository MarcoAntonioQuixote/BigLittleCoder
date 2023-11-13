import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../storeManagement/AppContext';

function Cohorts() {

    const {app} = useContext(AppContext);
    const {type} = app.dimensions;

    const style = type !== 'long' ? {} : {
        fontSize: '18px',
        paddingTop: '100px'
    }

    return (
        <div className='pageInSpeakerWindow staticPage' style={style}>
            <h3>Upcoming Cohorts:</h3>
            <h5 className='cohortSelect'>
                <span>⭕ December: Mon & Wed at 7 PM PST</span>
            </h5>
            <h5 className='cohortSelect'>
                <span>⭕ February: Tue & Thu at 7 PM EST</span>
            </h5>
            <p>📆 Cohorts run for 24 weeks</p>
            <p>⌚ Each class is 2 hours long and recorded</p>
            <p>✨ 1-on-1 mentor meetings included</p>
            <p>🧜🏽‍♂️ Take a dive into our <Link to='/TechStack' style={{color: '#ff00aa', fontWeight: 600}}>Tech Stack</Link>!</p>
            <p>💵 Total Price: <span style={{fontWeight: 600}}>$3200</span></p>
            <br />
            <div className={`infoButtons ${type === 'mobile' ? 'mobile' : ''}`} >
                <Link to='/1-on-1'>
                    <Button variant='contained'>1-on-1</Button>
                </Link>
                <Link to='/contact'>
                    <Button variant='contained' style={{backgroundColor: '#ff00aa'}}>Find out more</Button>
                </Link>
            </div>
        </div>
    )
}

export default Cohorts