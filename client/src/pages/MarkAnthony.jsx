import React, { useContext, useEffect } from 'react';
import { AppContext } from '../storeManagement/AppContext';

function MarkAnthony() {

    const {setApp} = useContext(AppContext);

    useEffect(() => {
        setApp({type: 'showBalls', payload: true});

        return () => {
            setApp({type: 'showBalls', payload: false});
        }

    },[]);

    return (
        <div className='page'>
        </div>
    )
}

export default MarkAnthony