import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { AppContext } from '../storeManagement/AppContext';

function LRScrollSelection({children}) {

    const {app,setApp} = useContext(AppContext);
    const selection = app.monster.name;
    const mode = app.status.mode;

    if (mode !== 'selection') return (<>{children}</>);

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
        setApp({type: 'selectMode', payload: 'speaker'})
    }

    return (
    <>
        <Button onClick={() => handleScroll(false)} className='toggleCharButton fixSize' size='large' >◀️</Button>
            {children}
        <Button onClick={() => handleScroll(true)} className='toggleCharButton fixSize' size='large'>▶️</Button>
        <Button className='fixSize' onClick={select} id='charSelect'>Select</Button>
    </>
    )
}

export default LRScrollSelection