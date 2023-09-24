import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../storeManagement/AppContext';
import { Link } from 'react-router-dom';

function MarkAnthony() {

    const {setApp} = useContext(AppContext);

    useEffect(() => {
        setApp({type: 'showBalls', payload: true});

        return () => {
            setApp({type: 'showBalls', payload: false});
        }

    },[]);

    return (
        <div className='pageInSpeakerWindow'>
            <Link to='/contact'>
                <button>click</button>
            </Link>
        </div>
    )
}

export default MarkAnthony