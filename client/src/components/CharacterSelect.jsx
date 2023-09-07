import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../storeManagement/AppContext';
import {CharacterContext} from '../storeManagement/CharacterContext';
import { Button, Tooltip } from '@mui/material';
import TurnTable from './3D/TurnTable';

function CharacterSelect() {

    const {app,dispatch} = useContext(AppContext);
    const [index,setIndex] = useState(null);
    const [names,setNames] = useState([]);
    const {characters} = useContext(CharacterContext);

    useEffect(() => {
        let cNames = [];
        for (let name in characters) {
            cNames.push(name);
        }
        if (cNames.length > 0) {
            setNames(cNames);
            setIndex(0);
        }
        console.log(cNames);
    }, [characters]);

    const toggleSelection = (goRight) => {
        let newIndex;
        if (goRight) {
            newIndex = index === names.length-1 ? 0 : index + 1;
        } else {
            newIndex = index === 0 ? names.length-1 : index - 1;
        }
        setIndex(newIndex);
        let payload = names[newIndex];
        dispatch({type: 'selectMonster', payload})
    }

    useEffect(() => {
        console.log(characters);
    }, [characters])

    return (
    <>
        <div className='glassBox'>
            <Tooltip onClick={() => toggleSelection(true)} title={index === 0 ? names[names.length-1] : names[index]} variant='soft' placement='top' size='lg'>
                <h2>{'<'}</h2>
            </Tooltip>
            <TurnTable />
            <Tooltip onClick={() => toggleSelection(false)} title={index === names.length-1 ? names[0] : names[index+1]} variant='soft' placement='top' size='lg'>
                <h2>{'>'}</h2>
            </Tooltip>
        </div>
        <Button onClick={() => console.log(app)}>Select</Button>
    </>
    )
}

export default CharacterSelect