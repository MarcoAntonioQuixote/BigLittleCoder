import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AppContext } from '../storeManagement/AppContext';

function LRScrollSelection({children}) {

    const {app,setApp} = useContext(AppContext);
    const selection = app.monster.name;

    const handleScroll = (goRight) => {
        let allC = app.load.characters;
        let index = allC.indexOf(selection);
        let newIndex = goRight ? index + 1 : index - 1;
        if (newIndex === -1 || newIndex === allC.length) {
            newIndex = goRight ? 0 : allC.length - 1;
        }
        
        setApp({type: 'selectMonster', payload: allC[newIndex]})
    }

    const select = () => {
        setApp({type: 'selectMode', payload: 'start'})
    }

    return (
    <>
        <Button onClick={() => handleScroll(false)} className='scrollButton' size='large' >◀️</Button>
            {children}
        <Button onClick={() => handleScroll(true)} className='scrollButton' size='large'>▶️</Button>
        <Button onClick={select} id='scrollSelect'>Select</Button>
    </>
    )
}

export default LRScrollSelection